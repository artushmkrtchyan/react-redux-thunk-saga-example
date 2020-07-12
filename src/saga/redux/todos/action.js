import {todoTypes} from './type';

export const getTodosStart = (start, limit) => ({
    type: todoTypes.GET_TODOS_START,
    start,
    limit
});

export const getTodosSuccess = (todos) => ({
    type: todoTypes.GET_TODOS_SUCCESS,
    data: todos
});

export const getTodosFailure = (error) => ({
    type: todoTypes.GET_TODOS_FAILURE,
    error
});

export const editTodoStart = (params = {}) => ({
    type: todoTypes.EDIT_TODO_START,
    payload: params
});

export const deleteTodoStart = (id) => ({
    type: todoTypes.DELETE_TODO_START,
    id
});

export const setTodoSuccess = (data) => ({
    type: todoTypes.EDIT_TODO_SUCCESS,
    data
});