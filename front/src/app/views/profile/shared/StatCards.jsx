import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const StatCards = ({ user, onItemClick }) => {
    const classes = useStyles()

    const handleItem = (id) => {
        onItemClick(id)
    }
    return (
        <Grid container spacing={3} className="mb-3">
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-12 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>
                            sentiment_very_satisfied
                        </Icon>
                        <div className="ml-3">
                            <small className="text-muted">
                                {user.firstName}&nbsp;{user.lastName}
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                0
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton onClick={() => handleItem(0)}>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between align-center p-sm-12 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>settings</Icon>
                        <div className="ml-3">
                            <h6 className="text-muted line-height-1">
                                Common Setting
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton onClick={() => handleItem(1)}>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-12 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>account_box</Icon>
                        <div className="ml-3">
                            <h6 className="text-muted line-height-1">
                                Privacy
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton onClick={() => handleItem(2)}>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-12 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>security</Icon>
                        <div className="ml-3">
                            <h6 className="text-muted line-height-1">
                                Security
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton onClick={() => handleItem(3)}>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards
