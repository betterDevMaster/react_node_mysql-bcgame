import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import AppContext from 'app/contexts/AppContext'
import useAuth from 'app/hooks/useAuth'

const getUserRoleAuthStatus = (pathname, user, routes) => {
    if (!user) return false
    const matched = routes.find((r) => r.path === pathname)

    const authenticated =
        matched && matched.auth && matched.auth.length
            ? matched.auth.includes(user.role)
            : true
    return authenticated
}

const AuthGuard = ({ children }) => {
    const { isAuthenticated, user } = useAuth()

    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()

    const { routes } = useContext(AppContext)
    const isUserRoleAuthenticated = getUserRoleAuthStatus(
        pathname,
        user,
        routes
    )
    let authenticated = isAuthenticated && isUserRoleAuthenticated

    // IF YOU NEED ROLE BASED AUTHENTICATION,
    // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
    // AND COMMENT OUT BELOW LINE
    // let authenticated = isAuthenticated

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previouseRoute])

    if (authenticated) return <>{children}</>
    else {
        return (
            <Redirect
                to={{
                    pathname: '/signin',
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }
}

export default AuthGuard
