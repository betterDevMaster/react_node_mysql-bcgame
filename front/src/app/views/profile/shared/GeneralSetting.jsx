import React from 'react'
import { SimpleCard, MatxDivider, MatxProgressBar } from 'app/components'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import MaxHeightMenu from '../../material-kit/menu/MaxHeightMenu'

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    )
})
const GeneralSetting = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    })

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked })
    }
    return (
        <div>
            <SimpleCard title="General Setting">
                <div className="flex justify-between items-center">
                    <h6 className="text-muted">
                        Show full name of currency in crypto list
                    </h6>
                    <IOSSwitch
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="checkedA"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <div>
                        <h6 className="text-muted">Currency Setting</h6>
                        <div className="local-currency">
                            <img
                                className="coin-icon"
                                src="https://bc.game/coin/USD.black.png"
                            />
                            USD
                        </div>
                    </div>
                    <IOSSwitch
                        checked={state.checkedB}
                        onChange={handleChange('checkedB')}
                        value="checkedB"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <h6 className="text-muted">Display mode</h6>
                    <IOSSwitch
                        checked={state.checkedC}
                        onChange={handleChange('checkedC')}
                        value="checkedC"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <div>
                        <h6 className="text-muted">Language</h6>
                        <small>English</small>
                    </div>
                    <MaxHeightMenu />
                </div>
            </SimpleCard>
        </div>
    )
}

export default GeneralSetting
