import React from 'react'
import { authRoles } from '../../auth/authRoles'

const gameRoutes = [
    {
        path: '/game/management',
        component: React.lazy(() => import('./Management')),
        auth: authRoles.editor,
    },
    {
        path: '/original/:id',
        component: React.lazy(() => import('./GamePanel')),
        auth: authRoles.guest,
    },
    {
        path: '/slot/:id',
        component: React.lazy(() => import('./GamePanel')),
        auth: authRoles.guest,
    },
    {
        path: '/casino/:id',
        component: React.lazy(() => import('./GamePanel')),
        auth: authRoles.guest,
    },
    {
        path: '/game/favorite',
        component: React.lazy(() => import('./Favorite')),
        auth: authRoles.guest,
    },
    {
        path: '/game/recent',
        component: React.lazy(() => import('./Recent')),
        auth: authRoles.guest,
    },
]

export default gameRoutes
