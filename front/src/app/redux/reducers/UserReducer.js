import {
    GET_ALL_USERS,
    GET_USER,
    REGISTER_USER,
    UPDATE_USER,
    DELETE_USER,
    RESPOPNSE_ERROR,
} from '../actions/UserActions'

const initialState = { data: [], status: false, message: '' }

const UserReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS: {
            return { ...state, data: action.data }
        }
        case GET_USER: {
            const arr = [];
            arr.push(action.data)
            return { ...state, data: arr }
        }
        case REGISTER_USER: {
            return { ...state, status: action.status, message: action.message }
        }
        case UPDATE_USER: {
            return { ...state, status: action.status, message: action.message }
        }
        case DELETE_USER: {
            return { ...state, status: action.status, message: action.message }
        }
        case RESPOPNSE_ERROR: {
            return { ...state, status: action.status, message: action.message }
        }
        default: {
            return { ...state }
        }
    }
}

export default UserReducer
