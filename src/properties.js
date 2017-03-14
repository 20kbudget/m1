// @flow
type MatchingFunction = (msg: string) => boolean;
type ReplyFunction = (msg: string, data: mixed) => string;
type MessageThrough = {
    match: MatchingFunction,
    reply: ReplyFunction
};
export type Texture = {
    id: string,
    url: string,
    size: number
};

const { Set, List, Map } = require('immutable');
const uuid = require('uuid/v4');

const boolProp = (name, defaultValue) =>
    (value: boolean = defaultValue) => [name, value];
const listProp = (name, defaultValue) =>
    (value: Array<mixed> = defaultValue) => [name, List(value)];

const id = (value: string = uuid()) => ['id', value];
const visibility = boolProp('visibility', false);
const position = listProp('position', [0, 0]);
const images = listProp('images', []);
const texture = (t: Texture) => ['texture', Map(t)];
const replies = (
    mt: MessageThrough = {
        match: (msg, data) => false,
        reply: (msg, data) => ''
    }
) => ['replies', mt];
const update = (f: Function = ({ oldSelf }) => oldSelf) => ['update', f];

module.exports = {
    id,
    visibility,
    position,
    images,
    texture,
    update,
    replies
};
