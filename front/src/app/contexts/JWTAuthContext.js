import React, { createContext, useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios.js'
import { MatxLoading } from 'app/components'

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const isValidToken = (token) => {
    if (!token) {
        return false
    }

    const decodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}

const setSession = (token) => {
    if (token) {
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => Promise.resolve(),
    forgotPassword: () => Promise.resolve(),
    logout: () => {},
    register: () => Promise.resolve(),
    socialLogin: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (userEmail, password) => {
        const response = await axios.post('/users/authenticate', {
            email: userEmail,
            password,
        })
        const { token, firstname, lastname, email, username,  createdAt, updatedAt } = response.data
        const user = {firstname, lastname, username, email, createdAt, updatedAt}
        console.log('login --------', response.data, response)
     
        setSession(token)
        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        })
    }

    const forgotPassword = async (email) => {
        const response = await axios.post('/users/forgotPassword', {
            email
        })
        return response.data
    }

    const register = async (firstname, lastname, email, username, password) => {
        const response = await axios.post('/users/register', {
            firstname,
            lastname,
            email,
            username,
            password,
        })

        return response.data
    }

    const socialLogin = async (socialUser) => {
        const response = await axios.post('/socials/register', socialUser)
        const { token, firstname, lastname, email, username,  createdAt, updatedAt } = response.data
        const user = {firstname, lastname, username, email, createdAt, updatedAt}
        console.log('social login --------', response.data, response)
        setSession(token)
        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        })
    }

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        ;(async () => {
            try {
                const token = window.localStorage.getItem('token')

                if (token && isValidToken(token)) {
                    setSession(token)
                    const response = await axios.get('/api/auth/profile')
                    const { user } = response.data

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                forgotPassword,
                logout,
                register,
                socialLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
