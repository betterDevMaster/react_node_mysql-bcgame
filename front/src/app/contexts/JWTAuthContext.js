import React, { createContext, useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'app/services/apiAxiosService.js'
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

const setSession = (token, email) => {
    if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
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
    logout: () => { },
    register: () => Promise.resolve(),
    socialLogin: () => Promise.resolve(),
    update: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (userEmail, password) => {
        const response = await axios.post('/users/authenticate', {
            email: userEmail,
            password,
        })
        const { token, id, firstName, lastName, email, name, profilePicURL, role, createdAt, updatedAt } = response.data
        const user = { firstName, id, lastName, name, email, profilePicURL, role, createdAt, updatedAt }

        setSession(token, email)
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

    const register = async (firstName, lastName, email, name, password) => {
        const response = await axios.post('/users/register', {
            firstName,
            lastName,
            email,
            name,
            password,
        })

        return response.data
    }

    const update = async (id, name, profilePicURL) => {
        const response = await axios.put('/users/' + id, {
            name,
            profilePicURL,
        })

        return response.data
    }

    const socialLogin = async (socialUser) => {
        const response = await axios.post('/socials/register', socialUser)
        const { token, id, firstName, lastName, email, name, profilePicURL, role, createdAt, updatedAt } = response.data
        const user = { firstName, id, lastName, name, email, profilePicURL, role, createdAt, updatedAt }
        setSession(token, email)
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
        ; (async () => {
            try {
                const token = window.localStorage.getItem('token')
                const userEmail = window.localStorage.getItem('email')
                if (token && isValidToken(token)) {
                    const response = await axios.post('/users/profile', { email: userEmail })
                    const { token, id, firstName, lastName, email, name, profilePicURL, role, createdAt, updatedAt } = response.data
                    const user = { id, firstName, lastName, name, email, profilePicURL, role, createdAt, updatedAt }
                    setSession(token, email)
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
                update,
                socialLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
