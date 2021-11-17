import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useWindowDimensions from 'app/hooks/useWindowDimensions'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const GameTypes = () => {
    const classes = useStyles()
    const imgItems = [{ src: '1.png' }, { src: '2.png' }, { src: '3.png' }]
    const { height, width } = useWindowDimensions()

    const items = imgItems.map((item, index) => {
        return (
            <img
                key={index}
                className="game-types-img"
                style={{ padding: '0 5px' }}
                src={'/assets/images/game-types/' + item.src}
                alt={item.src}
            />
        )
    })
    const responsive = {
        0: { items: 2 },
        630: { items: 2 },
        1260: { items: 2 },
    }

    return (
        <Grid container spacing={2} className="mb-3">
            {width > 1265 ? (
                imgItems.map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <img
                            className="game-types-img"
                            src={'/assets/images/game-types/' + item.src}
                        />
                    </Grid>
                ))
            ) : (
                <AliceCarousel
                    autoPlay
                    animationDuration={3000}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                />
            )}
        </Grid>
    )
}

export default GameTypes
