import React, { useState } from 'react'
import clsx from 'clsx'

const DepositCard = ({
    active,
    onHover, 
    backImg,
    bottomBack,
    p1Color,
    p2Color,
    p3Color,
    p4Color,
}) => {
    return (
        <div
            className={clsx('depositCard', active ? 'active' : null)}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            <div className="deposit-bg">
                <div className="main-bg">
                    <div className="top" style={{ backgroundImage: backImg }}>
                        <img
                            className="sf-img"
                            alt="sf"
                            src="data:image/png;base64,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"
                        />
                        <div className="top-info">
                            <p className="p_1" style={{ color: p1Color }}>
                                Deposit
                            </p>
                            <p className="p_2" style={{ color: p2Color }}>
                                30 USD
                            </p>
                            <div className="add"></div>
                            <p className="p_3" style={{ color: p3Color }}>
                                80%
                            </p>
                            <p className="p_4" style={{ color: p4Color }}>
                                Bonus
                            </p>
                        </div>
                    </div>
                    <div
                        className="bottom-gradient"
                        style={{ backgroundImage: bottomBack }}
                    ></div>
                    <div className="bottom">
                        <p>Deposit $30</p>
                        <p>
                            + Extra <span>$24</span> Bonus
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositCard
