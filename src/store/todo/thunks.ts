import superagent from 'superagent';

import {ICreatorSaveAction, ITodoUnsaved, Todo, TODO_CREATOR_SAVE, TodoUnsaved} from './types';
import {AppState} from '../index';
import {creatorSave, creatorSaveError, todosLoaded} from './actions';

const BACKEND_URL = 'https://backend-test.pi-top.com/todo-test/v1/';



function parseTodo(todoDto: object): Todo {
    let todo = new Todo;
    Object.assign(todo, todoDto);

    if(!(todo.createdAt instanceof Date)){
        todo.createdAt = new Date(todo.createdAt);
    }

    return todo;
}

export const thunkLoadTodos = () => async dispatch => {
    console.log('thunkLoadTodos');

    let response = await superagent.get(`${BACKEND_URL}todos`).set('accept', 'json');
    console.log('response: ', response);

    let todosDto: object[] = response.body;

    let todos = todosDto.map(todoDto => parseTodo(todoDto));
    dispatch(todosLoaded(todos));
};


export const thunkCreatorSave = (
    todo: ITodoUnsaved
) => async dispatch => {

    dispatch(creatorSave(todo));

    try{
        let response = await superagent.post(`${BACKEND_URL}todos`)
            .send({ name: 'Manny', species: 'cat' })
            .set('accept', 'json');
        console.log('response: ', response);
        debugger;

    }
    catch (e) {
        dispatch(creatorSaveError(e));
        throw e;
    }

    // const asyncResp = await exampleAPI();
    // dispatch(
    //     sendMessage({
    //         message,
    //         user: asyncResp,
    //         timestamp: new Date().getTime()
    //     })
    // );
};