import React, { useState } from 'react'
import {
    Button,
    Select,
    TextField,
    MenuItem,
    FormControl,
    FormControlLabel,
    InputLabel,
    Checkbox,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
    Snackbar,
} from '@material-ui/core'
import styles from '../style//AddDialog.module.css'
import { AvatarEditor, MatxSnackbar } from 'app/components'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export const AddDialog = ({ selected, tree, onSubmit, onClose }) => {
    var editor = null
    const [state, setState] = useState({
        name: selected ? selected.name : '',
        gameUrl: selected? selected.gameUrl : '',
        gameType: selected? selected.gameType : 0,
        description: selected? selected.description : '',
        supportedPlayType: selected? selected.supportedPlayType : 0,
        playType: selected? selected.playType : 0,
        parent: selected? selected.parent : 1,
        image: selected? selected.image : '',
        droppable: selected? selected.droppable : false,
    })
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const handleAvatarEditor = (ed) => {
        editor = ed
    }
    const handleSnackbarClose = (e) => {
        setSnackbarOpen(false)
    }
    const handleChange = (event) => {
        event.persist()
        if (event.target.name === 'droppable')
            setState({ ...state, [event.target.name]: event.target.checked })
        else setState({ ...state, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => {
        if (editor) {
            const canvasScaled = editor.getImageScaledToCanvas()
            const croppedImg = canvasScaled.toDataURL()
            state.image = croppedImg
            setSnackbarOpen(true)
            onSubmit(state)
        }
    }

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={true}
            onClose={onClose}
            TransitionComponent={Transition}
        >
            <DialogTitle>Add New Node</DialogTitle>
            <DialogContent className={styles.content}>
                <TextField
                    label="Name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={state.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                    autoFocus
                />
                <FormControl className={styles.select}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        label="Type"
                        name="gameType"
                        onChange={handleChange}
                        value={state.gameType}
                    >
                        <MenuItem value="0">Original</MenuItem>
                        <MenuItem value="1">Slot</MenuItem>
                        <MenuItem value="2">Casino</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Url"
                    name="gameUrl"
                    type="text"
                    onChange={handleChange}
                    value={state.gameUrl}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                />
                <TextField
                    label="Description"
                    name="description"
                    type="text"
                    onChange={handleChange}
                    rowsMax={30}
                    value={state.description}
                    fullWidth
                    multiline
                />
                <AvatarEditor
                    onEditorChange={handleAvatarEditor}
                    panelShow={false}
                    width={250}
                    height={250}
                    border={0}
                    borderRadius={0}
                    image={state.image}
                />
                <FormControl className={styles.select}>
                    <InputLabel>SupportedPlayType</InputLabel>
                    <Select
                        label="SupportedPlayType"
                        name="supportedPlayType"
                        onChange={handleChange}
                        value={state.supportedPlayType}
                    >
                        <MenuItem value="0">Demo</MenuItem>
                        <MenuItem value="1">Mobile</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={styles.select}>
                    <InputLabel>PlayType</InputLabel>
                    <Select
                        label="PlayType"
                        name="playType"
                        onChange={handleChange}
                        value={state.playType}
                    >
                        <MenuItem value="0">Free</MenuItem>
                        <MenuItem value="1">Real</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={styles.select}>
                    <InputLabel>Parent</InputLabel>
                    <Select
                        label="Parent"
                        name="parent"
                        onChange={handleChange}
                        value={state.parent}
                    >
                        {/* <MenuItem value={0}>(root)</MenuItem> */}
                        {tree
                            .filter((node) => node.droppable)
                            .map((node) => (
                                <MenuItem key={node.id} value={node.id}>
                                    {node.name}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.droppable}
                            value={state.droppable}
                            onChange={handleChange}
                            color="primary"
                            name="droppable"
                        />
                    }
                    label="Droppable"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    disabled={
                        state.name === '' ||
                        state.gameUrl === '' ||
                        state.description === ''
                    }
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </DialogActions>
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
                    variant="success"
                    message="Custom Node created"
                />
            </Snackbar>
        </Dialog>
    )
}
