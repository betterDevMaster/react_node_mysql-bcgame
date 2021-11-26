import React from 'react'
import { authRoles } from '../../auth/authRoles'

const gameRoutes = [
    {
        path: '/game/list',
        component: React.lazy(() => import('./List')),
        auth: authRoles.editor,
    },
    {
        path: '/original/:id',
        component: React.lazy(() => import('./GamePanel')),
        auth: authRoles.editor,
    },
    {
        path: '/slot/:id',
        component: React.lazy(() => import('./GamePanel')),
        auth: authRoles.editor,
    },
    {
        path: '/casino/:id',
        component: React.lazy(() => import('./GamePanel')),
        auth: authRoles.editor,
    },
]

export default gameRoutes
