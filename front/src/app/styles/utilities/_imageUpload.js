import { makeStyles } from '@material-ui/core/styles'

export const imageUploadStyle = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.thumbsContainer': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '& .thumb': {
                position: 'relative',
                display: 'inline-flex',
                borderRadius: 2,
                border: '1px solid #eaeaea',
                marginBottom: 8,
                marginRight: 8,
                width: 300,
                height: 300,
                padding: 4,
                boxSizing: 'border-box',
            },
            '& .thumbInner': {
                display: 'flex',
                minWidth: 0,
                overflow: 'hidden',
            },
            '& .img': {
                display: 'block',
                width: '100%',
            },
            '& .thumbButton': {
                position: 'absolute',
                right: 10,
                bottom: 10,
            },
        },
        '.dropzone': {
            '& p': {
                display: 'inline-block',
                cursor: 'pointer',
            }
        },
        '.crop-area': {
            position: 'relative',
            opacity: '1 !important',
            '& .upload': {
                width: '3.75rem',
                height: '3.75rem',
                position: 'absolute',
                zIndex: '11',
                left: '50%',
                top: '50%',
                margin: '-1.875rem 0px 0px -1.875rem',
                '& .icon': {
                    width: '2.125rem',
                    height: '2.125rem',
                    fill: 'rgb(255, 255, 255)',
                },
                '& input': {
                    opacity: '0',
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    height: '100%',
                }
            },
        },
        '.btn-transback': {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
        },
    },
}))
