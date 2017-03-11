// @flow

const { Map, Set } = require('immutable');

const { pauseIcon, playIcon } = require('./textures');
const {
    textures,
    position,
    scale,
    hitRect,
    input
} = require('./features');

const pauseClicked = ({ bus, state }) =>
    bus.emit('state:toggle', { flag: state.paused });

const pauseToggle = Map([
    textures(Set.of(pauseIcon, playIcon)),
    scale(0.5),
    position(),
    hitRect(),
    input(
        Map({
            tap: pauseClicked,
            spacebar: pauseClicked
        })
    )
]);

module.exports = pauseToggle;
