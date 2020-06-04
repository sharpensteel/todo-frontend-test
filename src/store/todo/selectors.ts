import memoizeOne from 'memoize-one';
import {Todo, TodoState} from "./types";



const memoizedGetTodoMap = memoizeOne(
    (todos: Todo[]): {[key: number]: Todo} => {
        let acc = {};
        for(let todo of (todos || [])){
            acc[todo.id] = todo;
        }
        return acc;
    }
);

export const getTodoById = (store: TodoState, id: number) => memoizedGetTodoMap(store.todos)[id];
