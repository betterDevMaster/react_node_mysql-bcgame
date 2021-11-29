import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GameCarousel from './shared/GameCarousel'
import GameBlogs from './shared/GameBlogs'
import GameTab from './shared/GameTab'
import List from '../game/List'
import Winners from './shared/Winners'
import Lateset from './shared/Lateset'

import 'react-alice-carousel/lib/alice-carousel.css'

const Analytics = () => {
    const dispatch = useDispatch()
    // const gameLoaded = true
    const gameReducer = useSelector(({ game }) => game)
    const [curTab, setCurTab] = useState(0)

    const handleTabChange = (index) => {
        setCurTab(index)
    }
    return (
        <div className="analytics m-sm-30 mt-6">
            {/* <Lateset /> */}
            <GameCarousel />
            <GameTab list={gameReducer.data} onChange={handleTabChange} />
            {/* <GameBlogs /> */}
            <List list={gameReducer.data} index={curTab} />
            <Winners />
        </div>
    )
}

export default Analytics
