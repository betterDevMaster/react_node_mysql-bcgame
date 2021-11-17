import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useWindowDimensions from 'app/hooks/useWindowDimensions'

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
    const { height, width } = useWindowDimensions()
    const [grids, setGrids] = React.useState(6)
    // React.useEffect(() => {
    //     if (width > 1024) setGrids(6)
    //     else if (width <= 1024 && width > 512) setGrids(4)
    //     else if (width <= 512) setGrids(2)
    // }, [width])
    return (
        <Grid container spacing={1} className="mb-3">
            {imgItems.map((item, index) => (
                <div
                    style={{
                        maxWidth: `${100 / grids}%`,
                        flexBasis: `${100 / grids}%`,
                        padding: '.3rem',
                    }}
                    key={index}
                >
                    <div class="tag-wrap">
                        <div class="tag recommend">Top</div>
                    </div>
                    <a num="1" class="game-panel" href="/classic-dice">
                        <div class="lazy-img img">
                            <img
                                className="game-types-img"
                                src={
                                    '/assets/images/original-games/' + item.src
                                }
                            />
                        </div>
                        <div class="hover-mask">
                            <div class="house-edge">House Edge 1%</div>
                            <img
                                className="game-types-img play-icon"
                                src={'/assets/images/other/play.svg'}
                            />
                        </div>
                    </a>
                    <div class="game-desc">
                        <div class="game-name">Classic Dice</div>
                        <div class="help-btn-wrap">
                            <button>
                                <Icon>help_outline</Icon>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Grid>
    )
}

export default OriginalGames
