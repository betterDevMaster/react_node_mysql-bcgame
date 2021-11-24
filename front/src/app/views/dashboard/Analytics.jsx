import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GameCarousel from './shared/GameCarousel'
import GameBlogs from './shared/GameBlogs'
import GameTab from './shared/GameTab'
import OriginalGames from './shared/OriginalGames'
import SlotGames from './shared/SlotGames'
import CasinoGames from './shared/CasinoGames'
import Winners from './shared/Winners'
import Lateset from './shared/Lateset'

import 'react-alice-carousel/lib/alice-carousel.css'

const Analytics = () => {
    const dispatch = useDispatch()
    // const gameLoaded = true
    const gameReducer = useSelector(({ game }) => game)
    const [gameLoaded, setGameLoaded] = useState(false)
    const [curTab, setCurTab] = useState(0)

    useEffect(() => {
        setGameLoaded(true)
    }, [])
    const handleTabChange = (index) => {
        setCurTab(index)
    }
    return (
        <Fragment>
            <GameCarousel gameLoaded={gameLoaded} />
            <div className="analytics m-sm-30 mt-6">
                <GameTab list={gameReducer.data} onChange={handleTabChange} />
                {/* <GameBlogs /> */}
                {curTab === 0 && (
                    <OriginalGames list={gameReducer.data} index={curTab} />
                )}
                {curTab === 1 && (
                    <SlotGames list={gameReducer.data} index={curTab} />
                )}
                {curTab === 2 && (
                    <CasinoGames list={gameReducer.data} index={curTab} />
                )}
                <Winners />
                <Lateset />
            </div>
        </Fragment>
    )
}

export default Analytics
