import React from 'react'
import { SimpleCard, MatxDivider } from 'app/components'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'

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
const PrivacySetting = () => {
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
                    <div>
                        <h6 className="text-muted">
                            Hide my gameing data on profile
                        </h6>
                        <small>
                            Even if hidden, your avatar and username are always
                            visible in chatrooms.
                        </small>
                    </div>
                    <IOSSwitch
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="checkedA"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <div>
                        <h6 className="text-muted">
                            Hide my username from public lists
                        </h6>
                        <small>
                            If hidden, no one can view your profile by clicking
                            on your avatar or username on public rankings or
                            bets list.
                        </small>
                    </div>
                    <IOSSwitch
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="checkedA"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <h6 className="text-muted">
                        Hide my online presence in private chat
                    </h6>
                    <IOSSwitch
                        checked={state.checkedB}
                        onChange={handleChange('checkedB')}
                        value="checkedB"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <h6 className="text-muted">
                        Allow private messages from strangers
                    </h6>
                    <IOSSwitch
                        checked={state.checkedC}
                        onChange={handleChange('checkedC')}
                        value="checkedC"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <h6 className="text-muted">
                        Refuse any new friend request
                    </h6>
                    <IOSSwitch
                        checked={state.checkedC}
                        onChange={handleChange('checkedC')}
                        value="checkedC"
                    />
                </div>
                <MatxDivider />
                <div className="flex justify-between items-center">
                    <h6 className="text-muted">Refuse tip from strangers</h6>
                    <IOSSwitch
                        checked={state.checkedC}
                        onChange={handleChange('checkedC')}
                        value="checkedC"
                    />
                </div>
            </SimpleCard>
        </div>
    )
}

export default PrivacySetting
