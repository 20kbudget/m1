// @flow
import type nanobus from 'nanobus';
import type { Map as ImmutableMap } from 'immutable';
type RendererPixiSetupOptions = {
    entities: Array<ImmutableMap<string, *>>,
    bus: nanobus,
    domNode: HTMLElement
};

const { Container, Texture, Sprite, autoDetectRenderer } = require('pixi.js');

const updateDisplayObject = (entity, displayObject) => {
    const visibility = entity.get('visibility');
    const position = entity.get('position');
    if (visibility !== undefined) {
        displayObject.visible = visibility;
    }
    if (position) {
        displayObject.position.set(...entity.get('position').toArray());
    }
};

const addDisplayObject = (parentContainer, entity, bus) => {
    const images = entity.get('images');
    const entities = entity.get('entities');
    if (!images && !entities) {
        return false;
    }
    const container = new Container();
    updateDisplayObject(entity, container);
    parentContainer.addChild(container);
    images.forEach(image => {
        const texture = image.get('texture');
        const textureId = texture.get('id');
        const url = texture.get('url');
        const pixiTexture = new Texture.fromImage(url);
        const pixiSprite = new Sprite(pixiTexture);
        updateDisplayObject(image, pixiSprite);
        container.addChild(pixiSprite);
        pixiTexture.on('update', t =>
            bus.emit('texture:updated', {
                id: textureId,
                loaded: t.baseTexture.hasLoaded
            }));
    });
    if (!entities) {
        return false;
    }
    entities.forEach(childEntity => addDisplayObject(container, childEntity, bus));
};

const setup = ({ entities, bus, domNode }: RendererPixiSetupOptions) => {
    const renderer = autoDetectRenderer();
    const root = new Container();
    const render = () => renderer.render(root);

    domNode.appendChild(renderer.view);
    entities.forEach(entity => addDisplayObject(root, entity, bus));

    return {
        render
    };
};

module.exports = setup;
