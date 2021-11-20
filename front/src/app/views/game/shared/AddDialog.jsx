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
} from '@material-ui/core'
import styles from '../style//AddDialog.module.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export const AddDialog = (props) => {
    const [text, setText] = useState('')
    const [fileType, setFileType] = useState('text')
    const [parent, setParent] = useState(0)
    const [droppable, setDroppable] = useState(false)

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleChangeParent = (e) => {
        setParent(Number(e.target.value))
    }

    const handleChangeDroppable = (e) => {
        setDroppable(e.target.checked)
    }

    const handleChangeFileType = (e) => {
        setFileType(e.target.value)
    }

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={true}
            onClose={props.onClose}
            TransitionComponent={Transition}
        >
            <DialogTitle>Add New Node</DialogTitle>

            <DialogContent className={styles.content}>
                <div>
                    <TextField
                        label="Text"
                        onChange={handleChangeText}
                        value={text}
                        multiline
                        rowsMax={4}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="GameType"
                        onChange={handleChangeText}
                        value={text}
                        multiline
                        rowsMax={4}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="GameUrl"
                        onChange={handleChangeText}
                        value={text}
                        multiline
                        rowsMax={4}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="GameImage"
                        onChange={handleChangeText}
                        value={text}
                        multiline
                        rowsMax={4}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="SupportedPlayType ertsert sertsertg"
                        onChange={handleChangeText}
                        value={text}
                        multiline
                        rowsMax={4}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="playType"
                        onChange={handleChangeText}
                        value={text}
                        multiline
                        rowsMax={4}
                        fullWidth
                    />
                </div>
                <div>
                    <FormControl className={styles.select}>
                        <InputLabel>Parent</InputLabel>
                        <Select
                            label="Parent"
                            onChange={handleChangeParent}
                            value={parent}
                        >
                            <MenuItem value={0}>(root)</MenuItem>
                            {props.tree
                                .filter((node) => node.droppable === true)
                                .map((node) => (
                                    <MenuItem key={node.id} value={node.id}>
                                        {node.text}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={droppable}
                                onChange={handleChangeDroppable}
                                color="primary"
                            />
                        }
                        label="Droppable"
                    />
                </div>
                {!droppable && (
                    <div>
                        <FormControl className={styles.select}>
                            <InputLabel>File type</InputLabel>
                            <Select
                                label="FileType"
                                onChange={handleChangeFileType}
                                value={fileType}
                            >
                                <MenuItem value="text">TEXT</MenuItem>
                                <MenuItem value="csv">CSV</MenuItem>
                                <MenuItem value="image">IMAGE</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button
                    disabled={text === ''}
                    onClick={() =>
                        props.onSubmit({
                            text,
                            parent,
                            droppable,
                            data: {
                                fileType,
                            },
                        })
                    }
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}
