import React, {useState} from 'react'
import List from './List'
import { SimpleCard } from 'app/components'
import { useDispatch, useSelector } from 'react-redux'

function Recent(props) {
    const gameReducer = useSelector(({ game }) => game)
    const [curTab, setCurTab] = useState(0)

    const handleTabChange = (index) => {
        setCurTab(index)
    }
    return (
        <div className="m-sm-30">
            <SimpleCard title="Recent Play">
                <List list={gameReducer.data} index={curTab} />
            </SimpleCard>
        </div>
    )
}

export default Recent
