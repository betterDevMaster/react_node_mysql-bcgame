import React from 'react'
import { authRoles } from '../../auth/authRoles'

const gameRoutes = [
    {
        path: '/game/list',
        component: React.lazy(() => import('./List')),
        auth: authRoles.editor,
    },
]

export default gameRoutes
