import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

export function throttle(source$: Observable<string>) {
  return source$.pipe(
    debounceTime(350),
    distinctUntilChanged(),
    startWith('')
  );
}
