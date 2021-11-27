import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Box,
    Grid,
    Card,
    Icon,
    IconButton,
    Fab,
    CardContent,
    CardMedia,
    Typography,
    TableCell,
    TableBody,
    Avatar,
    Snackbar,
    TextField,
} from '@material-ui/core'

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
    BonusCard,
    ConfirmationDialog,
    MatxSnackbar,
    SimpleCard,
    GeneralDialog,
    DepositCard,
} from 'app/components'
import './promo.css'

const List = () => {
    const theme = useTheme()
    const [showDialog, setShowDialog] = useState({
        bonus: false,
        deposit: false,
        shitCode: false,
        taskHub: false,
        luckySpin: false,
        rakeBackBonus: false,
        rechargeBonus: false,
    })
    const [depositPresent, setDepositPresent] = useState(0)
    return (
        <div className="m-sm-30">
            <Grid container spacing={3} className="mb-6">
                <Grid item xs={12} md={12}>
                    <Card
                        elevation={3}
                        className="p-8 text-white flex"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 92% -19%, rgb(179, 70, 34), rgb(181, 62, 22) 17%, rgb(196, 73, 33) 200%)',
                        }}
                    >
                        <Grid
                            item
                            xs={6}
                            md={4}
                            onClick={() => setShowDialog({ bonus: true })}
                            className="cursor-pointer"
                        >
                            <h2 className="flex-grow">GREAT BONUS FOR</h2>
                            <h2 className="flex-grow text-dark-yellow">
                                EVERY DEPOSIT
                            </h2>
                            <h2
                                className="flex-grow pt-4 pb-4"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(to right, rgb(221, 83, 39), rgba(206, 85, 60, 0) 83%)',
                                    padding: '0px 2rem',
                                    marginLeft: '-2rem',
                                }}
                            >
                                BCD UNLOCK SPEED +5%
                            </h2>
                            <h4 className="flex-grow pt-4">
                                Available for all players
                            </h4>
                            <h3 className="flex-grow">Before 2/17/2022</h3>
                            <p className="flex items-center pt-8 m-0">
                                Details
                                <Icon className="text-green">
                                    chevron_right
                                </Icon>
                            </p>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <div className="customCard grid">
                                <BonusCard
                                    active={true}
                                    arrow={true}
                                    disabled={false}
                                    onDepositDialog={() =>
                                        setShowDialog({ deposit: true })
                                    }
                                />
                                <BonusCard
                                    active={false}
                                    arrow={true}
                                    disabled={true}
                                />
                                <BonusCard
                                    active={false}
                                    arrow={true}
                                    disabled={true}
                                />
                                <BonusCard
                                    active={false}
                                    arrow={false}
                                    disabled={true}
                                />
                            </div>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <section className="hero-section">
                        <div className="card-grid">
                            <a
                                className="card cursor-pointer"
                                onClick={() =>
                                    setShowDialog({ shitCode: true })
                                }
                            >
                                <div
                                    className="card__background"
                                    style={{
                                        backgroundImage:
                                            'url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
                                    }}
                                ></div>
                                <div className="card__content">
                                    <p className="card__category flex items-center">
                                        Details
                                        <Icon>chevron_right</Icon>
                                    </p>
                                    <h3 className="card__heading">SHITCODE</h3>
                                    Redeem shitcodes to unlock crypto rewards
                                </div>
                            </a>
                            <a
                                className="card cursor-pointer"
                                onClick={() => setShowDialog({ taskHub: true })}
                            >
                                <div
                                    className="card__background"
                                    style={{
                                        backgroundImage:
                                            'url(https://static.bc.game/static/media/task.aecb4ea3.png)',
                                    }}
                                ></div>
                                <div className="card__content">
                                    <p className="card__category flex items-center">
                                        Details
                                        <Icon>chevron_right</Icon>
                                    </p>
                                    <h3 className="card__heading">TASK HUB</h3>
                                    Keep completing tasks and earning more
                                    rewards.
                                </div>
                            </a>
                            <a
                                className="card cursor-pointer"
                                onClick={() =>
                                    setShowDialog({ luckySpin: true })
                                }
                            >
                                <div
                                    className="card__background"
                                    style={{
                                        backgroundImage:
                                            'url(https://static.bc.game/static/media/luck_spin.d96226db.png)',
                                    }}
                                ></div>
                                <div className="card__content">
                                    <p className="card__category flex items-center">
                                        Details
                                        <Icon>chevron_right</Icon>
                                    </p>
                                    <h3 className="card__heading">
                                        LUCKY SPIN BONUS SPIN
                                    </h3>
                                </div>
                            </a>
                            <a
                                className="card cursor-pointer"
                                onClick={() =>
                                    setShowDialog({ rakeBackBonus: true })
                                }
                            >
                                <div
                                    className="card__background"
                                    style={{
                                        backgroundImage:
                                            'url(https://static.bc.game/static/media/rakeback.8460dbbc.png)',
                                    }}
                                ></div>
                                <div className="card__content">
                                    <p className="card__category flex items-center">
                                        Details
                                        <Icon>chevron_right</Icon>
                                    </p>
                                    <h3 className="card__heading">
                                        RAKEBACK BONUS
                                    </h3>
                                    Winning or Losing, Your Rakeback is Waiting!
                                </div>
                            </a>
                            <a
                                className="card cursor-pointer"
                                onClick={() =>
                                    setShowDialog({ rechargeBonus: true })
                                }
                            >
                                <div
                                    className="card__background"
                                    style={{
                                        backgroundImage:
                                            'url(https://static.bc.game/static/media/recharge.fc616d35.png)',
                                    }}
                                ></div>
                                <div className="card__content">
                                    <p className="card__category flex items-center">
                                        Details
                                        <Icon>chevron_right</Icon>
                                    </p>
                                    <h3 className="card__heading">
                                        RECHARGE BONUS
                                    </h3>
                                    Enjoy a steady stream of recharge.
                                </div>
                            </a>
                        </div>
                    </section>
                </Grid>
            </Grid>
            <GeneralDialog
                open={showDialog.bonus}
                onDialogClose={() =>
                    setShowDialog({ ...showDialog, bonus: false })
                }
                title="Deposit Bonus Rules"
            >
                <p>
                    All players will get opportunities to receive four deposit
                    bonus during this event.
                </p>
                <p className="pb-4">
                    You will get an amazing bonus in BCD if you deposit the
                    target amount or more. Wager to receive BCD and it will be
                    credited to your account balance. Let's join in!
                </p>
                <div className="py-4">
                    <p className="text-dark-yellow">
                        1st Deposit
                        <br />
                        UP TO 180% BONUS
                    </p>
                    <p>
                        Make your first deposit and we'll match it with a bonus
                        up to 180%.
                    </p>
                    <img
                        className="w-full"
                        alt="deposit"
                        src="https://static.bc.game/static/media/1st.f046f156.png"
                    />
                </div>
                <div className="py-4">
                    <p className="text-dark-yellow">
                        2nd Deposit
                        <br />
                        UP TO 180% BONUS
                    </p>
                    <p>
                        On your second deposit at BC.Game, a 180% bonus will be
                        instantly credited to you.
                    </p>
                    <img
                        className="w-full"
                        alt="deposit"
                        src="https://static.bc.game/static/media/2nd.d50fa234.png"
                    />
                </div>
                <div className="py-4">
                    <p className="text-dark-yellow">
                        3rd Deposit
                        <br />
                        UP TO 180% BONUS
                    </p>
                    <p>
                        Your third deposit will be rewarded with an instantly
                        credited 180% BONUS.{' '}
                    </p>
                    <img
                        className="w-full"
                        alt="deposit"
                        src="https://static.bc.game/static/media/3rd.ebed3780.png"
                    />
                </div>
                <div className="py-4">
                    <p className="text-dark-yellow">
                        4th Deposit
                        <br />
                        UP TO 240% BONUS
                    </p>
                    <p>Enjoy surprisingly 240% bonus on your fourth deposit.</p>
                    <img
                        className="w-full"
                        alt="deposit"
                        src="https://static.bc.game/static/media/4th.f7dbb7c4.png"
                    />
                </div>
                <button className="button-normal deposit-btn">
                    <div className="button-inner">Deposit now</div>
                </button>
            </GeneralDialog>
            <GeneralDialog
                open={showDialog.deposit}
                onDialogClose={() =>
                    setShowDialog({ ...showDialog, deposit: false })
                }
                title="First Deposit Bonus"
            >
                <div
                    className="sc-gNDVjn hcHDAB deposit-top index-0"
                    style={{
                        backgroundImage:
                            'url("https://static.bc.game/static/media/deposit01.f89751a2.png")',
                        padding: '1.875rem 1.875rem 1.875rem 10.625rem',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left center',
                        backgroundSize: 'contain',
                    }}
                >
                    <div className="title ttu">
                        <div className="normal">1st Deposit Bonus</div>
                        <div className="large">
                            Up to<span className="theme"> 180% </span>BONUS
                        </div>
                    </div>
                    <div className="desc">
                        We Provide 3 Level First Deposit Bonus. You can choose
                        one according to your needs
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginTop: '0.9375rem',
                        padding: '0px 1rem',
                    }}
                >
                    <DepositCard
                        active={true}
                        backImg="radial-gradient(circle at 50% 50%, rgb(246, 199, 34), rgb(255, 131, 43) 67%)"
                        bottomBack="linear-gradient(rgb(23, 24, 27) 74%, rgb(236, 168, 50) 131%)"
                        p1Color="rgb(0, 0, 0)"
                        p2Color="rgb(0, 0, 0)"
                        p3Color="rgb(0, 0, 0)"
                        p4Color="rgb(0, 0, 0)"
                        onHover={(hover) => setDepositPresent(0)}
                    />
                    <DepositCard
                        active={false}
                        backImg="radial-gradient(circle at 50% 50%, rgb(255, 162, 43), rgb(237, 99, 0) 67%)"
                        bottomBack="linear-gradient(rgb(23, 24, 27) 74%, rgb(236, 168, 50) 131%)"
                        p1Color="rgb(0, 0, 0)"
                        p2Color="rgb(0, 0, 0)"
                        p3Color="rgb(0, 0, 0)"
                        p4Color="rgb(0, 0, 0)"
                        onHover={(hover) =>
                            !hover ? setDepositPresent(0) : setDepositPresent(1)
                        }
                    />
                    <DepositCard
                        active={false}
                        backImg="radial-gradient(circle at 50% 50%, rgb(192, 55, 255), rgb(151, 1, 221) 67%)"
                        bottomBack="linear-gradient(rgb(23, 24, 27) 74%, rgb(236, 168, 50) 131%)"
                        p1Color="rgb(255, 255, 255)"
                        p2Color="rgb(255, 208, 5)"
                        p3Color="rgb(255, 208, 5)"
                        p4Color="rgb(255, 255, 255)"
                        onHover={(hover) =>
                            !hover ? setDepositPresent(0) : setDepositPresent(2)
                        }
                    />
                </div>
                <div className="depositPercent">
                    <div className="item full-item">
                        <span></span>
                    </div>
                    <div className="item full-item">
                        <span></span>
                    </div>
                    <div className="item full-item">
                        <span></span>
                    </div>
                    <div className="item full-item">
                        <span></span>
                    </div>
                    <div
                        className={clsx(
                            'item',
                            depositPresent > 0 ? 'full-item' : null
                        )}
                    >
                        <span></span>
                    </div>
                </div>
                <div className="depositPercentNum">
                    <span
                        className="num"
                        style={{ left: depositPresent === 0 ? '80%' : '100%' }}
                    >
                        {depositPresent === 0
                            ? '+80%'
                            : depositPresent === 1
                            ? '+100%'
                            : '+180%'}
                    </span>
                </div>
            </GeneralDialog>
            <GeneralDialog
                open={showDialog.shitCode}
                onDialogClose={() =>
                    setShowDialog({ ...showDialog, shitCode: false })
                }
                title="Shit Code"
            >
                <div className="pb-4">
                    <TextField
                        label="Copy your Shitcode here"
                        name="name"
                        type="text"
                        // onChange={handleChange}
                        // value={state.name}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        fullWidth
                        variant="outlined"
                        autoFocus
                    />
                </div>
                <p className="pb-4">
                    Redeem your shitcode here. Shitcode are bonus codes that
                    will add a gift to your balance at BC.Game. Shitcode can be
                    found in many places on the web. Here are a few places you
                    might discover one:
                </p>
                <ul className="py-4">
                    <li>Special announcements</li>
                    <li>Posts in the BC.Game forum</li>
                    <li>In the player’s chat room onsite</li>
                    <li>Published with campaigns</li>
                    <li>Social Media Pages and Threads</li>
                    <li>
                        Custom links created by and for our affiliate members
                    </li>
                    <li>Written on bathroom walls at truck stops</li>
                </ul>
                <div className="py-4">
                    <p>🎁💩🎁💩🎁💩🎁💩</p>
                    <p>
                        Any player who attempts to use a code from multiple
                        accounts will be disqualified and banned from any and
                        all collection of winnings and bonuses.
                    </p>
                </div>
                <button className="button-normal deposit-btn">
                    <div className="button-inner">Redeem</div>
                </button>
            </GeneralDialog>
            <GeneralDialog
                open={showDialog.taskHub}
                onDialogClose={() =>
                    setShowDialog({ ...showDialog, taskHub: false })
                }
                title="Task Hub"
            >
                <p className="pb-4">TaskHub Content</p>
                <button className="button-normal deposit-btn">
                    <div className="button-inner">Task</div>
                </button>
            </GeneralDialog>
            <GeneralDialog
                open={showDialog.luckySpin}
                onDialogClose={() =>
                    setShowDialog({ ...showDialog, luckySpin: false })
                }
                title="LuckySpin"
            >
                <p className="pb-4">LuckySpin Content</p>
                <button className="button-normal deposit-btn">
                    <div className="button-inner">LuckySpin</div>
                </button>
            </GeneralDialog>
            <GeneralDialog
                open={showDialog.rakeBackBonus}
                onDialogClose={() =>
                    setShowDialog({ ...showDialog, rakeBackBonus: false })
                }
                title="RakeBack Bonus"
            >
                <p className="pb-4">RakeBack Bonus Content</p>
                <button className="button-normal deposit-btn">
                    <div className="button-inner">RakeBack</div>
                </button>
            </GeneralDialog>
            <GeneralDialog
                open={showDialog.rechargeBonus}
                onDialogClose={() =>
                    setShowDialog({ ...showDialog, rechargeBonus: false })
                }
                title="Recharge Bonus"
            >
                <p className="pb-4">Recharge Bonus Content</p>
                <button className="button-normal deposit-btn">
                    <div className="button-inner">Recharge</div>
                </button>
            </GeneralDialog>
        </div>
    )
}

export default List
