// @flow
import type { Texture } from './properties';
type ToggleConstructorOptions = {
    value?: boolean,
    offIcon: Texture,
    onIcon: Texture
};
type Toggle = (options: ToggleConstructorOptions) => Object;

const { Map } = require('immutable');
const extend = require('xtend');
const {
    id,
    images,
    position,
    visibility,
    texture,
    replies,
    update
} = require('./properties');

const pauseToggleImages = ({ value = false, offIcon, onIcon }) =>
    images([
        Map([texture(offIcon), visibility(!value)]),
        Map([texture(onIcon), visibility(value)])
    ]);

const PauseToggle: Toggle = options =>
    Map([
        id('pauseToggle'),
        position([300, 300]),
        pauseToggleImages(options),
        replies({
            match: msg => ['{id}:pointerdown', 'spacebar'].includes(msg),
            reply: (msg, data) => '{id}:clicked'
        }),
        update(({ position, value, oldSelf }) =>
            oldSelf.merge(
                Map([
                    position(position),
                    pauseToggleImages(extend(options, { value }))
                ])
            ))
    ]);

module.exports = PauseToggle;
