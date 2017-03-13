// @flow
import type { Texture } from './features';
type ToggleConstructorOptions = {
    value?: boolean,
    offIcon: Texture,
    onIcon: Texture
};
type Toggle = (options: ToggleConstructorOptions) => Object;

const { Map } = require('immutable');
const {
    id,
    visibles,
    position,
    visibility,
    texture,
    replies,
    update
} = require('./features');

const pauseToggleVisibles = ({ value = false, offIcon, onIcon }) =>
    visibles([
        Map([texture(offIcon), visibility(!value)]),
        Map([texture(onIcon), visibility(value)])
    ]);

const pauseToggle: Toggle = options =>
    Map([
        id('pauseToggle'),
        position(),
        pauseToggleVisibles(options),
        replies({
            match: msg => ['{id}:pointerdown', 'spacebar'].includes(msg),
            reply: (msg, data) => '{id}:clicked'
        }),
        update(({ position, value, oldSelf }) =>
            oldSelf.merge(
                Map([position(position), pauseToggleVisibles(options)])
            ))
    ]);

module.exports = pauseToggle;
