import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/profile',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.guest,
    }
]

export default dashboardRoutes
