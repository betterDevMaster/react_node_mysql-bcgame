import axios from 'app/services/apiAxiosService.js'

export const GET_ALL_USERS = 'GET_ALL_USERS'
export const REGISTER_USER = 'REGISTER_USER'
export const GET_USER = 'GET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const RESPOPNSE_ERROR = 'RESPOPNSE_ERROR'

export const getUsersByAdmin = () => (dispatch) => {
    axios.get('/users/').then((res) => {
        dispatch({
            type: GET_ALL_USERS,
            data: res.data,
        })
    })
}

export const getUserByAdmin = (id) => (dispatch) => {
    axios.get('/users/' + id).then((res) => {
        dispatch({
            type: GET_USER,
            data: res.data,
        })
    })
}

export const updateUserByAdmin = (id, user) => (dispatch) => {
    axios.put('/users/' + id, user).then((res) => {
        dispatch({
            type: UPDATE_USER,
            status: res.data.status,
            message: res.data.message,
        })
    })
}

export const deleteUserByAdmin = (id) => (dispatch) => {
    axios.delete('/users/' + id).then((res) => {
        dispatch({
            type: DELETE_USER,
            status: res.data.status,
            message: res.data.message,
        })
    })
}

export const registerUserByAdmin = (user) => (dispatch) => {
    axios.post('/users/registerByAdmin', user).then((res) => {
        dispatch({
            type: REGISTER_USER,
            status: res.data.status,
            message: res.data.message,
        })
    }).catch((e) => {
        dispatch({
            type: RESPOPNSE_ERROR,
            status: false,
            message: e.message,
        })
    })
}
