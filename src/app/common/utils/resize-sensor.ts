const win = window as any;
export interface SizeInfo {
  width: number;
  height: number;
}

export type ResizeSensorCallback = (size: SizeInfo) => void;

class EventQueue {
  private q: ResizeSensorCallback[] = [];

  add(callback: ResizeSensorCallback) {
    this.q.push(callback);
  }

  call(sizeInfo: SizeInfo) {
    for (const e of this.q) {
      e.call(this, sizeInfo);
    }
  }

  remove(fn: ResizeSensorCallback) {
    const newQueue = [];
    for (const cb of this.q) {
      if (cb !== fn) {
        newQueue.push(cb);
      }
    }
    this.q = newQueue;
  }

  length() {
    return this.q.length;
  }
}

interface ResizeSensorEle extends HTMLDivElement {
  resetSensor: () => void;
}

interface ResizeElement extends HTMLElement {
  resizedAttached: EventQueue;

  resizeSensor: ResizeSensorEle;
}

function createDivElement(): HTMLDivElement {
  return document.createElement('div') as HTMLDivElement;
}

// https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js

// Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
// In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
// would generate too many unnecessary events.

const requestAnimationFrameFn =
  win.requestAnimationFrame ||
  win.mozRequestAnimationFrame ||
  win.webkitRequestAnimationFrame ||
  function (fn: Function) {
    return window.setTimeout(fn, 20);
  };

/**
 * Iterate over each of the provided element(s).
 *
 * @param {HTMLElement|HTMLElement[]} elements
 * @param {Function}                  callback
 */
function forEachElement(
  elements: HTMLElement | HTMLElement[],
  callback: Function
) {
  const elementsType = Object.prototype.toString.call(elements);
  const isCollectionTyped =
    '[object Array]' === elementsType ||
    '[object NodeList]' === elementsType ||
    '[object HTMLCollection]' === elementsType ||
    '[object Object]' === elementsType;
  // ('undefined' !== typeof jQuery && elements instanceof jQuery) || //jquery
  // ('undefined' !== typeof Elements && elements instanceof Elements); //mootools
  let i = 0;
  // j = elements.length;
  if (isCollectionTyped) {
    const j = (elements as HTMLElement[]).length;
    for (; i < j; i++) {
      callback(elements[i]);
    }
  } else {
    callback(elements);
  }
}

/**
 * Get element size
 * @param {HTMLElement} ele
 * @returns {SizeInfo} {width, height}
 */
function getElementSize(ele: HTMLElement): SizeInfo {
  if (!ele.getBoundingClientRect) {
    return {
      width: ele.offsetWidth,
      height: ele.offsetHeight,
    };
  }

  const rect = ele.getBoundingClientRect();
  return {
    width: Math.round(rect.width),
    height: Math.round(rect.height),
  };
}

/**
 * Class for dimension change detection.
 *
 * @param {Element|Element[]|Elements|jQuery} element
 * @param {Function} callback
 *
 * @constructor
 */

export class ResizeSensor {
  resetSensor: () => void;

