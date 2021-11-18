import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Snackbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { ConfirmationDialog, MatxSnackbar, SimpleCard } from 'app/components'
import {
    getUsersByAdmin,
    deleteUserByAdmin,
} from '../../redux/actions/UserActions'
import useWindowDimensions from 'app/hooks/useWindowDimensions'
import history from 'history.js'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    userTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const List = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const userReducer = useSelector(({ user }) => user)
    const { width } = useWindowDimensions()
    const [openConfirm, setOpenConfirm] = useState({
        userId: 0,
        confirm: false,
    })
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    useEffect(() => {
        dispatch(getUsersByAdmin())
    }, [])
    useEffect(() => {
        if (userReducer.message && userReducer.message !== '')
            setSnackbarOpen(true)
    }, [userReducer])

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase()
    }
    const handleUserUpdate = (id) => {
        history.push('/user/register?id=' + id)
    }
    const handleDeleteConfirm = () => {
        dispatch(deleteUserByAdmin(openConfirm.userId))
        setOpenConfirm({ userId: 0, confirm: false })
    }
    const handleSnackbarClose = (e) => {
        setSnackbarOpen(false)
    }

    return (
        <div className="m-sm-30">
            <SimpleCard title="Registration">
                <Card elevation={3} className="pt-5 mb-6">
                    <div className="overflow-auto">
                        <Table
                            className={clsx(
                                'whitespace-pre min-w-400',
                                classes.userTable
                            )}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell className="px-6" colSpan={4}>
                                        Full Name
                                    </TableCell>
                                    {/* <TableCell className="px-0" colSpan={2}>
                                        User Name
                                    </TableCell> */}
                                    <TableCell className="px-0" colSpan={3}>
                                        Email
                                    </TableCell>
                                    <TableCell className="px-0" colSpan={2}>
                                        Mobile
                                    </TableCell>
                                    <TableCell className="px-0" colSpan={1}>
                                        Role
                                    </TableCell>
                                    <TableCell className="px-0" colSpan={1}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userReducer.data.map(
                                    (user, index) =>
                                        user.role !== 'SA' && (
                                            <TableRow key={index} hover>
                                                <TableCell
                                                    className="px-0 capitalize"
                                                    colSpan={4}
                                                    align="left"
                                                >
                                                    <div className="flex items-center">
                                                        <Avatar
                                                            src={
                                                                user.profilePicURL
                                                            }
                                                        />
                                                        <p className="m-0 ml-2">
                                                            {user.firstName}
                                                            &nbsp;
                                                            {user.lastName}
                                                        </p>
                                                    </div>
                                                </TableCell>
                                                {/* <TableCell
                                                    className="px-0 capitalize"
                                                    align="left"
                                                    colSpan={2}
                                                >
                                                    {user.name}
                                                </TableCell> */}
                                                <TableCell
                                                    className="px-0 capitalize"
                                                    align="left"
                                                    colSpan={3}
                                                >
                                                    {user.email}
                                                </TableCell>
                                                <TableCell
                                                    className="px-0 capitalize"
                                                    align="left"
                                                    colSpan={2}
                                                >
                                                    {user.mobile}
                                                </TableCell>
                                                <TableCell
                                                    className="px-0"
                                                    align="left"
                                                    colSpan={1}
                                                >
                                                    <small
                                                        className={`border-radius-4 text-white px-2 py-2px ${
                                                            user.role ===
                                                            'GUEST'
                                                                ? 'bg-secondary'
                                                                : user.role ===
                                                                  'EDITOR'
                                                                ? 'bg-green'
                                                                : 'bg-primary'
                                                        }`}
                                                    >
                                                        {width > 750
                                                            ? user.role
                                                            : capitalizeFirstLetter(
                                                                  user.role
                                                              )}
                                                    </small>
                                                </TableCell>
                                                <TableCell
                                                    className="px-0"
                                                    colSpan={1}
                                                >
                                                    <IconButton
                                                        onClick={() =>
                                                            handleUserUpdate(
                                                                user.id
                                                            )
                                                        }
                                                    >
                                                        <Icon color="primary">
                                                            edit
                                                        </Icon>
                                                    </IconButton>
                                                    <IconButton
                                                        onClick={() =>
                                                            setOpenConfirm({
                                                                userId: user.id,
                                                                confirm: true,
                                                            })
                                                        }
                                                    >
                                                        <Icon color="error">
                                                            delete
                                                        </Icon>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        )
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </SimpleCard>
            <ConfirmationDialog
                open={openConfirm.confirm}
                text="Once deleted, you will no longer be able to get your data."
                onYesClick={handleDeleteConfirm}
                onConfirmDialogClose={() =>
                    setOpenConfirm({ ...openConfirm, confirm: false })
                }
            />
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
                        userReducer.message &&
                        userReducer.message !== '' &&
                        userReducer.status
                            ? 'success'
                            : 'error'
                    }
                    message={userReducer.message}
                />
            </Snackbar>
        </div>
    )
}

export default List
