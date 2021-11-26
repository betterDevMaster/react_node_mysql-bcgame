import React, { useState, useEffect } from 'react'
import { Grid, Icon } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { buildNavList } from 'utils'
import history from 'app/services/historyService'

const CasinoGames = ({ index, list }) => {
    const theme = useTheme()
    const isSMMobile = useMediaQuery(theme.breakpoints.down('sm')) //4
    const isXSMobile = useMediaQuery(theme.breakpoints.down('xs')) //2

    return (
        <Grid container spacing={1} className="mt-3 mb-3">
            {list.length > 0 &&
                buildNavList(list, 0)[index].children.map((item, i) => (
                    <div
                        style={{
                            maxWidth: `${
                                100 /
                                (isSMMobile && !isXSMobile
                                    ? 4
                                    : isSMMobile && isXSMobile
                                    ? 2
                                    : 6)
                            }%`,
                            flexBasis: `${
                                100 /
                                (isSMMobile && !isXSMobile
                                    ? 4
                                    : isSMMobile && isXSMobile
                                    ? 2
                                    : 6)
                            }%`,
                            padding: '.3rem',
                        }}
                        key={i}
                    >
                        <a
                            className="game-panel"
                            onClick={() => history.push(item.gameUrl)}
                        >
                            <div className="lazy-img img">
                                <img
                                    className="game-types-img"
                                    src={item.image}
                                />
                            </div>
                            <div className="hover-mask">
                                <div className="house-edge">House Edge 1%</div>
                                <img
                                    className="game-types-img play-icon"
                                    src={'/assets/images/other/play.svg'}
                                />
                            </div>
                        </a>
                        <div className="game-desc">
                            <div className="game-name">{item.name}</div>
                            <div className="help-btn-wrap">
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

export default CasinoGames
