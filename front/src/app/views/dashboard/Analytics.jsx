import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import GameTypes from './shared/GameTypes'
import OriginalGames from './shared/OriginalGames'
import Winners from './shared/Winners'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Analytics = () => {
    const theme = useTheme()

    const imgItems = [
        { width: '350px', src: '1.png' },
        { width: '350px', src: '2.png' },
        { width: '350px', src: '3.png' },
        { width: '350px', src: '4.png' },
        { width: '350px', src: '5.png' },
        { width: '350px', src: '6.png' },
        { width: '350px', src: '7.png' },
        { width: '350px', src: '8.png' },
    ]
    const items = imgItems.map((item, index) => {
        return (
            <div style={{ width: item.width }}>
                <img
                    className="slider-img"
                    src={'/assets/images/slider/' + item.src}
                    alt={item.src}
                />
            </div>
        )
    })
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    }

    return (
        <Fragment>
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

            <div className="analytics m-sm-30 mt-6">
                <h4 className="card-title text-muted mb-4">CASINO GAME</h4>
                <GameTypes />
                <OriginalGames />
                <h4 className="card-title text-muted mb-4">Biggest Winners today</h4>
                <Winners />
                {/* <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>

                        <TopSellingTable />

                        <StatCards2 />

                        <h4 className="card-title text-muted mb-4">
                            Ongoing Projects
                        </h4>
                        <RowCards />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Traffic Sources</div>
                            <div className="card-subtitle">Last 30 days</div>
                            <DoughnutChart
                                height="300px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                            />
                        </Card>

                        <UpgradeCard />

                        <Campaigns />
                    </Grid>
                </Grid> */}
            </div>
        </Fragment>
    )
}

export default Analytics
