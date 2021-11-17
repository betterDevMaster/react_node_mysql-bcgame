import React from 'react'
import { ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Toolbar, AppBar } from '@material-ui/core'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    footer: {
        minHeight: 'var(--topbar-height)',
        '@media (max-width: 499px)': {
            display: 'table',
            width: '100%',
            minHeight: 'auto',
            padding: '1rem 0',
            '& .container': {
                flexDirection: 'column !important',
                '& a': {
                    margin: '0 0 16px !important',
                },
            },
        },
    },
    appbar: {
        zIndex: 96,
    },
}))

const Footer = () => {
    const classes = useStyles()
    const theme = useTheme()
    const { settings } = useSettings()

    const footerTheme = settings.themes[settings.footer.theme] || theme
    const currenciesLength = Array.from({ length: 28 })

    const currencies = currenciesLength.map((item, index) => {
        return (
            <div className="currency-item">
                <img src={'/assets/images/coins/' + (index + 1) + '.svg'} />
            </div>
        )
    })

    return (
        <div className="footer">
            <div className="footer-wrap">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAABKCAMAAADnnp3EAAACClBMVEUAAADm9tv///////////////////////////////////////////////////////////////////+FyRv///////+ZzjL///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Cxxn///////////+P1yv///////////////////////////+Q1yeKzSGMzCX///+HzB2N0yX///+M0iH///+T2ymP1SR9wRf///+Fyh2ExBr///////////////////+K0R////+DyBn///+IzR7///////+AxRh+whWP1yR/whb///+Q2CT///9+whb///////////+GzBz///+AxBd/wxb///+Hyxx+wxaL0SB9wRWa5S6P1iT///+O1iKAxBeS2SeW3yuY4S6O1SWI0B+GzR18vxSW3SmDyRyc5i+Q1ySIzh6IzR6M0yOX4CuGzB6Z4yyb5i+a4y3///+Q2CSN1CGGyxyO1iOEyhqDyBl+whV8wBOIzx59wRSR2SWBxhh/xBaO1SKCxxiL0iCHzRyS2yaFyxt7vxKK0B+AxReFyhuW4CmU3SeT2yeV3imX4SqAxBeK0R+Z4yyY4iua5S19whVvTVRDAAAAi3RSTlMAAXEhAz0kBt6yoxWe+/3BWT7vPYlGBXfQKfirE/SDXxsN6eViOjLAuqaRVjgKoI17LQjs4cmXbV1PS0QKzbevioZpUioYEdRtHhHkml1MOzQwIhfx18S9uaiclIN/bEr27+7TzbStZUAm1LaFc0ji2sTDva6nl5KIbzs29vTQvLSdenNl+PLw29JlA8y5HAAAC/NJREFUeNrs2E9qg0AUx/HxEjlNlzY0FL1DIDcwlGgXIV2UtljcDZQwq/kjaA/Z9/NloLtop4Uu3he3bj6856iqOVWv1anOV0pK7nNqGIY34UxuogTm+LJW0i9gwnIYn2+UlBQkYUn1VaaklHjFB6KkciWlBErUo6OS0jAjpe2tlRM9qRGaoISl3SgpIYwlXZAMNjRKSoggEVuGUsWyTVkXj7L2i8JQgpIkg3NFpMx32mjq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"
                    class="logo"
                />
                <div className="flex justify-between">
                    <div class="footer__desc">
                        BC.GAME is based on the community and aim to have the
                        best player experience on crypto casino.We are convinced
                        that the blockchain will change the online casino
                        industry.
                        <br />
                        Don’t trust. Verify it!
                        <br />
                        Play Fun and Earn Crypto!
                    </div>
                    <div class="v-line"></div>
                    <div class="footer__entries">
                        <a
                            target="_blank"
                            href="https://angel.co/company/bc-game-2"
                        >
                            JOIN US
                        </a>
                        <a href="/help/provably-fair">HELP CENTER</a>
                        <a href="/help/agreement">User Agreement</a>
                        <a href="/help/privacy">Privacy Policy</a>
                        <a href="/app_download/android">APP</a>
                        <a
                            href="https://forum.bc.game/?haslogin=1"
                            target="_blank"
                        >
                            FORUM
                        </a>
                        <a
                            target="_blank"
                            href="https://www.begambleaware.org/"
                        >
                            Gamble Aware
                        </a>
                        <a
                            target="_blank"
                            href="https://blog.bc.game/"
                            class="border-none"
                        >
                            News
                        </a>
                    </div>
                    <div className="contact-us">
                        <div class="footer__contact">
                            <div class="title ttu">Contact Us</div>
                            <div class="flex-wrap">
                                <div class="flex-group">
                                    <div class="item">
                                        <span class="name">Help:</span>
                                        <a
                                            href="https://help.bc.game"
                                            target="_blank"
                                        >
                                            Help.bc.game
                                        </a>
                                    </div>
                                </div>
                                <div class="flex-group-right">
                                    <div class="item flex flex-right">
                                        <span class="name">Business:</span>
                                        <a href="mailto:business@bc.game">
                                            Business@bc.game
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__currencies">
                            <div class="title ttu">Accepted currencies</div>
                            <div className="currency-list">{currencies}</div>
                        </div>
                    </div>
                </div>
                <div className="footer_license">
                    <div class="licenes-by">
                        <a
                            href="https://gateway.pinata.cloud/ipfs/QmZbpAZ4c9izhEYKmJ4gqkx2Kq4fs88h3hGF1kcMXPHWRg/license.jpg"
                            target="_blank"
                        >
                            <img src="data:image/png;base64,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" />
                        </a>
                        <div class="licenes-desc">
                            BC.GAME is operated by BlockDance B.V. (Commercial
                            register of Curaçao no.158182, Emancipatie Boulevard
                            Dominico F. "Don" Martina 31, Curaçao) under a
                            sublicense CIL pursuant to Master gaming License
                            #5536/JAZ.
                        </div>
                    </div>
                    <div className="footer__cert">
                        <a
                            href="https://cryptogambling.org"
                            class="img-cgf"
                            target="_blank"
                        >
                            <img src={'/assets/images/other/1.svg'} />
                        </a>
                        <a
                            href="http://www.itechlabs.com/certificates/BCGame/RNG_Certificate_UK_BCGame_ITL2002455_12Oct20.pdf"
                            class="img-cgf"
                            target="_blank"
                        >
                            <img src={'/assets/images/other/2.svg'} />
                        </a>
                        <a>
                            <img src={'/assets/images/other/3.svg'} />
                        </a>
                        <a>
                            <img src={'/assets/images/other/4.svg'} />
                        </a>
                    </div>
                </div>
                <div class="footer__bottom">
                    <div class="btc-price">1BTC=$60231.09</div>
                    <div class="footer__copyright">
                        <div class="ttu">©2021 bc.game ALL RIGHTS RESERVED</div>
                        <div class="to-top">
                            <span>Top</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
