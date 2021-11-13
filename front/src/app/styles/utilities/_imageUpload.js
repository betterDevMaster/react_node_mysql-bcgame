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
    },
}))