  /**
   *  在元素上添加resize事件监听
   * @param {HTMLElement} element
   * @param {Function}    resized
   */
  private static attachResizeEvent(
    el: Element,
    resizedFn: ResizeSensorCallback
  ) {
    if (!el) {
      return;
    }
    const element = el as ResizeElement;

    if (element.resizedAttached) {
      element.resizedAttached.add(resizedFn);
      return;
    }

    element.resizedAttached = new EventQueue();
    element.resizedAttached.add(resizedFn);
    element.resizeSensor = this.createResizeSensor();
    element.appendChild(element.resizeSensor);

    // 监听元素的position属性设置
    // 保证监听元素为相对于监听元素最近的非 static 定位的祖先元素
    const computedStyle = window.getComputedStyle(element);
    const position = computedStyle
      ? computedStyle.getPropertyValue('position')
      : null;
    if (
      'absolute' !== position &&
      'relative' !== position &&
      'fixed' !== position
    ) {
      element.style.position = 'relative';
    }

    const expand = element.resizeSensor.childNodes[0] as HTMLElement;
    const expandChild = expand.childNodes[0] as HTMLElement;
    const shrink = element.resizeSensor.childNodes[1] as HTMLElement;
    let dirty: boolean, rafId: number;
    let size = getElementSize(element);
    let lastWidth = size.width;
    let lastHeight = size.height;
    let initialHiddenCheck = true;
    let lastAnimationFrame = 0;

    const resetExpandShrink = () => {
      const width = element.offsetWidth;
      const height = element.offsetHeight;

      expandChild.style.width = width + 10 + 'px';
      expandChild.style.height = height + 10 + 'px';

      expand.scrollLeft = width + 10;
      expand.scrollTop = height + 10;

      shrink.scrollLeft = width + 10;
      shrink.scrollTop = height + 10;
    };

    const reset = () => {
      // Check if element is hidden
      if (initialHiddenCheck) {
        const invisible =
          element.offsetWidth === 0 && element.offsetHeight === 0;
        if (invisible) {
          // Check in next frame
          if (!lastAnimationFrame) {
            lastAnimationFrame = requestAnimationFrameFn(function () {
              lastAnimationFrame = 0;

              reset();
            });
          }

          return;
        } else {
          // Stop checking
          initialHiddenCheck = false;
        }
      }

      resetExpandShrink();
    };

    element.resizeSensor.resetSensor = reset;

    // 元素尺寸调整
    const onResized = () => {
      rafId = 0;

      if (!dirty) {
        return;
      }

      lastWidth = size.width;
      lastHeight = size.height;

      if (element.resizedAttached) {
        element.resizedAttached.call(size);
      }
    };
    // 滚动条事件监听
    const onScroll = () => {
      size = getElementSize(element);
      dirty = size.width !== lastWidth || size.height !== lastHeight;

      if (dirty && !rafId) {
        rafId = requestAnimationFrameFn(onResized);
      }

      reset();
    };

    expand.addEventListener('scroll', onScroll);
    shrink.addEventListener('scroll', onScroll);
    requestAnimationFrameFn(reset);
  }

  private static createResizeSensor() {
    const divEle = createDivElement();
    // direction' left to right
    divEle.dir = 'ltr';
    divEle.className = 'resize-sensor';
    const divStyle =
      'pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0;' +
      'overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;';

    const styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';
    divEle.style.cssText = divStyle;
    divEle.innerHTML =
      `<div class="resize-sensor-expand" style="${divStyle}">` +
      `<div style="${styleChild}"></div></div>` +
      `<div class="resize-sensor-shrink" style="${divStyle}">` +
      `<div style="${styleChild} width: 200%; height: 200%"></div></div>`;

    return divEle as ResizeSensorEle;
  }

  static detach(
    element: HTMLElement | HTMLElement[],
    callback?: ResizeSensorCallback
  ): void {
    forEachElement(element, function (elem: ResizeElement) {
      if (!elem) {
        return;
      }
      if (elem.resizedAttached && typeof callback === 'function') {
        elem.resizedAttached.remove(callback);
        if (elem.resizedAttached.length()) {
          return;
        }
      }
      if (elem.resizeSensor) {
        if (elem.contains(elem.resizeSensor)) {
          elem.removeChild(elem.resizeSensor);
        }
        delete elem.resizeSensor;
        delete elem.resizedAttached;
      }
    });
  }
  static reset(element: HTMLElement | HTMLElement[]): void {
    forEachElement(element, function (el: ResizeElement) {
      el.resizeSensor.resetSensor();
    });
  }
  constructor(
    private el: HTMLElement | HTMLElement[],
    callback: ResizeSensorCallback
  ) {
    forEachElement(el, (ele: ResizeElement) => {
      ResizeSensor.attachResizeEvent(ele, callback);
    });

    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(function (mutations) {
        for (const i in mutations) {
          if (mutations.hasOwnProperty(i)) {
            const items = mutations[i].addedNodes;
            for (let j = 0; j < items.length; j++) {
              const item = items[j] as ResizeElement;
              if (item.resizeSensor) {
                ResizeSensor.reset(item);
              }
            }
          }
        }
      });

      document.addEventListener('DOMContentLoaded', function (event) {
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });
    }
  }

  detach(callback?: ResizeSensorCallback): void {
    ResizeSensor.detach(this.el, callback);
  }
  reset(): void {
    const el = this.el as ResizeElement;
    el.resizeSensor.resetSensor();
  }
}
