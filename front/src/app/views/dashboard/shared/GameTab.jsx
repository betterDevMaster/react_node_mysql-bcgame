import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Tabs, Tab } from '@material-ui/core'
import clsx from 'clsx'
import { buildNavList } from 'utils'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    root: {
        flexGrow: 1,
        maxWidth: 560,
        backgroundColor: '#222a44',
        color: '#fff',
        borderRadius: '10rem',
        margin: '0 auto',
        '& button': {
            minHeight: '3.8rem',
            minWidth: '8rem',
            padding: '0.3rem 0.5rem',
        },
    },
    iconLabelWrapper: {
        flexDirection: 'row',
        '& svg': {
            marginRight: '.8rem',
        },
    },
    rmMr: {
        margin: '0 !important',
    },
}))

const GameTab = ({ list, onChange }) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
        onChange(newValue)
    }

    return (
        <Box className={clsx('mt-9', classes.root)}>
            <Tabs
                value={value}
                onChange={handleChange}
                // variant="scrollable"
                // scrollButtons="auto"
                // allowScrollButtonsMobile
                indicatorColor="secondary"
                textColor="inherit"
                centered={true}
            >
                {buildNavList(list, 0).map((item, index) => (
                    <Tab
                        icon={
                            <img
                                className={clsx('game-icon', classes.rmMr)}
                                src={item.icon}
                                alt="icon"
                            />
                        }
                        key={index}
                        classes={{
                            wrapper: classes.iconLabelWrapper,
                        }}
                        label={item.name}
                        to={item.gameUrl}
                    />
                ))}
            </Tabs>
        </Box>
    )
}

export default GameTab
