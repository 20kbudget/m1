// @flow
type MatchingFunction = (msg: string) => boolean;
type ReplyFunction = (msg: string, data: mixed) => string;
type MessageThrough = {
    match: MatchingFunction,
    reply: ReplyFunction
};
export type Texture = {
    id?: string,
    url?: string,
    size?: number
};

const { Set, List, Map } = require('immutable');
const uuid = require('uuid/v4');

const listProp = (name, defaultValue) =>
    (value: Array<mixed> = defaultValue) => [name, List(value)];

// Features (Components in the Entity-Components-System paradigm)
const id = (value: string = uuid()) => ['id', value];
const visibility = (value: boolean = false) => ['visibility', value];
const position = listProp('position', [0, 0]);
const sprites = listProp('sprites', []);
const texture = (t: Texture = {}) => ['texture', Map(t)];
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
    sprites,
    texture,
    update,
    replies
};
