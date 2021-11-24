import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const GameCarousel = ({ gameLoaded }) => {
    const theme = useTheme()
    const isSMMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isXSMobile = useMediaQuery(theme.breakpoints.down('xs'))

    const imgItems = [
        { src: '1.png' },
        { src: '2.png' },
        { src: '3.png' },
        { src: '4.png' },
        { src: '5.png' },
        { src: '6.png' },
        { src: '7.png' },
        { src: '8.png' },
    ]
    const items = imgItems.map((item, index) => {
        return (
            <img
                key={index}
                className="slider-img"
                src={'/assets/images/slider/' + item.src}
                alt={item.src}
            />
        )
    })
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    }

    return (
        gameLoaded && (
            <AliceCarousel
                autoPlay
                animationDuration={3000}
                // autoWidth
                infinite
                // mouseTracking
                items={items}
                responsive={responsive}
                // disableDotsControls
                disableButtonsControls
            />
        )
    )
}

export default GameCarousel
