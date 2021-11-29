import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
        auth: authRoles.guest,
    },
    {
        label: 'Admin Pages',
        type: 'label',
        auth: authRoles.admin,
    },
    {
        name: 'User Manage',
        icon: 'person',
        auth: authRoles.admin,
        children: [
            {
                name: 'User Registration',
                path: '/user/register',
                icon: 'person_add',
                auth: authRoles.admin,
            },
            {
                name: 'Users List',
                path: '/user/list',
                icon: 'people',
                auth: authRoles.admin,
            },
        ],
    },
    {
        label: 'Editor Pages',
        type: 'label',
        auth: authRoles.admin,
    },
    {
        name: 'Game Manage',
        icon: 'videogame_asset',
        path: '/game/management',
        auth: authRoles.editor,
    },
    {
        name: 'Promotions',
        path: '/promotions',
        icon: 'local_florist',
        auth: authRoles.guest,
    },
    {
        name: 'Favorite Games',
        icon: 'favorite',
        path: '/game/favorite',
        auth: authRoles.guest,
    },
    {
        name: 'Recent Play',
        path: '/game/recent',
        icon: 'timer',
        auth: authRoles.guest,
    },
    {
        name: 'Provably Fair',
        path: '/fair',
        icon: 'help',
        auth: authRoles.guest,
    },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
