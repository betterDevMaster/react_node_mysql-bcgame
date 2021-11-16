import { makeStyles } from '@material-ui/core/styles'

export const dashboardStyle = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.details': {
            position: 'fixed',
            width: '500px',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            '& hr.small': {
                width: '50px',
            },
            '& .headline': {
                marginBottom: '0',
            },
            '& .button': {
                background: 'transparent',
                border: '1px solid white',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '10px',
                letterSpacing: '2px',
                marginTop: '1rem',
                zIndex: '9999',
                '& :hover': {
                    background: '#fff',
                    color: '#222',
                }
            }
        },

        // Slider
        '.svg-mask': {
            position: 'absolute',
        },
        '.featured-slider': {
            position: 'relative',
            margin: '0',
            height: '0',
            width: '0',
            top: '0',
            left: '50%',
            transform: 'scale(0.75) translateY(-100px)',
            // pointerEvents: 'none',
            '& li': {
                userSelect: 'none',
                listStyle: 'none',
                position: 'absolute',
                top: '0',
                left: '0',
                transition: 'opacity 0.5s ease',
                opacity: '0.25',
                '&.active': {
                    opacity: '1',
                },
                "&:nth-child(1)": {
                    transform: 'translate(-50%, -50%) rotate(0deg)',
                },
                '&:nth-child(2)': {
                    transform: 'translate(-50%, -50%) rotate(90deg)',
                },
                '&:nth-child(3)': {
                    transform: 'translate(-50%, -50%) rotate(180deg)',
                },
                '&:nth-child(4)': {
                    transform: 'translate(-50%, -50%) rotate(270deg)',
                },
                '& .image': {
                    width: '1200px',
                    height: 'auto',
                    transform: 'translate(1px, 728px)',
                    '& img': {
                        clipPath: 'url(#quarterMask)',
                    }
                }
            }
        },
        'nav': {
            position: 'absolute',
            bottom: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '100',
            width: '100%',
            '& .prev,& .next': {
                backgroundColor: 'black',
                // border-radius: '100px',
                padding: '0.25rem 0.5rem',
                color: 'white',
            },
            '& .prev': {
                float: 'left',
            },
            '& .next': {
                float: 'right',
            }
        },
        '.slider-img': {
            padding: '0px 0.2rem',
            display: 'flex',
            flex: '1 1 0%',
            overflow: 'hidden',
            width: '100%',
            borderBottomLeftRadius: ' 1.25rem',
            borderBottomRightRadius: '1.25rem',
            imageRendering: '-webkit-optimize-contrast',
            cursor: 'pointer',
        },
        '.game-types-img': {
            overflow: 'hidden',
            width: '100%',
            borderRadius: ' 1.25rem',
            imageRendering: '-webkit-optimize-contrast',
            cursor: 'pointer',
        },
        '.alice-carousel__dots': {
            margin: '20px 3px 5px !important'
        }
    },
}))
