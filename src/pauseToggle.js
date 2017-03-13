// @flow
import type { Texture } from './features';
type ToggleConstructorOptions = {
    value: boolean,
    offIcon: Texture,
    onIcon: Texture
};
type Toggle = (options: ToggleConstructorOptions) => Object;

const { Map } = require('immutable');
const {
    id,
    sprites,
    position,
    visibility,
    texture,
    replies,
    update
} = require('./features');

const pauseToggleSprites = ({ value = false, offIcon, onIcon }) =>
    sprites([
        Map([texture(offIcon), visibility(!value)]),
        Map([texture(onIcon), visibility(value)])
    ]);

const pauseToggle: Toggle = options =>
    Map([
        id('pauseToggle'),
        position(),
        pauseToggleSprites(options),
        replies({
            match: msg => ['{id}:pointerdown', 'spacebar'].includes(msg),
            reply: (msg, data) => '{id}:clicked'
        }),
        update(({ position, value, oldSelf }) =>
            oldSelf.merge(
                Map([position(position), pauseToggleSprites(options)])
            ))
    ]);

module.exports = pauseToggle;
