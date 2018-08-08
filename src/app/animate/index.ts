import {
    trigger, state,
    style, transition,
    animate
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
        transform: 'translateX(0)'
    })),
    // :enter
    transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
    ]),
    // :leave
    transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
    ])
]);
