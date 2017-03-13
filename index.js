// @flow

const textures = require('./src/textures');
const buildPauseToggle = require('./src/pauseToggle');
// const renderer = require('./src/rendererPixi');

const pauseToggle = buildPauseToggle({
    offIcon: textures.playIcon,
    onIcon: textures.pauseIcon
});

console.log(pauseToggle.toJS());
