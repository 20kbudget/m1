// @flow
type MatchingFunction = (msg: string) => boolean;
type ReplyFunction = (msg: string, data: mixed) => string;
type MessageThrough = {
    match: MatchingFunction,
    reply: ReplyFunction
};
// type State = Object;
// type Reducer = (state: State) => State;
// type TickReducer = ({ t: number, oldState: State, end: Reducer }) => State;
// type AnimationMap = {
    // enter: TickReducer,
    // leave: TickReducer
// };

const { Set, List, Map } = require('immutable');

const boolProp = (name, defaultValue) =>
    (value: boolean = defaultValue) => [name, value];
const floatProp = (name, defaultValue) =>
    (value: number = defaultValue) => [name, value];
const listProp = (name, defaultValue) =>
    (value: Array<mixed> = defaultValue) => [name, List(value)];
const messageThroughProp = (name, defaultValue: MessageThrough) =>
    (value: MessageThrough = defaultValue) => [name, Map(value)];
// const reducerMapProp = (name, defaultValue: AnimationMap) =>
    // (value: AnimationMap = defaultValue) => [name, Map(value)];

// Features (E-C-S components)
const visibility = boolProp('visibility', false);
const scale = floatProp('scale', 1.0);
const position = listProp('position', [0, 0]);
const sprites = listProp('sprites', []);
const replies = messageThroughProp('replies', {
    match: (msg, data) => false,
    reply: (msg, data) => ''
});
// const animations = reducerMapProp('animations', {
    // enter: ({ t, oldState, end }) => end(oldState),
    // leave: ({ t, oldState, end }) => end(oldState)
// });

module.exports = {
    visibility,
    scale,
    position,
    sprites,
    replies
    // animations
};
