import memoizeOne from 'memoize-one';
import {ITodo, ITodoState} from "./types";



const memoizedGetTodoMap = memoizeOne(
    (todos: ITodo[]): {[key: number]: ITodo} => {
        let acc = {};
        for(let todo of (todos || [])){
            acc[todo.id] = todo;
        }
        return acc;
    }
);

export const getTodoById = (store: ITodoState, id: number) => memoizedGetTodoMap(store.todos)[id];
