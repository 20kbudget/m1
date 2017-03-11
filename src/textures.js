// @flow

const { Map } = require('immutable');

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

module.exports = {
    pauseIcon,
    playIcon,
    playerCar
};
