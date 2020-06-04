import * as React from 'react';
import {Todo} from '../../store/todo/types';

const TodoListItem = (todo: Todo, ) => {

    let isDoneComponent;
    if(todo.isDone){
        isDoneComponent = <span>✅</span>;
    }
    else if(todo.isDonePending){
        isDoneComponent = <span>⌛</span>;
    }
    else{
        isDoneComponent = <a href='#'>make done</a>;
    }

    return (
        <div className='todo__li'>
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>
                {isDoneComponent}
            </div>
        </div>
    );
};

export default TodoListItem;
