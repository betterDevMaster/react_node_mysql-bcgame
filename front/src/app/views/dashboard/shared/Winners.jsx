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

const Winners = () => {
    const classes = useStyles()
    const imgItems = [{ src: '1.png' }, { src: '2.png' }, { src: '3.png' }]

    return (
        <Grid container spacing={2} className="mb-3">
            {imgItems.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <img
                        className="game-types-img"
                        src={'/assets/images/game-types/' + item.src}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default Winners
