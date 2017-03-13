// @flow

const textures = require('./src/textures');
const PauseToggle = require('./src/pauseToggle');
const Renderer = require('./src/rendererPixi');

const pauseToggle = PauseToggle({
    offIcon: textures.playIcon,
    onIcon: textures.pauseIcon
});

console.log(pauseToggle.toJS());

const game = {
    paused: false,
    entities: [
        pauseToggle
    ],
};

const renderer = Renderer(game.entities);
