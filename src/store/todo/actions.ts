import {
    TODO_TODOS_LOADED,
    ITodosLoadedAction,

    TODO_CREATOR_OPEN, TODO_CREATOR_CANCEL, TODO_CREATOR_SAVE, TODO_CREATOR_SAVE_ERROR, TODO_CREATOR_SAVED,
    ICreatorOpenAction, ICreatorCancelAction, ICreatorSaveAction, ICreatorSaveErrorAction, ICreatorSavedAction,

    TODO_DETAIL_OPEN, TODO_DETAIL_OPENED, TODO_DETAIL_CLOSE,
    IDetailOpenAction, IDetailOpenedAction, IDetailCloseAction,

    TODO_MARK_DONE, TODO_MARK_DONE_ERROR, TODO_MARKED_DONE,
    IMarkDoneAction, IMarkDoneErrorAction, IMarkedDoneAction,

    ITodo,
    ITodoUnsaved
} from "./types";


export function todosLoaded(todos: ITodo[]): ITodosLoadedAction {
    return {
        type: TODO_TODOS_LOADED,
        payload: todos
    };
}
export function creatorOpen(): ICreatorOpenAction {
    return {
        type: TODO_CREATOR_OPEN,
    };
}

export function creatorCancel(): ICreatorCancelAction {
    return {
        type: TODO_CREATOR_CANCEL,
    };
}

export function creatorSave(todo: ITodoUnsaved): ICreatorSaveAction {
    return {
        type: TODO_CREATOR_SAVE,
        payload: todo,
    };
}

export function creatorSaved(todo: ITodo): ICreatorSavedAction {
    return {
        type: TODO_CREATOR_SAVED,
        payload: todo,
    };
}

export function creatorSaveError(error: Error | string): ICreatorSaveErrorAction {
    return {
        type: TODO_CREATOR_SAVE_ERROR,
        payload: error,
    };
}

export function detailOpen(id: number): IDetailOpenAction {
    return {
        type: TODO_DETAIL_OPEN,
        payload: id,
    };
}

export function detailOpened(todo: ITodo): IDetailOpenedAction {
    return {
        type: TODO_DETAIL_OPENED,
        payload: todo,
    };
}

export function detailClose(): IDetailCloseAction {
    return {
        type: TODO_DETAIL_CLOSE,
    };
}

export function markDone(id: number): IMarkDoneAction {
    return {
        type: TODO_MARK_DONE,
        payload: id,
    };
}

export function markDoneError(id: number, error: Error | string): IMarkDoneErrorAction {
    return {
        type: TODO_MARK_DONE_ERROR,
        payload: {id, error},
    };
}

export function markedDone(id: number): IMarkedDoneAction {
    return {
        type: TODO_MARKED_DONE,
        payload: id,
    };
}


