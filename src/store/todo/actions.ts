import {
    TODO_TODOS_LOADED,
    TodosLoadedAction,

    TODO_CREATOR_OPEN, TODO_CREATOR_CANCEL, TODO_CREATOR_SAVE, TODO_CREATOR_SAVE_ERROR, TODO_CREATOR_SAVED,
    CreatorOpenAction, CreatorCancelAction, CreatorSaveAction, CreatorSaveErrorAction, CreatorSavedAction,

    TODO_DETAIL_OPEN, TODO_DETAIL_OPENED, TODO_DETAIL_CLOSE,
    DetailOpenAction, DetailOpenedAction, DetailCloseAction,

    TODO_MARK_DONE, TODO_MARK_DONE_ERROR, TODO_MARKED_DONE,
    MarkDoneAction, MarkDoneErrorAction, MarkedDoneAction,

    Todo,
    TodoUnsaved
} from "./types";


export function todosLoaded(todos: Todo[]): TodosLoadedAction {
    return {
        type: TODO_TODOS_LOADED,
        payload: todos
    };
}
export function creatorOpen(): CreatorOpenAction {
    return {
        type: TODO_CREATOR_OPEN,
    };
}

export function creatorCancel(): CreatorCancelAction {
    return {
        type: TODO_CREATOR_CANCEL,
    };
}

export function creatorSave(todo: TodoUnsaved): CreatorSaveAction {
    return {
        type: TODO_CREATOR_SAVE,
        payload: todo,
    };
}

export function creatorSaved(todo: Todo): CreatorSavedAction {
    return {
        type: TODO_CREATOR_SAVED,
        payload: todo,
    };
}

export function creatorSaveError(error: Error | string): CreatorSaveErrorAction {
    return {
        type: TODO_CREATOR_SAVE_ERROR,
        payload: error,
    };
}

export function detailOpen(id: number): DetailOpenAction {
    return {
        type: TODO_DETAIL_OPEN,
        payload: id,
    };
}

export function detailOpened(todo: Todo): DetailOpenedAction {
    return {
        type: TODO_DETAIL_OPENED,
        payload: todo,
    };
}

export function detailClose(): DetailCloseAction {
    return {
        type: TODO_DETAIL_CLOSE,
    };
}

export function markDone(id: number): MarkDoneAction {
    return {
        type: TODO_MARK_DONE,
        payload: id,
    };
}

export function markDoneError(id: number, error: Error | string): MarkDoneErrorAction {
    return {
        type: TODO_MARK_DONE_ERROR,
        payload: {id, error},
    };
}

export function markedDone(id: number): MarkedDoneAction {
    return {
        type: TODO_MARKED_DONE,
        payload: id,
    };
}


