import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
        auth: authRoles.guest,
    },
    {
        name: 'User Profile',
        path: '/profile',
        icon: 'verified_user',
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
        path: '/game/list',
        auth: authRoles.editor,
    },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
