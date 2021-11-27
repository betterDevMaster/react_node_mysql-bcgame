import { makeStyles } from '@material-ui/core/styles'

export const gamePanelStyle = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.gamePanel': {
            '& .content': {
                display: 'grid',
                gap: '16px',
            },
            '& .select': {
                width: '100%',
            },
            '& .dragRoot': {
                alignItems: 'center',
                backgroundColor: '#1967d2',
                borderRadius: '4px',
                boxShadow:
                    '0 12px 24px -6px rgba(0, 0, 0, .25), 0 0 0 1px rgba(0, 0, 0, .08)',
                color: '#fff',
                display: 'inline-grid',
                fontSize: '14px',
                gap: '8px',
                gridTemplateColumns: 'auto auto',
                padding: '4px 8px',
                pointerEvents: 'none',
            },
            '& .icon, & .label': {
                alignItems: 'center',
                display: 'flex',
            },
            '& .nodeRoot': {
                alignItems: 'center',
                justifyContent: 'space-between',
                display: 'flex',
                gridTemplateColumns: 'auto auto 1fr auto auto',
                height: '32px',
                paddingInlineEnd: '8px',
                width: '350px',
            },
            '& .expandIconWrapper': {
                alignItems: 'center',
                fontSize: '0',
                cursor: 'pointer',
                display: 'flex',
                height: '24px',
                justifyContent: 'center',
                width: '24px',
                transition: 'transform linear 0.1s',
                transform: 'rotate(0deg)',
                '& .isOpen': {
                    transform: 'rotate(90deg)',
                },
            },
            '& .labelGridItem': {
                paddingRight: '1rem',
            },
            '& .actionButton': {
                padding: '0 4px',
            },
            '& .app': {
                height: '100%',
            },
            '& .treeRoot': {
                height: '100%',
            },
            '& .draggingSource': {
                opacity: '.3',
            },
            '& .dropTarget': {
                backgroundColor: '#e8f0fe',
            },
        },
    },
}))
