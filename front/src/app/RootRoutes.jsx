import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import profileRoutes from './views/profile/ProfileRoutes'
import userRoutes from './views/user/UserRoutes'
import gameRoutes from './views/game/GameRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/default" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...profileRoutes,
    ...userRoutes,
    ...gameRoutes,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
