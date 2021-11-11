import React, { useState } from 'react'
import {
    Box,
    Button,
    Card,
    Checkbox,
    CircularProgress,
    FormControlLabel,
    Grid,
    IconButton
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import history from 'history.js'
import SocialButton from 'app/views/utilities/SocialButton'

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

const JwtRegister = () => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({})
    const classes = useStyles()
    const { register, socialLogin } = useAuth()
    const [message, setMessage] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleFormSubmit = async (event) => {
        if (!state.agreement)
            return setMessage('Terms of service is required.')
        setLoading(true)
        try {
            const res = await register(state.firstname, state.lastname, state.email, state.username, state.password)
            if (res.status === 'success')
                history.push('/signin')
        } catch (e) {
            setMessage(e.message)
            setLoading(false)
        }
    }

    const handleSocialLogin = async (user) => {
        const { _profile, _token } = user
        try {
            await socialLogin(_profile)
            history.push('/')
        } catch (e) {
            setMessage(e.message)
        }
    }

    const handleSocialLoginFailure = (err) => {
        setMessage(err)
    }

    let { firstname, lastname, username, email, password, agreement } = state

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/posting_photo.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="First Name"
                                    onChange={handleChange}
                                    type="text"
                                    name="firstname"
                                    value={firstname || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Last Name"
                                    onChange={handleChange}
                                    type="text"
                                    name="lastname"
                                    value={lastname || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="User Name"
                                    onChange={handleChange}
                                    type="text"
                                    name="username"
                                    value={username || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={email || ''}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-4 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={password || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <FormControlLabel
                                    name="agreement"
                                    onChange={(e) =>
                                        handleChange({
                                            target: {
                                                name: 'agreement',
                                                value: e.target.checked,
                                            },
                                        })
                                    }
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={agreement || false}
                                        />
                                    }
                                    validators={['required']}
                                    label="I have read and agree to the terms of service."
                                />
                                {message && (
                                    <p className="text-error">{message}</p>
                                )}
                                <div className="flex items-center">
                                    <div className="relative">
                                        <Button
                                            className="capitalize"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
                                            variant="contained"
                                        >
                                            Sign up
                                        </Button>
                                        {loading && (
                                            <CircularProgress
                                                size={24}
                                                className={
                                                    classes.buttonProgress
                                                }
                                            />
                                        )}
                                    </div>
                                    <span className="mx-2 ml-5">or</span>
                                    <Link to="/signin">
                                        <Button className="capitalize">
                                            Sign in
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center">
                                    <SocialButton
                                        provider='google'
                                        appId='746799703532-5bbn094o81ui0g9o2dkv0g1jf2kpejjd.apps.googleusercontent.com' //loclahost:3000
                                        onLoginSuccess={handleSocialLogin}
                                        onLoginFailure={handleSocialLoginFailure}
                                        key={'google'}
                                        id={'google'}
                                    >
                                        <Box
                                            display="inline-block"
                                            marginLeft=".5rem"
                                            marginRight=".5rem"
                                        >
                                            <IconButton variant="contained" className="btn-google-plus btn-icon-only rounded-circle" title="Google +">
                                                <Box fontSize="14px" component="i" className="fab fa-google-plus-g" />
                                            </IconButton>
                                        </Box>
                                    </SocialButton>
                                    <SocialButton
                                        provider='facebook'
                                        appId='214637516273116'
                                        onLoginSuccess={handleSocialLogin}
                                        onLoginFailure={handleSocialLoginFailure}
                                        key={'facebook'}
                                        id={'facebook'}
                                    >
                                        <Box
                                            display="inline-block"
                                            marginLeft=".5rem"
                                            marginRight=".5rem"
                                        >
                                            <IconButton variant="contained" className="btn-facebook btn-icon-only rounded-circle" title="Facebook">
                                                <Box fontSize="14px" component="i" className="fab fa-facebook" />
                                            </IconButton>
                                        </Box>
                                    </SocialButton>
                                </div>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default JwtRegister
