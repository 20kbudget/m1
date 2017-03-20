// @flow

// Basic Types
// -----------
type Vec2 = [number, number];
type Image = { url: string, fileSize: number };
type ImageList = Array<Image>;
type ImageRecord = { [key: string]: Image };
type Entity = { id: string, children?: EntityList };
type EntityList = Array<Entity>;

// Available properties
// -----------------
type Position2DProp = { position: Vec2 };
type ImageProp = { image: Image };
type FramesProp = { frames: ImageList };

// Car properties
// --------------
type Car = Entity & (Position2DProp & ImageProp);

// Toggle properties
// -----------------
type Toggle = Entity & (Position2DProp & FramesProp);

const size = global.lstatSync('./index.js').size
console.log({size})

const textures: ImageRecord = {
    car: { url: './assets/car.png', fileSize: 0 },
    pauseIcon: { url: './assets/pause.png', fileSize: 0 },
    playIcon: { url: './assets/play.png', fileSize: 0 },
    roadLeft: { url: './assets/roadLeft.png', fileSize: 0},
    roadCenter: { url: './assets/roadCenter.png', fileSize: 0},
    roadLeft: { url: './assets/roadRight.png', fileSize: 0}
};

const car: Car = {
    id: 'playerCar',
    position: [100, 100],
    image: textures.car
};

const pauseToggle: Toggle = {
    id: 'pauseToggle',
    position: [10, 300],
    frames: [textures.pauseIcon, textures.playIcon]
};

const road: Entity = {
    id: 'road',
    position: [0, 0],

};

const World: Entity = {
    id: 'root',
    children: [car, pauseToggle]
};
