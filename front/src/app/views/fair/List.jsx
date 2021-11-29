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
    useMediaQuery,
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

const List = () => {
    const theme = useTheme()
    const isXSMobile = useMediaQuery(theme.breakpoints.down('xs'))
    const helpList = [
        { icon: 'filter_1', text: 'Provabley fair' },
        { icon: 'filter_2', text: 'User Agreement' },
        { icon: 'filter_3', text: 'Coin Accuracy Limit' },
        { icon: 'filter_4', text: 'Support' },
        { icon: 'filter_5', text: 'Fee' },
        { icon: 'filter_6', text: 'Google Authenticator' },
        { icon: 'filter_7', text: 'FAQ' },
        { icon: 'filter_8', text: 'Cryptocurrency' },
        // { icon: 'filter_9', text: 'Privacy Policy' },
        // { icon: 'filter_1', text: 'Registration and Login' },
        // { icon: 'filter_2', text: 'BCSwap Policy' },
        // { icon: 'filter_3', text: 'Terms of Service' },
        // { icon: 'filter_4', text: 'Providers' },
    ]
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <SimpleCard title="Help Center">
            <section class="helpContainer">
                <div class="tabs-container">
                    <div class="tabs-block">
                        <div id="tabs-section" class="tabs">
                            <ul class="tab-head">
                                {helpList.map((r, i) => (
                                    <li key={i}>
                                        <a
                                            className={clsx(
                                                'tab-link',
                                                activeIndex === i
                                                    ? 'active'
                                                    : null
                                            )}
                                            onClick={() => setActiveIndex(i)}
                                        >
                                            <span class="material-icons tab-icon">
                                                {r.icon}
                                            </span>
                                            <span class="tab-label">
                                                {r.text}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {activeIndex === 0 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 0
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>Game</h2>
                                    <h2>Fairness</h2>
                                    <p>How are results calculated?</p>
                                    <p>
                                        To get the results. First we calculate
                                        the hash value of the combination with
                                        HMAC_SHA256. This gives us a
                                        64-character hexadecimal string: hash =
                                        HMAC_SHA256 (clientSeed:nonce,
                                        serverSeed). Finally, we take 8
                                        characters of the hash and convert it to
                                        an int32 value. Then we divide the
                                        converted value by 0x100000000, multiply
                                        it by 10001 and divide it by 100 so that
                                        the resulting number conforms to the
                                        constraints of the dice range. Note: A
                                        new seed must be set to verify the
                                        previous data (the server seed is
                                        encrypted). Did you really need to know
                                        this? Probably not. It’s there for those
                                        who expect transparency and precision in
                                        a provably fair game of chance. We put
                                        our "cards on the table." Good luck!
                                    </p>
                                </section>
                            )}
                            {activeIndex === 1 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 1
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>Definitions</h2>
                                    <p>
                                        BC.GAME is referred to as 'we' or 'us'
                                        The Player is referred to as "you" or
                                        'the Player' 'The Website' means BC.GAME
                                        through desktop, mobile or other
                                        platforms utilised by the Player
                                    </p>
                                    <h2>1. General</h2>
                                    <p>
                                        1.1. These User Agreement apply to the
                                        usage of games accessible through
                                        www.bc.game. 1.2. These User Agreement
                                        come into force as soon as you complete
                                        the registration process, which includes
                                        checking the box accepting these User
                                        Agreement and successfully creating an
                                        account. By using any part of the
                                        Website following account creation, you
                                        agree to these User Agreement. 1.3. You
                                        must read these User Agreement carefully
                                        in their entirety before creating an
                                        account. If you do not agree with any
                                        provision of these User Agreement, you
                                        must not create an account or continue
                                        to use the Website. 1.4. We are entitled
                                        to make amendments to these User
                                        Agreement at any time and without
                                        advanced notice. If we make such
                                        amendments, we may take appropriate
                                        steps to bring such changes to your
                                        attention (such as by email or placing a
                                        notice on a prominent position on the
                                        Website, together with the amended User
                                        Agreement) but it shall be your sole
                                        responsibility to check for any
                                        amendments, updates and/or
                                        modifications. Your continued use of
                                        BC.GAME services and Website after any
                                        such amendment to the User Agreement
                                        will be deemed as your acceptance and
                                        agreement to be bound by such
                                        amendments, updates and/or
                                        modifications. 1.5. These User Agreement
                                        may be published in several languages
                                        for informational purposes and ease of
                                        access by players. The English version
                                        is the only legal basis of the
                                        relationship between you and us and in
                                        the case of any discrepancy with respect
                                        to a translation of any kind, the
                                        English version of these User Agreement
                                        shall prevail.
                                    </p>
                                    <h2>2.2. Binding Declarations</h2>
                                    <p>
                                        2.1. By agreeing to be bound by these
                                        User Agreement, you also agree to be
                                        bound by the BC.GAME Rules and Privacy
                                        Policy that are hereby incorporated by
                                        reference into these User Agreement. In
                                        the event of any inconsistency, these
                                        User Agreement will prevail. You hereby
                                        represent and warrant that: 2.1.1. You
                                        are over (a) 18 or (b) such other legal
                                        age or age of majority as determined by
                                        any laws which are applicable to you,
                                        whichever age is greater; 2.1.2. You
                                        have full capacity to enter into a
                                        legally binding agreement with us and
                                        you are not restricted by any form of
                                        limited legal capacity; 2.1.3. All
                                        information that you provide to us
                                        during the term of validity of this
                                        agreement is true, complete, correct,
                                        and that you shall immediately notify us
                                        of any change of such information;
                                        2.1.4. You are solely responsible for
                                        reporting and accounting for any taxes
                                        applicable to you under relevant laws
                                        for any winnings that you receive from
                                        us; 2.1.5. You understand that by using
                                        our services you take the risk of losing
                                        money deposited into your Member Account
                                        and accept that you are fully and solely
                                        responsible for any such loss; 2.1.6.
                                        You are permitted in the jurisdiction in
                                        which you are located to use online
                                        casino services; 2.1.7. In relation to
                                        deposits and Withdraws of funds into and
                                        from your Member Account, you shall only
                                        use Ethereum that are valid and lawfully
                                        belong to you; 2.1.8. You understand
                                        that the value of Ethereum can change
                                        dramatically depending on the market
                                        value; 2.1.9. The computer software, the
                                        computer graphics, the Websites and the
                                        user interface that we make available to
                                        you is owned by BC.GAME or its
                                        associates and is protected by copyright
                                        laws. You may only use the software for
                                        your own personal, recreational uses in
                                        accordance with all rules, User
                                        Agreement we have established and in
                                        accordance with all applicable laws,
                                        rules and regulations; 2.1.10. You
                                        understand that Ethereum is not
                                        considered a legal currency or tender
                                        and as such on the Website they are
                                        treated as virtual funds with no
                                        intrinsic value. 2.1.11. You affirm that
                                        you are not an officer, director,
                                        employee, consultant or agent of BC.GAME
                                        or working for any company related to
                                        BC.GAME, or a relative or spouse of any
                                        of the foregoing; 2.1.12. You are not
                                        diagnosed or classified as a compulsive
                                        or problem gambler. We are not
                                        accountable if such problem gambling
                                        arises whilst using our services, but
                                        will endeavour to inform of relevant
                                        assistance available. We reserve the
                                        right to implement cool off periods if
                                        we believe such actions will be of
                                        benefit. 2.1.13. You accept and
                                        acknowledge that we reserve the right to
                                        detect and prevent the use of prohibited
                                        techniques, including but not limited to
                                        fraudulent transaction detection,
                                        automated registration and signup,
                                        gameplay and screen capture techniques.
                                        These steps may include, but are not
                                        limited to, examination of Players
                                        device properties, detection of
                                        geo-location and IP masking,
                                        transactions and blockchain analysis;
                                        2.1.14. You accept our right to
                                        terminate and/or change any games or
                                        events being offered on the Website, and
                                        to refuse and/or limit bets. 2.1.15. You
                                        accept that we have the right to
                                        ban/block multiple accounts and freely
                                        control the assets in such accounts.
                                        2.1.16. You are aware of possible errors
                                        or incompleteness in the software, you
                                        agree to refrain from taking advantage
                                        of them. Moreover, you agrees to report
                                        any error or incompleteness immediately
                                        to BC.GAME. Should you fail to fulfil
                                        the obligations stated in this clause,
                                        BC.GAME has a right to full compensation
                                        for all costs related to the error or
                                        incompleteness, including any costs
                                        incurred in association with the
                                        respective error/incompleteness and the
                                        failed notification by user. 2.1.17. You
                                        are aware of that BC.GAME have the right
                                        to carry out “KYC” (Know Your Customer)
                                        verification procedures. The access to
                                        your user account may be blocked or
                                        closed if we determine that you have
                                        supplied false or misleading
                                        information. 2.2. We reserves the right
                                        to declare a wager void partially or in
                                        full if BC.GAME, at its own discretion,
                                        would deem it obvious that any of the
                                        following circumstances have occurred:
                                        2.2.1. You, or people associated with
                                        you may directly or indirectly influence
                                        the outcome of an event, to obtain an
                                        unlawful advantage. 2.2.2. You and or
                                        people associated with you are directly
                                        or indirectly avoiding the rules of
                                        BC.GAME. 2.2.3. The result of an event
                                        has been directly or indirectly affected
                                        by criminal activity. 2.2.4. Wagers have
                                        been placed that would not have been
                                        accepted otherwise, but that were
                                        accepted during periods when the website
                                        have been affected by technical
                                        problems. 2.2.5. Due to an error, such
                                        as a mistake, vulnerabilities, technical
                                        error, force majeure or otherwise,
                                        wagers have been offered, placed and or
                                        accepted due to this error. 2.2.6. If a
                                        player's deposit fee is too low and is
                                        flagged by blockchain or similar site as
                                        “not enough fee to relay” BC.GAME
                                        reserve the right to confiscate the
                                        winnings if BC.GAME at their own
                                        discretion deem the transaction and
                                        behavior of the player to be fraudulent
                                        in nature.
                                    </p>
                                    <h2>3. Restricted Territories</h2>
                                    <p>
                                        3.1. Blacklisted Territories: China,
                                        Netherlands, Dutch Caribbean Islands,
                                        Curacao, France, United States and/or
                                        any other restricted by law country or
                                        state. Note that it is strictly
                                        forbidden to play on BC.GAME games in
                                        blacklisted countries mentioned
                                        above.your personal data for the purpose
                                        of executing their duties and providing
                                        you with the best possible assistance
                                        and service. You hereby consent to such
                                        disclosures.
                                    </p>
                                    <h2>4. General Betting Rules</h2>
                                    <p>
                                        4.1. A bet can only be placed by a
                                        registered account holder. 4.2. A bet
                                        can only be placed over the internet.
                                        4.3. You can only place a bet if you
                                        have sufficient Ethereum in your account
                                        with BC.GAME. 4.4. The bet, once
                                        concluded, will be governed by the
                                        version of the User Agreement valid and
                                        available on the Website at the time of
                                        the bet being accepted. 4.5. Any payout
                                        of a winning bet is credited to your
                                        account, consisting of the stake
                                        multiplied by the odds at which the bet
                                        was placed. 4.6. BC.GAME reserves the
                                        right to adjust a bet payout credited to
                                        a BC.GAME account if it is determined by
                                        BC.GAME in its sole discretion that such
                                        a payout has been credited due to an
                                        error. 4.7. A bet, which has been placed
                                        and accepted, cannot be amended,
                                        withdrawn or cancelled by you. 4.8. The
                                        list of all the bets, their status and
                                        details are available to you on the
                                        Website. 4.9. When you place a bet you
                                        acknowledge that you have read and
                                        understood in full all of these User
                                        Agreement regarding the bet as stated on
                                        the Website. 4.10. BC.GAME manages your
                                        account, calculates the available funds,
                                        the pending funds, the betting funds as
                                        well as the amount of winnings. Unless
                                        proven otherwise, these amounts are
                                        considered as final and are deemed to be
                                        accurate. 4.11. You are fully
                                        responsible for the bets placed. 4.12.
                                        Winnings will be paid into your account
                                        after the final result is confirmed.
                                    </p>
                                    <h2>5. Bonuses and Promotions</h2>
                                    <p>
                                        5.1. BC.GAME reserves the right to
                                        cancel any promotion, bonus or bonus
                                        program (including, but not limited to
                                        top-up rewards, invite friends to reward
                                        bonuses and loyalty programs) with
                                        immediate effect if we believe the bonus
                                        has been set up incorrectly or is being
                                        abused, and if said bonus has been paid
                                        out, we reserve the right to decline any
                                        Withdraw request and to deduct such
                                        amount from your account. Whether or not
                                        a bonus is deemed to be set up
                                        incorrectly or abused shall be
                                        determined solely by BC.GAME. 5.2. If
                                        you use a Deposit Bonus, no Withdraw of
                                        your original deposit will be accepted
                                        before you have reached the requirements
                                        stipulated under the User Agreement of
                                        the Deposit Bonus. 5.3. Where any term
                                        of the offer or promotion is breached or
                                        there is any evidence of a series of
                                        bets placed by a customer or group of
                                        customers, which due to a deposit bonus,
                                        enhanced payments, free bets, risk free
                                        bets or any other promotional offer
                                        results in guaranteed customer profits
                                        irrespective of the outcome, whether
                                        individually or as part of a group,
                                        BC.GAME reserves the right to reclaim
                                        the bonus element of such offers and in
                                        their absolute discretion either settle
                                        bets at the correct odds, void the free
                                        bet bonus and risk free bets or void any
                                        bet funded by the deposit bonus. In
                                        addition, BC.GAME reserves the right to
                                        levy an administration charge on the
                                        customer up to the value of the deposit
                                        bonus, free bet bonus, risk free bet or
                                        additional payment to cover
                                        administrative costs. We further reserve
                                        the right to ask any customer to provide
                                        sufficient documentation for us to be
                                        satisfied in our absolute discretion as
                                        to the customer's identity prior to us
                                        crediting any bonus, free bet, risk free
                                        bet or offer to their account. 5.4. All
                                        BC.GAME offers are intended for
                                        recreational players and BC.GAME may in
                                        its sole discretion limit the
                                        eligibility of customers to participate
                                        in all or part of any promotion. 5.5.
                                        BC.GAME reserves the right to amend,
                                        cancel, reclaim or refuse any promotion
                                        at its own discretion. 5.6. Bonuses can
                                        only be received once per
                                        person/account, family, household,
                                        address, e-mail address, IP addresses
                                        and environments where computers are
                                        shared (university, fraternity, school,
                                        public library, workplace, etc.). The
                                        Operator reserves the right to close
                                        your account and confiscate any existing
                                        funds if evidence of abuse/fraud is
                                        found. 5.7. You acknowledge and
                                        understand that separate User Agreement
                                        exist with respect to promotions,
                                        bonuses and special offers, and are in
                                        addition to these User Agreement. These
                                        User Agreement are set forth in the
                                        respective content page on this website,
                                        or have been made available to you
                                        personally, as the case may be. In the
                                        event of a conflict between the
                                        provisions of such promotions, bonuses
                                        and special offers, and the provisions
                                        of these User Agreement, the provisions
                                        of such promotions, bonuses and special
                                        offers will prevail. 5.8. We may insist
                                        that you bet a certain amount of your
                                        own deposit before you can bet with any
                                        free/bonus funds we credit to your
                                        account. 5.9. You accept that certain
                                        promotions may be subject to Withdraw
                                        restrictions and/or requirements which
                                        need to be met before funds credited
                                        under the promotion can be withdrawn.
                                        Such terms shall be duly published and
                                        made available as part of the promotion.
                                        If you opt to make a Withdraw before the
                                        applicable wagering requirements are
                                        fulfilled, we will deduct the whole
                                        bonus amount as well as any winnings
                                        connected with the use of the bonus
                                        amounts before approving any Withdraw.
                                    </p>
                                    <h2>6. Live Chat</h2>
                                    <p>
                                        6.1. As part of your use of the Website
                                        we may provide you with a live chat
                                        facility, which is moderated by us and
                                        subject to controls. We reserve the
                                        right to review the chat and to keep a
                                        record of all statements made on the
                                        facility. Your use of the chat facility
                                        should be for recreational and
                                        socialising purposes. 6.2. We have the
                                        right to remove the chat room
                                        functionality or immediately terminate
                                        your Member Account and refund your
                                        account balance if you: (a) make any
                                        statements that are sexually explicit or
                                        grossly offensive, including expressions
                                        of bigotry, racism, hatred or profanity;
                                        (b) make statements that are abusive,
                                        defamatory or harassing or insulting;
                                        (c) use the chat facility to advertise,
                                        promote or otherwise relate to any other
                                        online entities; (d) make statements
                                        about BC.GAME, or any other Internet
                                        site(s) connected to the Website that
                                        are untrue and/or malicious and/or
                                        damaging to BC.GAME; (e) user the chat
                                        facility to collude, engage in unlawful
                                        conduct or encourage conduct we deem
                                        seriously inappropriate. Any suspicious
                                        chats will be reported to the competent
                                        authority. 6.3. Live Chat is used as a
                                        form of communication between us and you
                                        and should not be copied or shared with
                                        any forums or third parties.
                                    </p>
                                    <h2>7. Limitation of Liability</h2>
                                    <p>
                                        7.1. You enter the Website and
                                        participate in the Games at your own
                                        risk. The Websites and the Games are
                                        provided without any warranty
                                        whatsoever, whether expressed or
                                        implied. 7.2. Without prejudice to the
                                        generality of the preceding provision,
                                        we, our directors, employees, partners,
                                        service providers. 7.3. Do not warrant
                                        that the software, Games and the
                                        Websites are fit for their purpose. 7.4.
                                        Do not warrant that the software, Games
                                        and the Websites are free from errors.
                                        7.5. Do not warrant that the software,
                                        Games and the Websites will be
                                        accessible without interruptions. 7.6.
                                        Shall not be liable for any loss, costs,
                                        expenses or damages, whether direct,
                                        indirect, special, consequential,
                                        incidental or otherwise, arising in
                                        relation to your use of the Websites or
                                        your participation in the Games. 7.7.
                                        You understand and acknowledge that, if
                                        there is a malfunction in a Game or its
                                        interoperability, any bets made during
                                        such a malfunction shall be void. Funds
                                        obtained from a malfunctioning Game
                                        shall be considered void, as well as any
                                        subsequent game rounds with said funds,
                                        regardless of what Games are played
                                        using such funds. 7.8. You hereby agree
                                        to fully indemnify and hold harmless us,
                                        our directors, employees, partners, and
                                        service providers for any cost, expense,
                                        loss, damages, claims and liabilities
                                        howsoever caused that may arise in
                                        relation to your use of the Website or
                                        participation in the Games. 7.9. To the
                                        extent permitted by law, our maximum
                                        liability arising out of or in
                                        connection with your use of the
                                        Websites, regardless of the cause of
                                        actions (whether in contract, tort,
                                        breach of warranty or otherwise), will
                                        not exceed €100.
                                    </p>
                                    <h2>
                                        8. Breaches, Penalties and Termination
                                    </h2>
                                    <p>
                                        8.1. If you breach any provision of
                                        these User Agreement or we have a
                                        reasonable ground to suspect that you
                                        have breached them, we reserve the right
                                        to not open, to suspend, or to close
                                        your Member Account, or withhold payment
                                        of your winnings and apply such funds to
                                        any damages due by you. 8.2. You
                                        acknowledge that BC.GAME shall be the
                                        final decision-maker of whether you have
                                        violated BC.GAME’s rules, terms or
                                        conditions in a manner that results in
                                        your suspension or permanent barring
                                        from participation in our site.
                                    </p>
                                </section>
                            )}
                            {activeIndex === 2 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 2
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>Coin accuracy limit</h2>
                                    <p>
                                        Due to the limitation of data storage
                                        accuracy, changes in the amount less
                                        than a certain amount will not take
                                        effect. The minimum accuracy of most
                                        coins is consistent with the currency
                                        accuracy of the blockchain. For example,
                                        the minimum unit of SATS is 1. The
                                        minimum data storage accuracy of each
                                        coin is shown in the following table:
                                    </p>
                                </section>
                            )}
                            {activeIndex === 3 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 3
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <p>
                                        You have a question? Can't find the
                                        answer on the website? Don't worry! you
                                        can contact our 24-hour online customer
                                        support any time, Our customer support
                                        team is happy to answer any of your
                                        questions.
                                    </p>
                                </section>
                            )}
                            {activeIndex === 4 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 4
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>Why do you need a Withdraw fee?</h2>
                                    <p>
                                        When we make a transaction, the
                                        information is broadcast to the network,
                                        and the miners collect and package the
                                        production blocks, and only after the
                                        block is produced, the transaction is
                                        recognized. Although the miners will get
                                        a fixed monetary reward after digging
                                        into the block, according to the rules,
                                        the reward will gradually be halved and
                                        become less and less, and eventually the
                                        miners may not be profitable. Therefore,
                                        transaction fees are needed to maintain
                                        the enthusiasm of miners for mining.
                                    </p>
                                    <h2>The role of the Withdraw fee</h2>
                                    <p>
                                        1. Encourage miners to mine 2. Prevent
                                        excessive small transactions from
                                        hitting the network. Due to the P2P
                                        network, the ability of transaction
                                        processing is limited. If everyone
                                        frequently conducts small transactions,
                                        the network will be congested, causing
                                        delays or even stagnation. So set a
                                        threshold, the amount of natural
                                        transactions will be reduced when there
                                        is a small transaction.
                                    </p>
                                    <h2>How much is the Withdraw fee?</h2>
                                    <p>
                                        Since the transaction is a two-way
                                        charge, it means that the sale of a
                                        digital currency requires at least a
                                        0.1% Withdraw fee to the platform.
                                    </p>
                                </section>
                            )}
                            {activeIndex === 5 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 5
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>Google Authenticator</h2>
                                    <p>
                                        Google authenticator could provide an
                                        additional layer of security protection
                                        for your account. It is a software token
                                        that implements a 2-step verification
                                        program. In order to use Google
                                        authenticator, you must have a mobile
                                        phone because it will be installed as a
                                        mobile application. You can also use
                                        Google authenticator when offline.
                                        Google authenticator uses an algorithm
                                        to calculate one-time passwords based on
                                        time. Simply put, once the application
                                        is started, Google authenticator will
                                        display a randomly generated 6-digit
                                        sequence of numbers, ie, a one-time
                                        password. If you have enabled 2FA in
                                        your account, then in addition to
                                        entering your usual password, you also
                                        need to enter the randomly generated
                                        one-time password. 2FA provides
                                        additional security protection because
                                        it makes sure that others cannot login
                                        to your account with your username and
                                        password alone. We highly values the
                                        security of the players, so we strongly
                                        recommend you to use Google
                                        authenticator. This small extra step
                                        could protect you against necessary
                                        headache and anxiety. If you have
                                        enabled Google authenticator, you will
                                        be prompted to complete 2FA every time
                                        you login or withdraw. Furthermore,
                                        please print out the QR code or write
                                        down the manual code that could recover
                                        your account. In case of mobile phone
                                        breakdown or loss, this will help you to
                                        a great extent. To know more about
                                        Google authenticator. Google
                                        authenticator
                                    </p>
                                </section>
                            )}
                            {activeIndex === 6 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 6
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>Start your game journey</h2>
                                    <p>
                                        Can I register on your website? You must
                                        be at least 18 years old or reach the
                                        age of majority under your jurisdiction.
                                        You must be permitted to play online
                                        games by the laws applicable to you. For
                                        more information, please read our terms
                                        and conditions. Games might be
                                        addictive, and players are advised to be
                                        self-control.
                                    </p>
                                    <h2>Account Information</h2>
                                    <h4>1. What if I forget my password?</h4>
                                    <p>
                                        If you forget your password, you could
                                        reset it within 15 seconds through our
                                        “Forget password” link. After applying
                                        for password reset, please follow the
                                        instructions in the email we send to you
                                        to reset your password.
                                    </p>
                                    <h4>
                                        2. I have lost my mobile phone. How do I
                                        reset my Google authenticator?
                                    </h4>
                                    <p>
                                        If you want to remove your Google
                                        authenticator 2FA, please contact us.
                                        After we receive your application, for
                                        the safety of your account, you are
                                        required to answer several security
                                        questions correctly in order to remove
                                        the 2FA.
                                    </p>
                                    <h4>
                                        3. Can I change my username or
                                        registered email address?
                                    </h4>
                                    <p>
                                        Sorry, but we are not able to update
                                        this information. If you insist on
                                        changing your username and/or registered
                                        email, we suggest you close the current
                                        account and register a new one.
                                    </p>
                                    <h4>4. How do I become a VIP?</h4>
                                    <p>
                                        The exclusive VIP club is by invitation
                                        only. After you embark on your journey
                                        of the game, you will be notified of
                                        your VIP status by email soon.
                                    </p>
                                    <h2>My wallet</h2>
                                    <p>
                                        『My wallet』 is part of the player
                                        account. You can view the balance of all
                                        cooperative cryptocurrencies, deposit
                                        and withdraw and query transaction
                                        records. Furthermore, you can also get
                                        access to BC Swap without review and
                                        Vault Pro with an annual percentage rate
                                        (APR) of 5%.
                                    </p>
                                </section>
                            )}
                            {activeIndex === 7 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 7
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>How to deposit</h2>
                                    <p>
                                        1. Find the『My wallet』 page, click the
                                        deposit page, copy the wallet address,
                                        or scan QR code for payment. 2. Use From
                                        Alcoin to deposit the 150
                                        cryptocurrencies provided by Changelly.
                                        3. Quickly deposit and withdrawal
                                        directly from the cooperative wallet.
                                        Deposit
                                    </p>
                                </section>
                            )}
                            {activeIndex === 8 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 8
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>What is BC Swap</h2>
                                    <p>
                                        You can use BC Swap to exchange
                                        cryptocurrencies without waiting for
                                        review.
                                    </p>
                                </section>
                            )}
                            {activeIndex === 9 && (
                                <section
                                    className={clsx(
                                        'tab-body entry-content',
                                        activeIndex === 9
                                            ? 'active active-content'
                                            : null
                                    )}
                                >
                                    <h2>What is cryptocurrency?</h2>
                                    <p>
                                        Cryptocurrency is a digital currency
                                        that does not rely on any real substance
                                        and makes use of cryptography, eg.
                                        Bitcoin, litcoin, BitShares, etc. It is
                                        a digital currency that is created,
                                        distributed, and maintained based on
                                        cryptography and validation technology.
                                        The characteristics of cryptocurrency
                                        are its application of P2P technology
                                        and the fact that everyone issues it.
                                        Crpytocurrency is also an online payment
                                        system that supports anonymous
                                        transcommon.actions. Bitcoin is the top
                                        cryptocurrency, and is recognised by the
                                        laws in many countries.
                                    </p>
                                    <h2>Why using crpytocurrency?</h2>
                                    <p>
                                        Due to several reasons, crytocurrency is
                                        the most popular and widely used digital
                                        currency. In contrast to traditional
                                        transfer, We transfers never require
                                        several hours of waiting, and are not
                                        affected by the transfer amount or the
                                        region of the user. The fee is also much
                                        lower, and is usually a few cents.
                                        Refund will not happen to
                                        crpytocurrency, and no cheating is
                                        possible. No bank, government agency, or
                                        individual could manipulate
                                        cryptocurrency. In contrast to
                                        traditional currency, cryptocurrency
                                        transactions are anonymous, and there is
                                        no threat of confiscation.
                                    </p>
                                    <h2>
                                        How does cryptocurrency transaction
                                        work?
                                    </h2>
                                    <p>
                                        Cryptocurrency transactions are actually
                                        very simple. Basically it is to send
                                        cryptocurrency from an online wallet to
                                        another. The first step in the whole
                                        process is that the payer sends a
                                        private key (a randomly generated
                                        sequence of numbers) to the payee, after
                                        which a transaction will go through 0 to
                                        5 validations. An ordinary transaction
                                        will go through 1 validation, but if the
                                        amount is very large, it is better to
                                        perform multiple validations. It takes
                                        about 10 minutes for a single validation
                                        on the blockchain network. After
                                        validation, anyone on the blockchain can
                                        check this transaction but could not see
                                        any sensitive information.
                                    </p>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </SimpleCard>
    )
}

export default List
