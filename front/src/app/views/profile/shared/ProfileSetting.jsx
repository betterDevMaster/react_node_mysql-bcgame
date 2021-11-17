import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AvatarEditor from 'react-avatar-editor'
import { Card, Button, Icon } from '@material-ui/core'
import ZoomIn from '@material-ui/icons/ZoomIn'
import { SimpleCard } from 'app/components'

const ProfileSetting = ({ user, update }) => {
    var editor = ''
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

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        if (setEditorRef) {
            const canvasScaled = editor.getImageScaledToCanvas()
            const croppedImg = canvasScaled.toDataURL()

            setState({ ...state, image: croppedImg })
            await update(user.id, state.username, croppedImg)
        }
    }
    const handleNewImage = (e) => {
        setState({ ...state, image: e.target.files[0] })
    }

    const handleScale = (e) => {
        const scale = parseFloat(e.target.value)
        setState({ ...state, scale })
    }

    const handlePositionChange = (position) => {
        setState({ ...state, position })
    }

    const rotateLeft = (e) => {
        e.preventDefault()

        setState({ ...state, rotate: (state.rotate - 90) % 360 })
    }

    const rotateRight = (e) => {
        e.preventDefault()
        setState({ ...state, rotate: (state.rotate + 90) % 360 })
    }
    const setEditorRef = (ed) => {
        editor = ed
    }

    return (
        <SimpleCard title="General Profile">
            <Card
                elevation={0}
                className="box-shadow-none text-center relative bg-light-primary p-sm-24"
            >
                <div className="crop-area">
                    <AvatarEditor
                        ref={setEditorRef}
                        scale={parseFloat(state.scale)}
                        width={state.width}
                        color={state.color} // RGBA
                        height={state.height}
                        position={state.position}
                        onPositionChange={handlePositionChange}
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
                        <input type="file" onChange={handleNewImage} />
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <ZoomIn />
                    <input
                        name="scale"
                        type="range"
                        onChange={handleScale}
                        min={state.allowZoomOut ? '0.1' : '1'}
                        max="2"
                        step="0.01"
                        defaultValue="1"
                        title="Zoom"
                    />

                    <button
                        className="btn-transback"
                        onClick={rotateLeft}
                        title="Left rotate 90 degress counterclockwise"
                    >
                        <Icon>rotate_left</Icon>
                    </button>
                    <button
                        className="btn-transback"
                        onClick={rotateRight}
                        title="Right rotate 90 degress counterclockwise"
                    >
                        <Icon>rotate_right</Icon>
                    </button>
                </div>
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
        </SimpleCard>
    )
}

export default ProfileSetting
