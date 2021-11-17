import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TopSellingTable from './TopSellingTable'
import Contest from './Contest'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const Lateset = () => {
    const classes = useStyles()
    const [active, setActive] = React.useState(0)

    return (
        <Grid container spacing={2} className="mb-3">
            <div>
                <div className="tabs-navs">
                    <button
                        className={
                            active === 0 ? 'tabs-nav is-active' : 'tabs-nav'
                        }
                        onClick={() => setActive(0)}
                    >
                        Latest bets
                    </button>
                    <button
                        className={
                            active === 1 ? 'tabs-nav is-active' : 'tabs-nav'
                        }
                        onClick={() => setActive(1)}
                    >
                        Contest
                    </button>
                </div>
                {active === 0 && <TopSellingTable />}
                {active === 1 && <Contest />}
            </div>
        </Grid>
    )
}

export default Lateset
