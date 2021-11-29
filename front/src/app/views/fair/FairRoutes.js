import React from 'react'
import { authRoles } from '../../auth/authRoles'

const fairRoutes = [
    {
        path: '/fair',
        component: React.lazy(() => import('./List')),
        auth: authRoles.guest,
    },
]

export default fairRoutes
