import React, { useState } from 'react'
import { Dialog, Button, Icon, IconButton, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import CloseIcon from '@material-ui/icons/Close'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="Close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

const GeneralDialog = ({
    open,
    onDialogClose,
    title = 'confirm',
    children,
}) => {
    return (
        <Dialog
            onClose={onDialogClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle id="customized-dialog-title" onClose={onDialogClose}>
                {title}
            </DialogTitle>
            <DialogContent
                dividers
                style={{
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                }}
            >
                {/* <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                </Typography> */}
                {children}
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={onDialogClose} color="primary">
                    Save changes
                </Button>
            </DialogActions> */}
        </Dialog>
    )
}

export default GeneralDialog
