import * as React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux";

import Header from './Header';
import {AppState} from "../store";
import {creatorCancel, creatorOpen, detailClose} from "../store/todo/actions";
import TodoCreator from "./todo/TodoCreator";
import TodoList from "./todo/TodoList";
import {Button} from "antd";

import 'antd/dist/antd.css';
import '../css/todo.css';
import {thunkCreatorSave, thunkDetailOpen, thunkLoadTodos, thunkMarkDone, thunkReset} from "../store/todo/thunks";
import TodoDetail from "./todo/TodoDetail";
import {Todo, TodoUnsaved} from "../store/todo/types";
import {getTodoById} from "../store/todo/selectors";


const App = () => {


    let {todos,
        isCreatorOpened,
        todoSavePending,
        detailTodoOpened
    } :{todos: Todo[],
        isCreatorOpened: boolean,
        todoSavePending: TodoUnsaved,
        detailTodoOpened: Todo,
    } = useSelector((state: AppState) => ({
        todos: state.todos,
        isCreatorOpened: state.isCreatorOpened,
        todoSavePending: state.todoSavePending,
        detailTodoOpened: getTodoById(state, state.detailTodoIdOpened)
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => { dispatch(thunkLoadTodos()); }, []);

    return <div>
        <Header/>
        <div className='todos view'>
            <Button onClick={() => dispatch(creatorOpen())}>Add todo</Button>
            <Button onClick={() => dispatch(thunkReset())} className='todo__reset'>Reset todos</Button>

            <TodoCreator
                isOpen={isCreatorOpened}
                isSavePending={!!todoSavePending}
                onCancel={() => dispatch(creatorCancel())}
                onSave={(todo) => dispatch(thunkCreatorSave(todo))}
            />

            <TodoDetail
                todo={detailTodoOpened}
                isOpen={!!detailTodoOpened}
                onClose={() => dispatch(detailClose())}
            />

            <TodoList
                todos={todos}
                markDone={id => dispatch(thunkMarkDone(id))}
                detailOpen={id => dispatch(thunkDetailOpen(id))}
            />

        </div>
    </div>;
};
export default App;

