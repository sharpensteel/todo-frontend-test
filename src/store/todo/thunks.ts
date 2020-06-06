import superagent from 'superagent';
import _ from 'lodash';

import {ITodoUnsaved, Todo} from './types';
import {
    creatorSave,
    creatorSaved,
    creatorSaveError,
    detailOpened,
    markDone,
    markDoneError, markedDone,
    todosLoaded
} from './actions';
import {message} from "antd";

const BACKEND_URL = 'https://backend-test.pi-top.com/todo-test/v1/';


function parseTodo(todoDto: object): Todo {
    let todo = new Todo;
    Object.assign(todo, todoDto);

    if(!(todo.createdAt instanceof Date)){
        todo.createdAt = new Date(todo.createdAt);
    }
    return todo;
}


function showError(e) {
    if(e.response){
        let message = _.get(e.response, ['body','error','message']);
        if(message) e = message;
    }
    message.error(e);
}

export const thunkLoadTodos = () => async dispatch => {
    let response = await superagent.get(`${BACKEND_URL}todos`).set('accept', 'json');
    let todosDto: object[] = response.body;
    let todos = todosDto.map(todoDto => parseTodo(todoDto));
    dispatch(todosLoaded(todos));
};

export const thunkDetailOpen = (id) => async dispatch => {
    let response = await superagent.get(`${BACKEND_URL}todos/${id}`).set('accept', 'json');
    let todo: Todo = parseTodo(response.body);
    dispatch(detailOpened(todo));
};

export const thunkCreatorSave = (
    todoUnsaved: ITodoUnsaved
) => async dispatch => {

    dispatch(creatorSave(todoUnsaved));

    try{
        let response = await superagent.post(`${BACKEND_URL}todos`)
            .send(todoUnsaved)
            .set('accept', 'json');
        let todo: Todo = parseTodo(response.body);
        dispatch(creatorSaved(todo));
    }
    catch (e) {
        showError(e);
        dispatch(creatorSaveError(e));
        throw e;
    }
};

export const thunkMarkDone = (
    id: string
) => async dispatch => {

    dispatch(markDone(id));

    try{
        let response = await superagent.put(`${BACKEND_URL}todos/${id}`)
            .send({isDone: true})
            .set('accept', 'json');
        let todo: Todo = response.body;

        if(!todo.isDone){
            // noinspection ExceptionCaughtLocallyJS
            throw new Error('oh no! server not saved isDone');
        }

        dispatch(markedDone(todo.id));
    }
    catch (e) {
        showError(e);
        dispatch(markDoneError(id, e));
        throw e;
    }
};


export const thunkReset = () => async dispatch => {
    await superagent.post(`${BACKEND_URL}reset`)
        .set('accept', 'json');
    await dispatch(thunkLoadTodos());
};


