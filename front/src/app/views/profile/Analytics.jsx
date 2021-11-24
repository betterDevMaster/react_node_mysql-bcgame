import React from 'react'
import { Grid } from '@material-ui/core'
import useAuth from 'app/hooks/useAuth'
import StatCards from './shared/StatCards'
import ProfileSetting from './shared/ProfileSetting'
import GeneralSetting from './shared/GeneralSetting'
import PrivacySetting from './shared/PrivacySetting'
import SecuritySetting from './shared/SecuritySetting'

const Analytics = () => {
    const { update, user } = useAuth()
    const [curId, setCurId] = React.useState(0)
    const handleCurrentSetting = (id) => {
        setCurId(id)
    }
    return (
        <div className="analytics m-sm-30 mt-6">
            <Grid container spacing={3}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <StatCards user={user} onItemClick={handleCurrentSetting} />
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    {curId === 0 && (
                        <ProfileSetting user={user} update={update} />
                    )}
                    {curId === 1 && <GeneralSetting />}
                    {curId === 2 && <PrivacySetting />}
                    {curId === 3 && <SecuritySetting />}
                </Grid>
            </Grid>
        </div>
    )
}

export default Analytics
