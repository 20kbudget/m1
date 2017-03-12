// @flow
type Texture = {
    id: string,
    url: string,
    size: number
};
type ToggleConstructorOptions = {
    onIcon: Texture,
    offIcon: Texture
};
type PauseToggle = (options: ToggleConstructorOptions) => Object;

const { Map } = require('immutable');
const {
    sprites,
    visibility,
    position,
    replies,
    // animations
} = require('./features');

const pauseToggle:PauseToggle = ({ onIcon, offIcon }) =>
    Map([
        ['id', 'pauseToggle'],
        ['value', false],
        visibility(),
        position(),
        sprites([
            { texture: onIcon, visibility: true },
            { texture: offIcon, visibility: false }
        ]),
        replies({
            match: msg => ['{id}:pointerdown', 'spacebar'].includes(msg),
            reply: (msg, data) => '{id}:clicked'
        })
        // animations({
            // enter: ({ t, oldState, end }) =>
                // end(oldState.merge({ visibility: true })),
            // leave: ({ t, oldState, end }) =>
                // end(oldState.merge({ visibility: false })),
            // valueTrue: ({ t, oldState, end }) =>
                // end(
                    // oldState.merge({
                        // iconsVisible: [false, true],
                        // value: true
                    // })
                // ),
            // valueFalse: ({ t, oldState, end }) =>
                // end(
                    // oldState.merge({
                        // iconsVisible: [true, false],
                        // value: false
                    // })
                // )
        // })
    ]);

module.exports = pauseToggle;
