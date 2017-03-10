// @flow

const { Set, List, Map } = require('immutable');

// Features
const textures = (t = Set([])) => ['textures', t];
const position = (p = List([0, 0])) => ['position', p];
const scale = (s: number = 1.0) => ['scale', s];
const hitRect = (h = List([List([0, 0]), List([10, 10])])) => ['hitRect', h];
const input = (t = Map()) => ['input', t];

module.exports = {
    textures,
    position,
    scale,
    hitRect,
    input
};
