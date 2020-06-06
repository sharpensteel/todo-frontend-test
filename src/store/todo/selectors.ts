import memoizeOne from 'memoize-one';
import {ITodo, ITodoState} from "./types";


const memoizedGetTodoMap = memoizeOne(
    (todos: ITodo[]): {[key: string]: ITodo} => {
        let acc = {};
        for(let todo of (todos || [])){
            acc[todo.id] = todo;
        }
        return acc;
    }
);

export const getTodoById = (state: ITodoState, id: string) => memoizedGetTodoMap(state.todos)[id];
