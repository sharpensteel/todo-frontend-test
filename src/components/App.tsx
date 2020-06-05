import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Header from './Header';
import {AppState} from "../store";
import {creatorCancel, creatorOpen, creatorSave, detailOpen, todosLoaded} from "../store/todo/actions";
import TodoCreator from "./todo/TodoCreator";
import TodoList from "./todo/TodoList";
import {Button} from "antd";
import {markDone} from '../store/todo/actions';

import 'antd/dist/antd.css';
import {useEffect, useState} from "react";
import {thunkLoadTodos} from "../store/todo/thunks";

const App = () => {

    let {todos,
        isCreatorOpened,
        todoSavePending,
        detailTodoIdOpened
    }: AppState = useSelector((state: AppState) => ({
        todos: state.todos,
        isCreatorOpened: state.isCreatorOpened,
        todoSavePending: state.todoSavePending,
        detailTodoIdOpened: state.detailTodoIdOpened,
    }));


    const dispatch = useDispatch();

    useEffect(() => { dispatch(thunkLoadTodos()); }, []);

    return <div>
        <Header/>
        <div className='view'>
            <Button onClick={() => dispatch(creatorOpen())}>Add todo</Button>

            <TodoCreator
                isOpen={isCreatorOpened}
                isSavePending={!!todoSavePending}
                onCancel={() => dispatch(creatorCancel())}
                onSave={(todo) => dispatch(creatorSave(todo))}
            />

            <TodoList
                todos={todos}
                markDone={id => dispatch(markDone(id))}
                detailOpen={id => dispatch(detailOpen(id))}
            />
        </div>
    </div>;
};
export default App;

