import { makeStyles } from '@material-ui/core/styles'

export const commonStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.circular-image-small': {
            height: '48px',
            width: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
        },
        '.card': { transition: 'all 0.3s ease' },
        '.card:hover': { boxShadow: theme.shadows[12] },
        '.card-title': {
            fontSize: '1rem',
            textTransform: 'capitalize',
            fontWeight: '500',
        },
        '.card-subtitle': { fontSize: '0.875rem', color: 'var(--text-muted)' },
        '.theme-dark .card-subtitle': { color: 'rgba(255, 255, 255, 0.54)' },
        '.hide-on-mobile': { display: 'inherit' },
        '@media screen and (max-width: 767px)': {
            '.hide-on-mobile': { display: 'none !important' },
            '.show-on-mobile': { display: 'inherit !important' },
            '.invisible-on-pc': { visibility: 'visible' },
        },
        '@media screen and (min-width: 1200px)': {
            '.hide-on-pc': { display: 'none !important' },
        },
        '@media screen and (max-width: 1200px)': {
            '.show-on-pc': { display: 'none !important' },
        },
        '.VictoryContainer svg': { height: '100% !important' },
        '.box-shadow-none': { boxShadow: 'none !important' },
        '.circle-44': { height: '44px !important', width: '44px !important' },
        '.circle-32': {
            height: '32px !important',
            minHeight: '32px !important',
            width: '32px !important',
        },
        '.circle-32 .MuiFab-root': { minHeight: '32px !important' },
        '.circle-32 .MuiIcon-root': { fontSize: '13px !important' },
        '.show-on-mobile': { display: 'none !important' },
        '.invisible-on-pc': { visibility: 'hidden' },
        '.highlight-js pre': { whiteSpace: 'pre-line' },
        '.cursor-pointer': {
            cursor: 'pointer',
        },
        '.cursor-move': {
            cursor: 'move',
        },
        '.avatar': {
            height: '32px !important',
            width: '32px !important',
        },
        '.face-group .avatar:not(:first-child)': {
            marginLeft: '-0.875rem !important',
        },
        '.opacity-1': {
            opacity: 1,
        },
        '@media screen and (min-width: 621px)': {
            '::-webkit-scrollbar': {
                width: '5px',
                height: '5px',
                backgroundColor: 'transparent',
                borderRadius: '5px',
            },
        },
        '@media screen and (min-width: 621px)': {
            '::-webkit-scrollbar-button': {
                display: 'none',
            },
        },
        '@media screen and (min-width: 621px)': {
            '::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgb(109 114 124)',
                transition: 'all 0.5s ease 0s',
                borderRadius: '5px',
            },
        },
        '*::-webkit-scrollbar': {
            width: '0.4em',
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(109 114 124)',
            transition: 'all 0.5s ease 0s',
            borderRadius: '5px',
            outline: '1px solid slategrey',
        },
        '.logo-box': {
            cursor: 'pointer',
            border: '1px solid #ddd',
            borderRadius: '1rem',
            background: '#bbb7b7',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: '.3rem',
            position: 'relative',
            '& p': {
                position: 'absolute',
                textAlign: 'center',
                display: 'block',
                background: '#fbfbfb',
                borderRadius: '6px',
                opacity: '0.9',
                padding: '5px',
                margin: '0',
                width: '80%',
                color: '#777',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%',
            },
            '& input': {
                cursor: 'pointer',
                appearance: 'none',
                width: '100%',
                height: '100%',
                fontSize: '24px',
                opacity: '0',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateY(-50%) translateX(-50%)',
            },
        },
        '.svg': {
            width: '18px',
            height: '18px',
            background: '#a9a9a9',
        }
    },
}))
