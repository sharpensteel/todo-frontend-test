import produce from "immer";

import {
    TODO_CREATOR_CANCEL,
    TODO_CREATOR_OPEN,
    TODO_CREATOR_SAVE,
    TODO_CREATOR_SAVE_ERROR,
    TODO_CREATOR_SAVED,
    TODO_DETAIL_CLOSE,
    TODO_DETAIL_OPEN,
    TODO_DETAIL_OPENED,
    TODO_MARK_DONE,
    TODO_MARK_DONE_ERROR,
    TODO_MARKED_DONE,
    TODO_TODOS_LOADED,
    Todo,
    TodoActionTypes,
    TodoState
} from "./types";


const initialState: TodoState = {
    todos: [],
    isCreatorOpened: false,
    todoSavePending: null,
    detailTodoIdOpened: null,
};

function mutateTodoById(todos: Todo[], id: number, mutate: (Todo) => (Todo | void)): Todo[] {
    produce(todos, draft =>{
        for(let [ind, todo] of draft.entries()){
            if(todo.id === id){
                let newTodo = mutate(todo);
                if(newTodo) {
                    draft[ind] = newTodo;
                }
            }
        }
    });
    return todos;
}


export function todoReducer(
    state = initialState,
    action: TodoActionTypes
): TodoState {

    switch (action.type) {
        case TODO_TODOS_LOADED: {
            return {
                ...state,
                todos: action.payload,
            };
        }
        case TODO_CREATOR_OPEN: {
            return {
                ...state,
                isCreatorOpened: true,
            };
        }
        case TODO_CREATOR_CANCEL: {
            return {
                ...state,
                isCreatorOpened: false,
            };
        }
        case TODO_CREATOR_SAVE: {
            return {
                ...state,
                todoSavePending: action.payload,
            };
        }
        case TODO_CREATOR_SAVED: {
            let todo = action.payload;
            // ... check fields

            return {
                ...state,
                todoSavePending: null,
                isCreatorOpened: false,
                todos: [...state.todos, todo],
            };
        }
        case TODO_CREATOR_SAVE_ERROR: {
            return {
                ...state,
                todoSavePending: null,
            }
        }
        case TODO_DETAIL_OPEN: {
            return state;
        }
        case TODO_DETAIL_OPENED: {
            let todo = action.payload;

            return {
                ...state,
                todos: mutateTodoById(state.todos, todo.id, oldTodo => ({...oldTodo, ...todo})),
                detailTodoIdOpened: todo.id,
            };
        }
        case TODO_DETAIL_CLOSE: {
            return {
                ...state,
                detailTodoIdOpened: null,
            }
        }
        case TODO_MARK_DONE: {
            return {
                ...state,
                todos: mutateTodoById(state.todos, action.payload, (draft: Todo) => { draft.isDonePending = true; }),
            }
        }
        case TODO_MARK_DONE_ERROR: {
            return {
                ...state,
                todos: mutateTodoById(state.todos, action.payload.id, (draft: Todo) => { draft.isDonePending = false; }),
            }
        }
        case TODO_MARKED_DONE: {
            return {
                ...state,
                todos: mutateTodoById(state.todos, action.payload, (draft: Todo) => {
                    draft.isDonePending = false;
                    draft.isDone = true;
                }),
            }
        }
        default:
            return state;
    }
}


