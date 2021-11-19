import React from 'react'
import { authRoles } from '../../auth/authRoles'

const gameRoutes = [
    {
        path: '/game/register',
        component: React.lazy(() => import('./Register')),
        auth: authRoles.editor,
    },
    {
        path: '/game/list',
        component: React.lazy(() => import('./List')),
        auth: authRoles.editor,
    },
]

export default gameRoutes
