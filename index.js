// @flow

const nanobus = require('nanobus');
const { Record, Set, OrderedSet } = require('immutable');
const textures = require('./src/textures');
const PauseToggle = require('./src/pauseToggle');
const Renderer = require('./src/rendererPixi');

const pauseToggle = PauseToggle({
    onIcon: textures.playIcon,
    offIcon: textures.pauseIcon
});

const Game = Record({
    paused:false,
    loadedTextures: Set([]),
    entities: OrderedSet([pauseToggle])
});

let game = new Game();

const bus = nanobus();

bus.on('*', (eventName, data) => console.log(eventName, data));

const renderer = Renderer({
    entities: game.entities,
    bus,
    domNode: window.document.body
});

bus.on('texture:updated', ({loaded, id}) => {
    if(!loaded) { return false }
    game = game.set('loadedTextures', game.loadedTextures.add(id))
    bus.emit('texture:loaded', ({id}))
    if (game.loadedTextures.count() === 2) {
        bus.emit('load', {})
    }
})

bus.on('load', () => renderer.render());
