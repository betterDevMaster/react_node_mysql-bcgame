import React from 'react'
import { Card, Button } from '@material-ui/core'

const UpgradeCard = ({user}) => {
    return (
        <Card className="p-sm-24 mb-6">
            <Card
                elevation={0}
                className="box-shadow-none text-center relative bg-light-primary p-sm-24"
            >
                <img
                    src="https://img2.bc.game/avatar/3437407/s?t=1636739394996"
                    alt="upgrade"
                    className='border-radius-circle'
                />
                <p className="text-muted m-0 py-6">
                    <b>{user.username}</b>
                </p>
                {/* <Button
                    className="uppercase"
                    size="large"
                    variant="contained"
                    color="primary"
                >
                    upgrade now
                </Button> */}
            </Card>
        </Card>
    )
}

export default UpgradeCard
