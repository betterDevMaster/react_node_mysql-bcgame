import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Card, Button, Icon, Snackbar } from '@material-ui/core'
import { AvatarEditor, MatxSnackbar, SimpleCard } from 'app/components'

const ProfileSetting = ({ user, update }) => {
    var editor = null
    const [state, setState] = useState({
        username: user.name,
        image: user.profilePicURL,
        allowZoomOut: false,
        position: { x: 0.5, y: 0.5 },
        scale: 1,
        rotate: 0,
        borderRadius: 200,
        border: 50,
        preview: null,
        width: 300,
        height: 300,
        color: [255, 255, 255, 0.6],
    })
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [updateRet, setUpdateRet] = useState({status: false, message: ''})

    const handleAvatarEditor = (ed) => {
        editor = ed
    }
    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = async (event) => {
        if (editor) {
            const canvasScaled = editor.getImageScaledToCanvas()
            const croppedImg = canvasScaled.toDataURL()
            setState({ ...state, image: croppedImg })
            const ret = await update(user.id, state.username, croppedImg)
            setSnackbarOpen(true)
            setUpdateRet({...updateRet, status: ret.status, message: ret.message})
        }
    }
    const handleSnackbarClose = (e) => {
        setSnackbarOpen(false)
    }

    return (
        <SimpleCard title="General Profile">
            <Card
                elevation={0}
                className="box-shadow-none text-center relative p-sm-24"
            >
                <AvatarEditor
                    onEditorChange={handleAvatarEditor}
                    image={state.image}
                    panelShow={true}
                />
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <TextValidator
                        className="mb-4 w-full"
                        label="User Name"
                        onChange={handleChange}
                        type="text"
                        name="username"
                        value={state.username || ''}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        autoFocus
                    />
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>send</Icon>
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                </ValidatorForm>
            </Card>
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
                        updateRet.message &&
                        updateRet.message !== '' &&
                        updateRet.status
                            ? 'success'
                            : 'error'
                    }
                    message={updateRet.message}
                />
            </Snackbar>
        </SimpleCard>
    )
}

export default ProfileSetting
