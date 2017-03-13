// @flow

const {Container, Sprite, autoDetectRenderer} = require('pixi.js');

const setup = (entities:Array<mixed>) => {
    return autoDetectRenderer();
}

module.exports = setup;
