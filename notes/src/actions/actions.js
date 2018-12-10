import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ON_HANDLE_SUBMIT = 'ON_HANDLE_SUBMIT';

export const fetch_todos = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios 
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onHandleSubmit = (newTodo) => dispatch => {
    dispatch({ type: ON_HANDLE_SUBMIT })
    axios
        .post('https://fe-notes.herokuapp.com/note/create', newTodo)
        .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

