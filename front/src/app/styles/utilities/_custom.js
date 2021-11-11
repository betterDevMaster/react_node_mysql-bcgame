import { makeStyles } from '@material-ui/core/styles'

export const customStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.vip-title-box': {
            position: 'relative',
            zIndex: '10',
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            height: '3.75rem',
            marginRight: '3.75rem',
            marginLeft: '1.125rem',
            transition: 'all 0.5s ease 0s'
        },
        '.vip-title': {
            fontSize: '1rem',
            margin: '0',
            fontWeight: 'bold',
            flex: '1 1 0%',
            display: 'flex',
            alignItems: 'center',
            color: 'rgb(0, 20, 30)'
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
    },
}))
