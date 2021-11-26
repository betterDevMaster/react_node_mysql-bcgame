import React from 'react'
import { authRoles } from '../../auth/authRoles'

const promotionRoutes = [
    {
        path: '/promotions',
        component: React.lazy(() => import('./List')),
        auth: authRoles.guest,
    },
]

export default promotionRoutes
