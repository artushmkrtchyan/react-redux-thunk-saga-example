import {todoTypes} from './type';
import {globalTypes} from '../global/type';
import {alertSuccess} from '../global/action';
import * as service from '../../../service';
import {delay} from '../../../helpers/helpers';

function getTodos(start, limit) {
    const request = () => ({type: todoTypes.GET_TODOS_START});
    const success = (todos) => ({
        type: todoTypes.GET_TODOS_SUCCESS,
        data: todos
    });
    
    const failure = (error) => ({
        type: todoTypes.GET_TODOS_FAILURE,
        error
    });

    return dispatch => {
        dispatch(request());

        service.fetchTodos(start, limit)
            .then(data => dispatch(success(data)))
            .catch(error => {
                dispatch(failure(error.toString()))
                dispatch({type: globalTypes.ALERT_ERROR, message: error.message})
            })
    };
}

function editTodo({id, done}) {
    const request = () => ({type: todoTypes.EDIT_TODO_START});
    const success = (todos) => ({
        type: todoTypes.SET_TODO_SUCCESS,
        data: todos
    });

    return (dispatch, getState) => {
        const state = getState();
        const {todos: {data = []}} = state;

        dispatch(request());

        delay(300).then(() => {
            const todos = data.map((item) => {
                if(item.id === id) {
                    item.completed = !!done
                }
                return item
            })

            dispatch(success(todos))
            dispatch(alertSuccess("Updated successfully"))
        })
    };
}

function deleteTodo(id) {
    const request = () => ({type: todoTypes.DELETE_TODO_START});
    const success = (todos) => ({
        type: todoTypes.SET_TODO_SUCCESS,
        data: todos
    });

    return (dispatch, getState) => {
        const state = getState();
        const {todos: {data = []}} = state;

        dispatch(request());

        delay(300).then(() => {
            const todos = data.filter(item => item.id !== id)
            dispatch(success(todos))
            dispatch({type: globalTypes.ALERT_SUCCESS, message: "Deleted successfully"})
        })
    };
}

export const todoActions = {
    getTodos,
    editTodo,
    deleteTodo
}