import React, { useState } from 'react'
import clsx from 'clsx'

const BonusCard = ({ active, arrow, disabled, onDepositDialog }) => {
    const [hover, setHover] = useState(false)
    return (
        <div
            className={clsx('item', hover || active ? 'active' : null)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="stage">
                <div className="mask"></div>
                <div className="front"></div>
                <div className="text ttu bold">
                    <div className="small">Up to</div>
                    <div className="large">180% BONUS</div>
                </div>
                <div className="effect">
                    <div className="effect-item"></div>
                    <div className="effect-item"></div>
                </div>
                {arrow && (
                    <div className="stage__arrow flex justify-center items-center">
                        <svg
                            width="32"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                        >
                            <path d="M21.908.814l.128.112 7.878 7.563a4.662 4.662 0 01.172 6.615l-.172.174-7.878 7.563a2.06 2.06 0 01-2.829 0 1.864 1.864 0 01-.117-2.593l.117-.122 7.879-7.564a.932.932 0 00.083-1.267l-.083-.09-7.879-7.564a1.866 1.866 0 010-2.715 2.062 2.062 0 012.701-.112zm-9 0l.128.112 7.878 7.563a4.662 4.662 0 01.172 6.615l-.172.174-7.878 7.563a2.06 2.06 0 01-2.829 0 1.864 1.864 0 01-.117-2.593l.117-.122 7.879-7.564a.932.932 0 00.083-1.267l-.083-.09-7.879-7.564a1.866 1.866 0 010-2.715 2.062 2.062 0 012.701-.112zm-9 0l.128.112 7.878 7.563a4.662 4.662 0 01.172 6.615l-.172.174-7.878 7.563a2.06 2.06 0 01-2.829 0 1.864 1.864 0 01-.117-2.593l.117-.122 7.879-7.564a.932.932 0 00.083-1.267l-.083-.09L1.207 3.64a1.866 1.866 0 010-2.715A2.062 2.062 0 013.908.814z"></path>
                        </svg>
                    </div>
                )}
            </div>
            <button className="button button-normal" disabled={disabled} onClick={() => onDepositDialog()}>
                <div className="button-inner">Deposit Now</div>
            </button>
        </div>
    )
}

export default BonusCard
