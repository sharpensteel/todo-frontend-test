import * as React from 'react';

import TodoListItem from "./TodoListItem";
import {ITodo} from '../../store/todo/types';
import {markDone as markDoneAction, detailOpen as detailOpenAction} from '../../store/todo/actions';



const TodoList = ({todos, markDone, detailOpen}: {
    todos:ITodo[],
    markDone: typeof markDoneAction,
    detailOpen: typeof detailOpenAction,
}) => {
    return (
        <div className='todo__list'>
            {todos.map((todo, ind) =>
                <TodoListItem
                    todo={todo}
                    key={ind}
                    markDone={() => markDone(todo.id)}
                    detailOpen={() => detailOpen(todo.id)}
                />
            )}
        </div>
    );
};

export default TodoList;
