import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@material-ui/core'
import TouchRipple from '@material-ui/core/ButtonBase'
import MatxVerticalNavExpansionPanel from './MatxVerticalNavExpansionPanel'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'
import { getGames } from 'app/redux/actions/GameActions'
import { buildNavList } from 'utils'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    navItem: {
        transition: 'all 150ms ease-in',
        '&:hover': {
            backgroundColor: palette.action.hover,
        },
    },
    navItemActive: {
        backgroundColor: palette.action.selected,
    },
    compactNavItem: {
        overflow: 'hidden',
        justifyContent: 'center !important',
        '& $itemText': {
            display: 'none',
        },
        '& $itemIcon': {
            display: 'none',
        },
    },
    itemIcon: {},
    itemText: {
        fontSize: '0.875rem',
        paddingLeft: '0.8rem',
    },
    label: {
        color: palette.text.secondary,
    },
    bulletIcon: {
        background: palette.text.secondary,
    },
}))

const MatxVerticalNav = ({ items, user }) => {
    const { settings } = useSettings()
    const { mode } = settings.layout1Settings.leftSidebar
    const classes = useStyles()
    const dispatch = useDispatch()
    const gameReducer = useSelector(({ game }) => game)
    const [dispItems, setDispItems] = useState([])
    useEffect(() => {
        dispatch(getGames())
    }, [])

    useEffect(() => {
        if (gameReducer.data.length > 0) {
            const navItems = buildNavList(gameReducer.data, 0)
            navItems.map((g) => convertNavList(g))
            setDispItems([...items, ...navItems])
        }
    }, [gameReducer.data])

    const convertNavList = (node) => {
        node.path = node.gameUrl
        node.auth = ['SA', 'ADMIN', 'EDITOR', 'GUEST']
        if (node.children) {
            if (node.children.length > 0)
                node.children.forEach((el) => {
                    convertNavList(el)
                })
            else delete node.children
        }
        return node
    }
    const renderLevels = (data) => {
        return data.map((item, index) => {
            if (item.auth && item.auth.includes(user.role)) {
                if (item.type === 'label')
                    return (
                        <p
                            key={index}
                            className={clsx({
                                'px-4 mb-2 mt-6 uppercase text-12 sidenavHoverShow': true,
                                [classes.label]: true,
                                hidden: mode === 'compact',
                            })}
                        >
                            {item.label}
                        </p>
                    )
                if (item.children) {
                    return (
                        <MatxVerticalNavExpansionPanel
                            mode={mode}
                            item={item}
                            key={index}
                        >
                            {renderLevels(item.children)}
                        </MatxVerticalNavExpansionPanel>
                    )
                } else if (item.type === 'extLink') {
                    return (
                        <a
                            key={index}
                            href={item.path}
                            className={clsx({
                                'flex justify-between h-44 border-radius-4 mb-2 compactNavItem whitespace-pre overflow-hidden': true,
                                [classes.navItem]: true,
                                [classes.compactNavItem]: mode === 'compact',
                            })}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <TouchRipple
                                key={item.name}
                                name="child"
                                className="w-full"
                            >
                                {(() => {
                                    if (item.icon) {
                                        if (item.icon.includes('data:image')) {
                                            return (
                                                <img
                                                    className="game-icon"
                                                    src={item.icon}
                                                    alt="server image"
                                                />
                                            )
                                        } else {
                                            return (
                                                <Icon className="text-18 align-middle px-4">
                                                    {item.icon}
                                                </Icon>
                                            )
                                        }
                                    } else {
                                        return (
                                            <span className="item-icon icon-text">
                                                {item.iconText}
                                            </span>
                                        )
                                    }
                                })()}
                                <span
                                    className={clsx(
                                        'align-middle sidenavHoverShow',
                                        classes.itemText
                                    )}
                                >
                                    {item.name}
                                </span>
                                <div className="mx-auto"></div>
                                {item.badge && (
                                    <div
                                        className={`rounded bg-${item.badge.color} px-1 py-1px`}
                                    >
                                        {item.badge.value}
                                    </div>
                                )}
                            </TouchRipple>
                        </a>
                    )
                } else {
                    return (
                        <NavLink
                            key={index}
                            to={item.path}
                            activeClassName={classes.navItemActive}
                            className={clsx({
                                'flex justify-between h-44 border-radius-4 mb-2 compactNavItem whitespace-pre overflow-hidden': true,
                                [classes.navItem]: true,
                                [classes.compactNavItem]: mode === 'compact',
                            })}
                        >
                            <TouchRipple
                                key={item.name}
                                name="child"
                                className="w-full"
                            >
                                {item?.icon ? (
                                    item.icon.includes('data:image') ? (
                                        <img
                                            className="game-icon"
                                            src={item.icon}
                                            alt="server image"
                                        />
                                    ) : (
                                        <Icon className="text-18 align-middle w-36 px-4">
                                            {item.icon}
                                        </Icon>
                                    )
                                ) : (
                                    <Fragment>
                                        <div
                                            className={clsx({
                                                'nav-bullet p-2px rounded ml-6 mr-2': true,
                                                [classes.bulletIcon]: true,
                                                hidden: mode === 'compact',
                                            })}
                                        ></div>
                                        <div
                                            className={clsx({
                                                'nav-bullet-text ml-5 text-11': true,
                                                hidden: mode !== 'compact',
                                            })}
                                        >
                                            {item.iconText}
                                        </div>
                                    </Fragment>
                                )}
                                <span
                                    className={clsx(
                                        'align-middle text-left sidenavHoverShow',
                                        classes.itemText
                                    )}
                                >
                                    {item.name}
                                </span>
                                <div className="mx-auto"></div>
                                {item.badge && (
                                    <div
                                        className={clsx(
                                            `rounded bg-${item.badge.color} px-1 py-1px`,
                                            'sidenavHoverShow',
                                            classes.itemIcon
                                        )}
                                    >
                                        {item.badge.value}
                                    </div>
                                )}
                            </TouchRipple>
                        </NavLink>
                    )
                }
            }
        })
    }

    return <div className="navigation">{renderLevels(dispItems)}</div>
}

export default React.memo(MatxVerticalNav)
