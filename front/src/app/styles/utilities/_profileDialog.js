import { makeStyles } from '@material-ui/core/styles'

export const profileDialogStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.dialog-box': {
            backgroundColor: 'rgb(23, 24, 27)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            color: 'rgb(245, 246, 247)',
        },
        '.vip-title-box': {
            position: 'relative',
            zIndex: '10',
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            height: '3.75rem',
            marginRight: '3.75rem',
            marginLeft: '1.125rem',
            transition: 'all 0.5s ease 0s',
        },
        '.vip-title': {
            fontSize: '1rem',
            margin: '0',
            fontWeight: 'bold',
            flex: '1 1 0%',
            display: 'flex',
            alignItems: 'center',
        },
        '.vip-box': {
            backgroundImage: 'url("https://static.bc.game/static/media/vip_type1.4a9131b8.svg")',
            width: '3.8125rem',
            height: '4.875rem',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            fontWeight: '600',
            fontSize: '0.875rem',
            paddingTop: '1.75rem',
            textAlign: 'center',
            color: 'rgb(255, 255, 255)'
        },
        '.user-info': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            '& .button': {
                display: 'flex',
                alignItems: 'center',
                height: '2.25rem',
                background: 'rgba(30, 32, 36, 0.7)',
                borderRadius: '1.6875rem'
            },
        },
        '.like': {
            position: 'absolute',
            top: '0px',
            left: '0px',
            color: 'rgb(255, 255, 255)',
            padding: '0px 0.75rem',
            cursor: 'unset',
            '& .icon': {
                width: '1rem',
                height: '1rem',
                marginRight: '0.5rem',
                fill: 'rgb(237, 99, 0)'
            }
        },
        '.edit': {
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '2.25rem',
            borderRadius: '1.125rem',
            justifyContent: 'center',
            background: 'rgb(30, 32, 36)',
            '& .icon': {
                width: '1rem',
                height: '1rem',
                fill: 'rgba(153, 164, 176, 0.6)'
            }
        },
        '.avatar-box': {
            position: 'relative',
            '& .avatar-image': {
                width: '70px',
                height: '70px',
                border: '2px solid rgb(70, 70, 70)',
                borderRadius: '50%',
                cursor: 'pointer',
                verticalAlign: 'middle',
            }
        },
        '.name-box': {
            display: 'flex',
            alignItems: 'center',
            marginTop: '0.625rem',
            color: 'rgb(245, 246, 247)',
            fontWeight: '600',
            '& .user-name': {
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
            }
        },
        '.user-level': {
            marginTop: '0.25rem',
            width: 'auto',
            textAlign: 'left',
            whiteSpace: 'nowrap',
            fontSize: '0px',
            '& .img-star': {
                height: '1.125rem',
                width: 'auto',
                backgroundSize: 'auto 100%',
                marginRight: '2px',
                objectFit: 'cover',
            }
        },
    },
}))
