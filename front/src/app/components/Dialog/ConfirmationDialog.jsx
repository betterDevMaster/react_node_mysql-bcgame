import React from 'react'
import { Dialog, Button, Icon } from '@material-ui/core'

const ConfirmationDialog = ({
    open,
    onConfirmDialogClose,
    text,
    title = 'confirm',
    onYesClick,
}) => {
    return (
        <Dialog maxWidth="xs" open={open} onClose={onConfirmDialogClose}>
            <div className="p-8 text-center w-360 mx-auto">
                <div className="flex items-center justify-center">
                    <Icon className="mr-2" color="secondary">warning</Icon>
                    <h4 className="capitalize m-0">{title}</h4>
                </div>
                <p>{text}</p>
                <div className="flex justify-center">
                    <Button
                        className="m-2 rounded hover-bg-primary px-6"
                        variant="outlined"
                        color="primary"
                        onClick={onYesClick}
                    >
                        Yes
                    </Button>
                    <Button
                        className="m-2 rounded hover-bg-secondary px-6"
                        variant="outlined"
                        color="secondary"
                        onClick={onConfirmDialogClose}
                    >
                        No
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}

export default ConfirmationDialog
