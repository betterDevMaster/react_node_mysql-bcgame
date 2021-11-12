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
import { profileDialogStyles } from "./utilities/_profileDialog";

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
    profileDialogStyles();

    return children || null
}

export default React.memo(GlobalCss)
