import './VendorCss'
import React from 'react'
import { variableStyles } from './_variables'
import { positioningStyles } from './utilities/_positionings'
import { spacingStyles } from './utilities/_spacing'
import { borderStyles } from './utilities/_border'
import { shadowStyles } from './utilities/_shadows'
import { colorStyles } from './utilities/_color'
import { buttonStyles } from './utilities/_button'
import { typographyStyles } from './utilities/_typography'
import { commonStyles } from './utilities/_common'
import { animationStyles } from './utilities/_animations'
import { settingsStyle } from "./utilities/_settings";
import { dashboardStyle } from "./utilities/_dashboard";
import { footerStyle } from "./utilities/_footer";
import { customCardStyle } from "./utilities/_customCard";
import { gamePanelStyle } from "./utilities/_gamePanel";

const GlobalCss = ({ children }) => {
    variableStyles()
    positioningStyles()
    spacingStyles()
    borderStyles()
    colorStyles()
    buttonStyles()
    shadowStyles()
    typographyStyles()
    commonStyles()
    animationStyles()
    settingsStyle();
    dashboardStyle();
    footerStyle();
    customCardStyle();
    gamePanelStyle();

    return children || null
}

export default React.memo(GlobalCss)
