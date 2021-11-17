import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TopSellingTable from './TopSellingTable'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const Winners = () => {
    const classes = useStyles()
    const imgItems = [{ src: '1.png' }, { src: '2.png' }, { src: '3.png' }]

    return (
        <Grid container spacing={2} className="mb-3">
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Grid container spacing={2}>
                    <Grid item lg={5} md={5} sm={12} xs={12} className="info">
                        <div className='tit'>
                            WINNER WINNER
                            <br />
                            CHICKEN DINNER
                        </div>
                        <button className="button button-normal">
                            <div className="button-inner">Play Now</div>
                        </button>
                    </Grid>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <img
                            className="game-types-img"
                            src={'/assets/images/other/winner.png'}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <TopSellingTable />
            </Grid>
        </Grid>
    )
}

export default Winners
