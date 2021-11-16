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

const OriginalGames = () => {
    const classes = useStyles()
    const imgItems = [
        { src: '1.png' },
        { src: '2.png' },
        { src: '3.png' },
        { src: '4.png' },
        { src: '5.png' },
        { src: '6.png' },
        { src: '7.png' },
        { src: '8.png' },
        { src: '9.png' },
        { src: '10.png' },
        { src: '11.png' },
        { src: '12.png' },
    ]

    return (
        <Grid container spacing={1} className="mb-3">
            {imgItems.map((item, index) => (
                <Grid item xs={12} md={2} key={index}>
                    <img
                        className="game-types-img"
                        src={'/assets/images/original-games/' + item.src}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default OriginalGames
