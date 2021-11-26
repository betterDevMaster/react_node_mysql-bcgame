import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Fab,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Snackbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
    BonusCard,
    ConfirmationDialog,
    MatxSnackbar,
    SimpleCard,
    GeneralDialog,
    DepositCard,
} from 'app/components'

const List = () => {
    const [showDialog, setShowDialog] = useState({
        bonus: false,
        deposit: false,
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
                            xs={12}
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
                        <Grid item xs={12} md={8}>
                            <div className="customCard flex justify-end">
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
                <Grid item xs={12} md={6}>
                    <Card elevation={3} className="p-4">
                        <div className="flex items-center">
                            <Fab
                                size="medium"
                                className="bg-light-green circle-44 box-shadow-none"
                            >
                                <Icon className="text-green">trending_up</Icon>
                            </Fab>
                            <h5 className="font-medium text-green m-0 ml-3">
                                Active Users
                            </h5>
                        </div>
                        <div className="pt-4 flex items-center">
                            <h2 className="m-0 text-muted flex-grow">10.8k</h2>
                            <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-green text-white">
                                <Icon className="text-14">expand_less</Icon>
                            </div>
                            <span className="text-13 text-green ml-1">
                                (+21%)
                            </span>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3} className="p-4">
                        <div className="flex items-center">
                            <Fab
                                size="medium"
                                className="bg-light-error circle-44 box-shadow-none overflow-hidden"
                            >
                                <Icon className="text-error">star_outline</Icon>
                            </Fab>
                            <h5 className="font-medium text-error m-0 ml-3">
                                Transactions
                            </h5>
                        </div>
                        <div className="pt-4 flex items-center">
                            <h2 className="m-0 text-muted flex-grow">$2.8M</h2>
                            <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-error text-white">
                                <Icon className="text-14">expand_less</Icon>
                            </div>
                            <span className="text-13 text-error ml-1">
                                (+21%)
                            </span>
                        </div>
                    </Card>
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
        </div>
    )
}

export default List
