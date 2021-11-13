import React, { useState, useEffect } from 'react'
import { Card, Button, Icon } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { useDropzone } from 'react-dropzone'

// Pintura Image Editor
import '../pintura/pintura.css'
import { openDefaultEditor } from '../pintura/pintura'

const UpgradeCard = ({ user }) => {
    const [state, setState] = useState({
        username: user.username,
        image: 'https://img2.bc.game/avatar/3437407/s?t=1636739394996',
    })

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    // This function is called when the user taps the edit button.
    // It opens the editor and returns the modified file when done
    const editImage = (image, done) => {
        const imageFile = image.pintura ? image.pintura.file : image
        const imageState = image.pintura ? image.pintura.data : {}

        const editor = openDefaultEditor({
            src: imageFile,
            imageState,
        })

        editor.on('close', () => {
            // the user cancelled editing the image
        })

        editor.on('process', ({ dest, imageState }) => {
            Object.assign(dest, {
                pintura: { file: imageFile, data: imageState },
            })
            done(dest)
        })
    }

    const [file, setFile] = useState(
        'https://img2.bc.game/avatar/3437407/s?t=1636739394996'
    )
    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFile(URL.createObjectURL(acceptedFiles[0]))
        },
        multiple: false,
    })
    const thumbs = (
        <div className='thumb'>
            <div className='thumbInner'>
                <img src={file} className='img' alt="Upload Image" />
            </div>
            <button
                className='thumbButton'
                onClick={() =>
                    editImage(file, (output) => {
                        // revoke preview URL for old image
                        if (file) URL.revokeObjectURL(file)
                        // update view
                        setFile(URL.createObjectURL(output))
                    })
                }
            >
                Edit
            </button>
        </div>
    )

    return (
        <Card className="p-sm-24 mb-6">
            <Card
                elevation={0}
                className="box-shadow-none text-center relative bg-light-primary p-sm-24"
            >
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>
                        Drag & drop some files here, or click to select files
                    </p>
                </div>
                <aside className="thumbsContainer">{thumbs}</aside>
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
        </Card>
    )
}

export default UpgradeCard
