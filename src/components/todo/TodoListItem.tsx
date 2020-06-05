import * as React from 'react';
import {ITodo} from '../../store/todo/types';


const TodoDone = ({isDone, isDonePending, markDone}: {isDone: boolean, isDonePending: boolean, markDone?: () => void}) => {
    if(isDonePending){
        return <span>⌛</span>;
    }
    if(isDone){
        return <span>✅</span>;
    }
    return <a href='#' onClick={e => { markDone && markDone(); e.preventDefault(); }}>
        mark done
    </a>;
}

const TodoListItem = ({todo, markDone, detailOpen}: {todo: ITodo, markDone?: () => void, detailOpen?: () => void }) => {
    return (
        <div className='todo__li'>
            <div>
                {todo.createdAt && todo.createdAt.toLocaleString()}
            </div>
            <div>
                <a onClick={e => { detailOpen && detailOpen(); e.preventDefault(); }}>
                    {todo.title}
                </a>
            </div>
            <div>
                {todo.priority ? <React.Fragment>
                    Priority: {todo.priority}
                </React.Fragment> : null}
            </div>
            <div>
                <TodoDone isDone={todo.isDone} isDonePending={todo.isDonePending} markDone={markDone}/>
            </div>
        </div>
    );
};

export default TodoListItem;
