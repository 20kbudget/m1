// @flow

const { Map, Set, List } = require('immutable');

const pauseToggle = require('./src/pauseToggle');

const ui = Set([pauseToggle]);
const player = Set([]);
const background = Set([]);

const components = Map({
    ui,
    player,
    background
});

// Game state
const state = Map({
    components
});
