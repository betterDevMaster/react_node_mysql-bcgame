import React from 'react'
import { authRoles } from '../../auth/authRoles'

const userRoutes = [
    {
        path: '/user/register',
        component: React.lazy(() => import('./Register')),
        auth: authRoles.admin,
    },
    {
        path: '/user/list',
        component: React.lazy(() => import('./List')),
        auth: authRoles.admin,
    },
]

export default userRoutes
