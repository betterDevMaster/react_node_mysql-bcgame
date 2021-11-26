import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Fab,
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
import {
    BonusCard,
    ConfirmationDialog,
    MatxSnackbar,
    SimpleCard,
} from 'app/components'

const List = () => {
    return (
        <div className="m-sm-30">
            <Grid container spacing={3} className="mb-6">
                <Grid item xs={12} md={12}>
                    <Card
                        elevation={3}
                        className="p-8 text-white flex"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 92% -19%, rgb(179, 70, 34), rgb(181, 62, 22) 17%, rgb(196, 73, 33) 200%)',
                        }}
                    >
                        <Grid item xs={12} md={4}>
                            <h2 className="flex-grow">GREAT BONUS FOR</h2>
                            <h2 className="flex-grow text-dark-yellow">
                                EVERY DEPOSIT
                            </h2>
                            <h2
                                className="flex-grow pt-4 pb-4"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(to right, rgb(221, 83, 39), rgba(206, 85, 60, 0) 83%)',
                                    padding: '0px 2rem',
                                    marginLeft: '-2rem',
                                }}
                            >
                                BCD UNLOCK SPEED +5%
                            </h2>
                            <h4 className="flex-grow pt-4">
                                Available for all players
                            </h4>
                            <h3 className="flex-grow">Before 2/17/2022</h3>
                            <p className="flex items-center pt-8 m-0">
                                Details
                                <Icon className="text-green">
                                    chevron_right
                                </Icon>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <div className="customCard flex justify-end">
                                <BonusCard
                                    active={true}
                                    arrow={true}
                                    disabled={false}
                                />
                                <BonusCard
                                    active={false}
                                    arrow={true}
                                    disabled={true}
                                />
                                <BonusCard
                                    active={false}
                                    arrow={true}
                                    disabled={true}
                                />
                                <BonusCard
                                    active={false}
                                    arrow={false}
                                    disabled={true}
                                />
                            </div>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3} className="p-4">
                        <div className="flex items-center">
                            <Fab
                                size="medium"
                                className="bg-light-green circle-44 box-shadow-none"
                            >
                                <Icon className="text-green">trending_up</Icon>
                            </Fab>
                            <h5 className="font-medium text-green m-0 ml-3">
                                Active Users
                            </h5>
                        </div>
                        <div className="pt-4 flex items-center">
                            <h2 className="m-0 text-muted flex-grow">10.8k</h2>
                            <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-green text-white">
                                <Icon className="text-14">expand_less</Icon>
                            </div>
                            <span className="text-13 text-green ml-1">
                                (+21%)
                            </span>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3} className="p-4">
                        <div className="flex items-center">
                            <Fab
                                size="medium"
                                className="bg-light-error circle-44 box-shadow-none overflow-hidden"
                            >
                                <Icon className="text-error">star_outline</Icon>
                            </Fab>
                            <h5 className="font-medium text-error m-0 ml-3">
                                Transactions
                            </h5>
                        </div>
                        <div className="pt-4 flex items-center">
                            <h2 className="m-0 text-muted flex-grow">$2.8M</h2>
                            <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-error text-white">
                                <Icon className="text-14">expand_less</Icon>
                            </div>
                            <span className="text-13 text-error ml-1">
                                (+21%)
                            </span>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default List
