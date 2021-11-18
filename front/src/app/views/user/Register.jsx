import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import MuiPhoneNumber from 'material-ui-phone-number'
import AvatarEditor from 'react-avatar-editor'
import { useDispatch, useSelector } from 'react-redux'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Snackbar,
} from '@material-ui/core'
import { SimpleCard, MatxSnackbar } from 'app/components'
import { registerUserByAdmin } from '../../redux/actions/UserActions'

const Register = () => {
    var editor = ''
    const [state, setState] = useState({
        image: '',
        allowZoomOut: false,
        position: { x: 0.5, y: 0.5 },
        scale: 1,
        rotate: 0,
        borderRadius: 200,
        border: 50,
        preview: null,
        width: 260,
        height: 260,
        color: [255, 255, 255, 0.6],
        role: 'GUEST',
    })
    const dispatch = useDispatch()
    const user = useSelector(({ user }) => user)
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])
    useEffect(() => {
        if (user.message && user.message !== '') setSnackbarOpen(true)
    }, [user])

    const handleSubmit = (event) => {
        if (setEditorRef) {
            const canvasScaled = editor.getImageScaledToCanvas()
            const croppedImg = canvasScaled.toDataURL()

            const user = {
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                name: state.username,
                mobile: state.mobile,
                password: state.password,
                role: state.role,
                profilePicURL: croppedImg,
            }
            dispatch(registerUserByAdmin(user))
        }
    }
    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    const handlePhoneNumberChange = (number) => {
        setState({ ...state, mobile: number })
    }
    const setEditorRef = (ed) => {
        editor = ed
    }
    const handleNewImage = (e) => {
        setState({ ...state, image: e.target.files[0] })
    }
    const handleSnackbarClose = (e) => {
        setSnackbarOpen(false)
    }
    const {
        username,
        firstName,
        lastName,
        mobile,
        password,
        confirmPassword,
        role,
        email,
    } = state

    return (
        <div className="m-sm-30">
            <SimpleCard title="Registration">
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="mb-4 w-full"
                                label="Username (Min length 3, Max length 20)"
                                onChange={handleChange}
                                type="text"
                                name="username"
                                value={username || ''}
                                validators={[
                                    'required',
                                    'minStringLength: 3',
                                    'maxStringLength: 20',
                                ]}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="mb-4 w-full"
                                label="First Name"
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                value={firstName || ''}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="mb-4 w-full"
                                label="Last Name"
                                onChange={handleChange}
                                type="text"
                                name="lastName"
                                value={lastName || ''}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="mb-4 w-full"
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
                            <MuiPhoneNumber
                                defaultCountry={'us'}
                                onChange={handlePhoneNumberChange}
                                inputClass="mb-4 w-full"
                                label="Mobile Nubmer"
                                name="mobile"
                                value={mobile || ''}
                            />
                            <TextValidator
                                className="mb-4 w-full"
                                label="Password"
                                onChange={handleChange}
                                name="password"
                                type="password"
                                value={password || ''}
                                validators={['required', 'minStringLength: 6']}
                                errorMessages={[
                                    'this field is required',
                                    'password must be at least 6 digits',
                                ]}
                            />
                            <TextValidator
                                className="mb-4 w-full"
                                label="Confirm Password"
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
                            <RadioGroup
                                className="mb-4"
                                value={role || ''}
                                name="role"
                                onChange={handleChange}
                                aria-label="Role"
                                row
                            >
                                <FormControlLabel
                                    value="ADMIN"
                                    control={<Radio color="secondary" />}
                                    label="Admin"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="EDITOR"
                                    control={<Radio color="secondary" />}
                                    label="Editor"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="GUEST"
                                    control={<Radio color="secondary" />}
                                    label="Guest"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div
                                className="crop-area"
                                style={{
                                    background: 'gray',
                                    width: '360px',
                                    height: '360px',
                                    margin: '20px auto',
                                }}
                            >
                                <AvatarEditor
                                    ref={setEditorRef}
                                    scale={parseFloat(state.scale)}
                                    width={state.width}
                                    color={state.color} // RGBA
                                    height={state.height}
                                    position={state.position}
                                    rotate={parseFloat(state.rotate)}
                                    border={state.border}
                                    borderRadius={state.borderRadius}
                                    image={state.image}
                                    className="editor-canvas"
                                    backgroundColor={state.backgroundColor}
                                />
                                <button className="upload flex justify-center items-center btn-transback">
                                    <svg className="icon" viewBox="0 0 32 32">
                                        <path d="M24.751 6.492H23.25l-1.47-1.47a4.133 4.133 0 00-2.936-1.219H13.17a4.133 4.133 0 00-2.936 1.219l-1.476 1.47H7.25a5.497 5.497 0 00-5.497 5.477v10.737a5.498 5.498 0 005.497 5.491h17.502a5.504 5.504 0 005.497-5.49V11.97a5.504 5.504 0 00-5.497-5.478zm3.298 16.214a3.299 3.299 0 01-3.298 3.292H7.249a3.298 3.298 0 01-3.298-3.291V11.971a3.298 3.298 0 013.298-3.279h1.96c.305-.002.58-.127.779-.327l1.815-1.784a1.955 1.955 0 011.39-.578h5.664c.543 0 1.035.221 1.39.578l1.74 1.74c.202.228.496.371.823.371h1.96a3.297 3.297 0 013.279 3.278v.001z"></path>
                                        <path d="M16 9.602h-.006a7.118 7.118 0 107.118 7.118v-.007a7.11 7.11 0 00-7.111-7.111zm3.97 7.576a.628.628 0 01-.628.628h-2.255v2.268a.628.628 0 01-.628.628h-.942a.628.628 0 01-.628-.628v-2.28h-2.255a.628.628 0 01-.628-.628v-.936c0-.347.281-.628.628-.628h2.312V13.34c0-.347.281-.628.628-.628h.942c.347 0 .628.281.628.628v2.28h2.199c.347 0 .628.281.628.628z"></path>
                                    </svg>
                                    <input
                                        type="file"
                                        onChange={handleNewImage}
                                    />
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>send</Icon>
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
            >
                <MatxSnackbar
                    onClose={handleSnackbarClose}
                    variant={
                        user.message && user.message !== '' && user.status
                            ? 'success'
                            : 'error'
                    }
                    message={user.message}
                />
            </Snackbar>
        </div>
    )
}

export default Register
