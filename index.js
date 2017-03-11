// @flow

const { Map, Set, List } = require('immutable');
const {
    textures,
    position,
    scale,
    hitRect,
    input
} = require('./src/features');

// Textures
const pauseIcon = Map({
    url: './assets/pause.png',
    size: 15197
});
const playIcon = Map({
    url: './assets/right.png',
    size: 15312
});
const playerCar = Map({
    url: './assets/car_red_small_4.png',
    size: 703
});

// Components
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

const ui = Map({});
const player = Map({});
const background = Map({});

const components = Map({
    ui,
    player,
    background
});

// Game state
const state = Map({
    components
});
