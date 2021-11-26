import { makeStyles } from '@material-ui/core/styles'

export const animationStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.fade-in': {
            animation: 'fade-in 1s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
        },
        '@keyframes fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        '@keyframes spin': {
            '0%': { transform: 'rotate(0)' },
            '100%': { transform: 'rotate(360deg)' },
        },
        '@keyframes coin': {
            '0%': { transform: 'translateY(-5px)' },
            '50%': { transform: 'translateY(0px)' },
            '100%': { transform: 'translateY(5px)' },
        },
        '.spin': { animation: 'spin 3s infinite linear' },
    },
}))
