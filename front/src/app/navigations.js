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
        label: 'Admin Section',
        type: 'label',
    },
    {
        name: 'User Manage',
        icon: 'people',
        children: [
            {
                name: 'User Register',
                path: '/user/register',
                icon: 'person_add',
                auth: authRoles.admin,
            },
            {
                name: 'Users List',
                path: '/user/list',
                icon: 'person',
                auth: authRoles.admin,
            },
        ],
    },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
