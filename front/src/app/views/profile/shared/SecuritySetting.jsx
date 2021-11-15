import React, { useState, useEffect } from 'react'
import { Card, Button, CircularProgress } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import { SimpleCard } from 'app/components'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const SecuritySetting = ({ user, update }) => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({})
    const classes = useStyles()
    const [message, setMessage] = useState('')
    const { currentPassword, password, confirmPassword } = state
    
    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {
            // const res = await register(
            //     state.firstName,
            //     state.lastName,
            //     state.email,
            //     state.name,
            //     state.password
            // )
            // if (res.status === 'success') history.push('/signin')
        } catch (e) {
            setMessage(e.message)
            setLoading(false)
        }
    }

    return (
        <div>
            <SimpleCard title="Security Setting">
                <ValidatorForm onSubmit={handleFormSubmit}>
                    <TextValidator
                        className="mb-6 w-full"
                        variant="outlined"
                        size="small"
                        label="Old Password"
                        onChange={handleChange}
                        type="text"
                        name="currentPassword"
                        value={currentPassword || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <TextValidator
                        className="mb-4 w-full"
                        label="Password"
                        variant="outlined"
                        onChange={handleChange}
                        name="password"
                        type="password"
                        value={password || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <TextValidator
                        className="mb-4 w-full"
                        label="Confirm Password"
                        variant="outlined"
                        onChange={handleChange}
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword || ''}
                        validators={['required', 'isPasswordMatch']}
                        errorMessages={[
                            'this field is required',
                            "password didn't match",
                        ]}
                    />
                    {message && <p className="text-error">{message}</p>}
                    <div className="flex items-center">
                        <div className="relative">
                            <Button
                                className="capitalize"
                                color="primary"
                                disabled={loading}
                                type="submit"
                                variant="contained"
                            >
                                Save Changes
                            </Button>
                            {loading && (
                                <CircularProgress
                                    size={24}
                                    className={classes.buttonProgress}
                                />
                            )}
                        </div>
                    </div>
                </ValidatorForm>
            </SimpleCard>
        </div>
    )
}

export default SecuritySetting
