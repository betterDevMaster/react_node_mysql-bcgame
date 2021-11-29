import React, { useEffect, useState } from 'react'

import { MatxSnackbar, SimpleCard, RealTimeHisotry } from 'app/components'
import { useSelector } from 'react-redux'

function GamePanel(props) {
    const gameReducer = useSelector(({ game }) => game)
    const [curGame, setcurGame] = useState({})
    useEffect(() => {
        if (gameReducer.data.length > 0) {
            const filtered = gameReducer.data.filter(
                (r) => r.gameUrl === props.match.url
            )[0]
            setcurGame(filtered)
        }
    }, [gameReducer.data, props])

    return (
        <div className="m-sm-30">
            <div
                style={{
                    width: '100%',
                    height: '500px',
                    background: '#fff',
                    marginBottom: '1rem',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30px',
                    boxShadow:
                        '0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%)',
                }}
            >
                {curGame.name} 100% * 500px
            </div>
            <RealTimeHisotry curClass="mb-3" />
            <SimpleCard title={curGame.name}>
                <p>{curGame.description}</p>
            </SimpleCard>
        </div>
    )
}

export default GamePanel
