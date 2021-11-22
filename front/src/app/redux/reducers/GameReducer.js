import {
    GET_ALL_GAMES,
    GET_GAME,
    REGISTER_GAME,
    UPDATE_GAME,
    DELETE_GAME,
    RESPOPNSE_ERROR,
} from '../actions/GameActions'

const initialState = { data: [], status: false, message: '' }

const GameReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_GAMES: {
            return { ...state, data: action.data }
        }
        case GET_GAME: {
            const arr = [];
            arr.push(action.data)
            return { ...state, data: arr }
        }
        case REGISTER_GAME: {
            return { ...state, status: action.status, message: action.message }
        }
        case UPDATE_GAME: {
            return { ...state, status: action.status, message: action.message }
        }
        case DELETE_GAME: {
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

export default GameReducer
