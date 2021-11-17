import React from 'react'
import { Card, Grid, Button, Icon } from '@material-ui/core'
import TopSellingTable from './TopSellingTable'

const Contest = () => {
    return (
        <Card className="mb-6">
            <Card
                elevation={0}
                className="box-shadow-none text-center relative bg-light-primary p-sm-24"
            >
                <div style={{ height: '1.875rem', textAlign: 'right' }}>
                    <Icon className="text-green">help_outline</Icon>
                </div>
                <Grid container spacing={2} className="contest__top">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item lg={5} md={5} sm={12} xs={12}>
                                <img
                                    className="game-types-img"
                                    src={'/assets/images/other/trophy.png'}
                                />
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12}>
                                <div className="type ttc">daily</div>
                                <div className="title">Contest prize pool</div>
                                <div className="prize-amount">
                                    <img
                                        className="currency-icon"
                                        src={
                                            '/assets/images/coins/BTC.black.png'
                                        }
                                    />
                                    <span>0.02682344</span>
                                    <span className="currency-name"> BTC</span>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} className='bg-box'>
                        <div className="title ttc">Time Remaining</div>
                        <div className="contest-countdown">
                            <div className="count-item">
                                <div className="count-panel">
                                    <div className="count-name">HOURS</div>
                                    <div className="count-value">21</div>
                                </div>
                                <div className="count-line">:</div>
                            </div>
                            <div className="count-item">
                                <div className="count-panel">
                                    <div className="count-name">MINUTES</div>
                                    <div className="count-value">06</div>
                                </div>
                                <div className="count-line">:</div>
                            </div>
                            <div className="count-item">
                                <div className="count-panel">
                                    <div className="count-name">SECONDS</div>
                                    <div className="count-value">58</div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className="contest__status">
                    <div className="user">
                        <div className="head">
                            <img
                                className="avatar"
                                src="https://img2.bc.game/avatar/3437407/s?t=1637078120256"
                            />
                        </div>
                        <div className="user-name">King App</div>
                    </div>
                    <div className="position myinfo-item">
                        <div className="label">My Position</div>
                        <div className="value">50th+</div>
                    </div>
                    <div className="wager myinfo-item">
                        <div className="label">Wagered</div>
                        <div className="coin notranslate value">
                            <img
                                className="coin-icon"
                                src={'/assets/images/coins/BTC.black.png'}
                            />
                            <div className="amount">
                                <span className="locale ">$</span>
                                <span className="amount-str">
                                    0.<span className="suffix">00000000</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="reach myinfo-item">
                        <div className="flex-middle">
                            Wager
                            <div className="coin notranslate">
                                <img
                                    className="coin-icon"
                                    src={'/assets/images/coins/BTC.black.png'}
                                />
                                <div className="amount">
                                    <span className="locale ">$</span>
                                    <span className="amount-str">
                                        33060.8107
                                    </span>
                                </div>
                            </div>
                            To reach <span className="color-top">TOP 10</span>
                        </div>
                    </div>
                </Grid>
            </Card>
            <TopSellingTable />
        </Card>
    )
}

export default Contest
