import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WinnerHisotry from './WinnerHisotry'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { SimpleCard } from 'app/components'

// const useStyles = makeStyles(({ palette, ...theme }) => ({
//     icon: {
//         fontSize: '44px',
//         opacity: 0.6,
//         color: palette.primary.main,
//     },
// }))

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        borderRadius: '20rem',
        width: '10rem',
        height: '3rem',
    },
    input: {
        display: 'none',
    },
}))

const Winners = () => {
    const theme = useTheme()
    const isSMMobile = useMediaQuery(theme.breakpoints.down('sm')) //4
    const isXSMobile = useMediaQuery(theme.breakpoints.down('xs')) //2
    const classes = useStyles()

    return (
        <SimpleCard title="Biggest Winners today">
            <Grid container spacing={2} className="mb-3">
                <Grid item lg={6} xs={12}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-muted mb-8">
                                CHICKEN DINNER
                            </h2>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Play Now
                            </Button>
                        </div>
                        <img
                            className="w-300"
                            src="/assets/images/other/winner.png"
                            alt=""
                        />
                    </div>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <WinnerHisotry />
                </Grid>
            </Grid>
        </SimpleCard>
    )
}

export default Winners
