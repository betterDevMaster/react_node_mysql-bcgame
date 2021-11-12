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
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import history from 'history.js'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
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
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const JwtLogin = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const { login, socialLogin } = useAuth()

    const classes = useStyles()

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {
            await login(userInfo.email, userInfo.password)
            history.push('/')
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
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-200"
                                src="/assets/images/illustrations/dreamer.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                    autoFocus
                                />
                                <TextValidator
                                    className="mb-3 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={userInfo.password}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <div className="flex justify-between">
                                    <FormControlLabel
                                        className="min-w-100"
                                        name="agreement"
                                        onChange={handleChange}
                                        control={
                                            <Checkbox
                                                size="small"
                                                onChange={({
                                                    target: { checked },
                                                }) =>
                                                    handleChange({
                                                        target: {
                                                            name: 'agreement',
                                                            value: checked,
                                                        },
                                                    })
                                                }
                                                checked={userInfo.agreement || true}
                                            />
                                        }
                                        label="Remeber me"
                                    />
                                    <Button
                                        className="text-primary"
                                        onClick={() =>
                                            history.push('/forgot-password')
                                        }
                                    >
                                        Forgot password?
                                    </Button>
                                </div>
                                {message && (
                                    <p className="text-error">{message}</p>
                                )}

                                <div className="flex flex-wrap items-center mb-4">
                                    <div className="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
                                        >
                                            Sign in
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
                                    <span className="mr-2 ml-5">or</span>
                                    <Button
                                        className="capitalize"
                                        onClick={() =>
                                            history.push('/signup')
                                        }
                                    >
                                        Sign up
                                    </Button>
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

export default JwtLogin
