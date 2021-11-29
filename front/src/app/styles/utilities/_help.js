import { makeStyles } from '@material-ui/core/styles'

export const helpStyle = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.helpContainer': {
            '& .tabs-container': {
                // padding: '2rem',
                border: '1px solid #bfbebe',
                borderRadius: '2px',
                margin: '1rem',
            },
            '& .tabs-block': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            '& .tabs': {
                display: 'flex',
                '& > ul': {
                    listStyleType: 'none',
                    margin: '0',
                    padding: '0',
                    width: '15%',
                    background: '#000',
                    '& li': {
                        display: 'block',
                        '&:not(:last-child)': {
                            borderBottom: '1px solid #262626',
                        },
                        '& a': {
                            display: 'flex',
                            borderBottom: 'none',
                            textDecoration: 'none',
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: '1rem 1.5rem',
                            transition: 'all 0.2s ease-in-out',
                            wordWrap: 'break-word',
                            cursor: 'pointer',
                            '&:hover, &:focus, &:active': {
                                borderBottom: 'none',
                                outline: '0',
                            },
                            '&.active': {
                                backgroundColor: '#fff',
                                color: '#0067b8',
                            },
                            '&:hover:not(.active)': {
                                color: '#0067b8',
                            },
                            '& > span': {
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                '& .tab-label': {
                                    display: 'none',
                                },
                            },
                        },
                    },
                },
            },
            '& .tabs section': {
                width: '85%',
                backgroundColor: '#fff',
                padding: '1rem',
                display: 'none',
                wordWrap: 'break-word',
                borderBottom: '6px solid #0067b8',
                '& > *': {
                    opacity: '0',
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.2s, transform 0.2s',
                },
                '& > *:nth-child(1)': {
                    transitionDelay: '0.2s',
                },
                '& > *:nth-child(2)': {
                    transitionDelay: '0.3s',
                },
                '& > *:nth-child(3)': {
                    transitionDelay: '0.4s',
                },
                '& > *:nth-child(4)': {
                    transitionDelay: '0.5s',
                },
                '& > *:nth-child(5)': {
                    transitionDelay: '0.6s',
                },
                '& > *:nth-child(6)': {
                    transitionDelay: '0.7s',
                },
                '& > *:nth-child(7)': {
                    transitionDelay: '0.8s',
                },
                '& > *:nth-child(8)': {
                    transitionDelay: '0.9s',
                },
                '& > *:nth-child(9)': {
                    transitionDelay: '1s',
                },
                '& > *:nth-child(10)': {
                    transitionDelay: '1.1s',
                },
                '& > *:nth-child(11)': {
                    transitionDelay: '1.2s',
                },
                '& > *:nth-child(12)': {
                    transitionDelay: '1.3s',
                },
                '& > *:nth-child(13)': {
                    transitionDelay: '1.4s',
                },
                '& > *:nth-child(14)': {
                    transitionDelay: '1.5s',
                },
                '& > *:nth-child(15)': {
                    transitionDelay: '1.6s',
                },
                '& > *:nth-child(16)': {
                    transitionDelay: '1.7s',
                },
                '& > *:nth-child(17)': {
                    transitionDelay: '1.8s',
                },
                '& > *:nth-child(18)': {
                    transitionDelay: '1.9s',
                },
                '& > *:nth-child(19)': {
                    transitionDelay: '2s',
                },
                '& > *:nth-child(20)': {
                    transitionDelay: '2.1s',
                },
                '&.active': {
                    display: 'block',
                },
                '&.active-content > *': {
                    opacity: '1',
                    transform: 'translateY(0)',
                },
            },
            '@media (min-width: 576px)': {
                '& .tabs > ul': {
                    width: '150px',
                },
                '& .tabs > ul li a': {
                    flexWrap: 'wrap',
                },
                '& .tabs > ul li a > span': {
                    width: '100%',
                },
                '& .tabs > ul li a > span.tab-label': {
                    width: '100%',
                    display: 'block',
                    marginTop: '0.2rem',
                },
                '& .tabs section': {
                    width: 'calc(100% - 150px)',
                    padding: '2rem 2rem',
                },
            },
            // '@media (min-width: 768px)': {
            //     '& .tabs-container': {
            //         padding: '4rem 4rem',
            //     },
            // },
            // '@media (min-width: 992px)': {
            //     '& .tabs': {
            //         width: '800px',
            //     },
            // },
        },
    },
}))
