import axios from 'app/services/apiAxiosService.js'

export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const REGISTER_GAME = 'REGISTER_GAME'
export const GET_GAME = 'GET_GAME'
export const UPDATE_GAME = 'UPDATE_GAME'
export const DELETE_GAME = 'DELETE_GAME'
export const RESPOPNSE_ERROR = 'RESPOPNSE_ERROR'

export const getGames = () => (dispatch) => {
    axios.get('/games/').then((res) => {
        dispatch({
            type: GET_ALL_GAMES,
            data: res.data,
        })
    })
}

export const getUserByAdmin = (id) => (dispatch) => {
    axios.get('/users/' + id).then((res) => {
        dispatch({
            type: GET_GAME,
            data: res.data,
        })
    })
}

export const updateUserByAdmin = (id, user) => (dispatch) => {
    axios.put('/users/' + id, user).then((res) => {
        dispatch({
            type: UPDATE_GAME,
            status: res.data.status,
            message: res.data.message,
        })
    })
}

export const deleteUserByAdmin = (id) => (dispatch) => {
    axios.delete('/users/' + id).then((res) => {
        dispatch({
            type: DELETE_GAME,
            status: res.data.status,
            message: res.data.message,
        })
    })
}

export const registerUserByAdmin = (user) => (dispatch) => {
    axios.post('/users/registerByAdmin', user).then((res) => {
        dispatch({
            type: REGISTER_GAME,
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
