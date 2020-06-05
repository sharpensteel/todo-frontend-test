
export interface ITodoUnsaved {
    title: string;        // short todo title
    description: string;  // todo detailed description
    priority: string;     // importance of task
    tags: string[];       // tags
}

export interface ITodo extends ITodoUnsaved{
    id?: number;            // unique ID of call
    createdAt: Date;        // creation date
    isDone: boolean;        // if todo is done or not
    isDonePending: boolean; // if todo is saving right now
}

export interface ITodoState {
    todos: ITodo[];
    isCreatorOpened: boolean;
    todoSavePending: ITodoUnsaved;
    detailTodoIdOpened: number | null;
}

export class TodoUnsaved implements ITodoUnsaved {
    title: string;        // short todo title
    description: string;  // todo detailed description
    priority: string;     // importance of task
    tags: string[];       // tags
}

export class Todo extends TodoUnsaved implements ITodo{
    id?: number;            // unique ID of call
    createdAt: Date;        // creation date
    isDone: boolean;        // if todo is done or not
    isDonePending: boolean; // if todo is saving right now
}

export const TODO_TODOS_LOADED = 'TODO_TODOS_LOADED';

export const TODO_CREATOR_OPEN = 'TODO_CREATOR_OPEN';
export const TODO_CREATOR_CANCEL = 'TODO_CREATOR_CANCEL';
export const TODO_CREATOR_SAVE = 'TODO_CREATOR_SAVE';
export const TODO_CREATOR_SAVE_ERROR = 'TODO_CREATOR_SAVE_ERROR';
export const TODO_CREATOR_SAVED = 'TODO_CREATOR_SAVED';

export const TODO_DETAIL_OPEN = 'TODO_DETAIL_SHOW';
export const TODO_DETAIL_OPENED = 'TODO_DETAIL_OPENED';
export const TODO_DETAIL_CLOSE = 'TODO_DETAIL_CLOSE';

export const TODO_MARK_DONE = 'TODO_SET_DONE';
export const TODO_MARK_DONE_ERROR = 'TODO_MARK_DONE_ERROR';
export const TODO_MARKED_DONE = 'TODO_CHANGED_DONE';


export interface ITodosLoadedAction {
    type: typeof TODO_TODOS_LOADED;
    payload: ITodo[];
}

export interface ICreatorOpenAction {
    type: typeof TODO_CREATOR_OPEN;
}

export interface ICreatorCancelAction {
    type: typeof TODO_CREATOR_CANCEL;
}

export interface ICreatorSaveAction {
    type: typeof TODO_CREATOR_SAVE;
    payload: ITodoUnsaved;
}

export interface ICreatorSavedAction {
    type: typeof TODO_CREATOR_SAVED;
    payload: ITodo;
}

export interface ICreatorSaveErrorAction {
    type: typeof TODO_CREATOR_SAVE_ERROR;
    payload: Error | string;
}

export interface IDetailOpenAction {
    type: typeof TODO_DETAIL_OPEN;
    payload: number;
}

export interface IDetailOpenedAction {
    type: typeof TODO_DETAIL_OPENED;
    payload: ITodo;
}

export interface IDetailCloseAction {
    type: typeof TODO_DETAIL_CLOSE;
}

export interface IMarkDoneAction {
    type: typeof TODO_MARK_DONE;
    payload: number;
}

export interface IMarkDoneErrorAction {
    type: typeof TODO_MARK_DONE_ERROR;
    payload: {
        id: number;
        error: Error | string;
    };
}

export interface IMarkedDoneAction {
    type: typeof TODO_MARKED_DONE;
    payload: number;
}

export type ITodoActionTypes =
    ITodosLoadedAction |
    ICreatorOpenAction |
    ICreatorCancelAction |
    ICreatorSaveAction |
    ICreatorSavedAction |
    ICreatorSaveErrorAction |
    IDetailOpenAction |
    IDetailOpenedAction |
    IDetailCloseAction |
    IMarkDoneAction |
    IMarkDoneErrorAction |
    IMarkedDoneAction;
