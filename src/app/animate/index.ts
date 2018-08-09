import {
    trigger, state,
    style, transition,
    animate,
    keyframes
} from '@angular/animations';

export const btnState = trigger(
    'btnState',
    [
        state('active', style({
            backgroundColor: 'red',
            transform: 'scale(1)'
        })),
        state('inactive', style({
            backgroundColor: 'pink',
            transform: 'scale(1.1)'
        })),
        // both directions of a transition have the same timing
        transition('inactive <=> active', animate('1s ease-in')),
        // several transitions have the same timing configuration
        // transition('inactive => active,active => inactive', animate('100ms ease-in')),
        // transition('active => inactive', animate('100ms ease-out'))
        transition('void => inactive', [
            style({ transform: 'translate(-100%) scale(1)' }),
            animate(100)
        ]),
        transition('inactive => void', [
            animate(100, style({ transform: 'translateX(100%) scale(1)' }))
        ]),
        transition('void => active', [
            style({
                transform: 'translateX(100%) scale(1)'
            }),
            animate(200)
        ]),
        transition('active => void', [
            animate(200, style({ transform: 'translateX(0) scale(0)' }))
        ]),
    ]
);

// inline styles yellow=>red=>blue
export const btnInlineState = trigger(
    'btnInlineState',
    [
        transition('inactive <=> active', [
            style({
                backgroundColor: 'yellow',
                transform: 'scale(1.3)'
            }),
            animate('1s ease-in', style({
                backgroundColor: 'red',
                transform: 'scale(1)'
            }))
        ])
    ]
);

// enter and leave animations
export const flyInOut = trigger('flyInOut', [
    state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    // :enter
    transition('void => *', [
        // style({
        //     opacity: 0,
        //     transform: 'translateX(-100%)'
        // }),
        animate(300, keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    // :leave
    transition('* => void', [
        animate(300, keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
    ])
]);

export const shrinkOut = trigger('shrinkOut', [
    state('in', style({
        height: '*'
    })),
    transition('* => void', [
        style({ height: '*' }),
        animate(1000, style({ height: 0 }))
    ])
]);
