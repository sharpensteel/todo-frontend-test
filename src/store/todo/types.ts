export interface SystemState {
    loggedIn: boolean;
    session: string;
    userName: string;
}

export interface TodoUnsaved {
    title: string,        // short todo title
    description: string,  // todo detailed description
    priority: string,     // importance of task
    tags: string[],       // tags
}

export interface Todo extends TodoUnsaved{
    id?: number,            // unique ID of call
    createdAt: Date,        // creation date
    isDone: boolean,        // if todo is done or not
    isDonePending: boolean, // if todo is saving right now
}

export interface TodoState {
    todos: Todo[],
    isCreatorOpened: boolean,
    todoSavePending: TodoUnsaved,
    detailTodoIdOpened: number | null,
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


export interface TodosLoadedAction {
    type: typeof TODO_TODOS_LOADED;
    payload: Todo[];
}

export interface CreatorOpenAction {
    type: typeof TODO_CREATOR_OPEN;
}

export interface CreatorCancelAction {
    type: typeof TODO_CREATOR_CANCEL;
}

export interface CreatorSaveAction {
    type: typeof TODO_CREATOR_SAVE;
    payload: TodoUnsaved;
}

export interface CreatorSavedAction {
    type: typeof TODO_CREATOR_SAVED;
    payload: Todo;
}

export interface CreatorSaveErrorAction {
    type: typeof TODO_CREATOR_SAVE_ERROR;
    payload: Error | string;
}

export interface DetailOpenAction {
    type: typeof TODO_DETAIL_OPEN;
    payload: number;
}

export interface DetailOpenedAction {
    type: typeof TODO_DETAIL_OPENED;
    payload: Todo;
}

export interface DetailCloseAction {
    type: typeof TODO_DETAIL_CLOSE;
}

export interface MarkDoneAction {
    type: typeof TODO_MARK_DONE;
    payload: number;
}

export interface MarkDoneErrorAction {
    type: typeof TODO_MARK_DONE_ERROR;
    payload: {
        id: number;
        error: Error | string;
    };
}

export interface MarkedDoneAction {
    type: typeof TODO_MARKED_DONE;
    payload: number;
}

export type TodoActionTypes =
    TodosLoadedAction |
    CreatorOpenAction |
    CreatorCancelAction |
    CreatorSaveAction |
    CreatorSavedAction |
    CreatorSaveErrorAction |
    DetailOpenAction |
    DetailOpenedAction |
    DetailCloseAction |
    MarkDoneAction |
    MarkDoneErrorAction |
    MarkedDoneAction;
