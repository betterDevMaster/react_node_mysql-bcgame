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

const StatCards = ({user}) => {
    const classes = useStyles()
console.log('user- ---',user)
    return (
        <Grid container spacing={3} className="mb-3">
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>sentiment_very_satisfied</Icon>
                        <div className="ml-3">
                            <small className="text-muted">{user.firstname}&nbsp;{user.lastname}</small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                0
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between align-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>attach_money</Icon>
                        <div className="ml-3">
                            <small className="text-muted line-height-1">
                                This week Sales
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                $80,500
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>store</Icon>
                        <div className="ml-3">
                            <small className="text-muted">
                                Inventory Status
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                8.5% Stock Surplus
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                    elevation={6}
                >
                    <div className="flex items-center">
                        <Icon className={classes.icon}>shopping_cart</Icon>
                        <div className="ml-3">
                            <small className="text-muted">
                                Orders to deliver
                            </small>
                            <h6 className="m-0 mt-1 text-primary font-medium">
                                305 Orders
                            </h6>
                        </div>
                    </div>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </Card>
            </Grid>
        </Grid>
    )
}

export default StatCards
