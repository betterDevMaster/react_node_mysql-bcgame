import { makeStyles, lighten } from '@material-ui/core/styles'

export const customCardStyle = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.customCard': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            '& .item:nth-child(1)': {
                zIndex: '4',
                '& .mask': {
                    backgroundImage:
                        'url(data:image/png;base64,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)',
                    '&::after': {
                        backgroundImage:
                            'url(https://static.bc.game/static/media/mask1.ad51d9f8.png)',
                    },
                },
                '& .front': {
                    backgroundImage:
                        'url(https://static.bc.game/static/media/front1.cec6fda6.png)',
                },
                '& .stage::after': {
                    backgroundImage:
                        'url(https://static.bc.game/static/media/bg1.5712c1c0.svg)',
                },
                '& .button': {
                    backgroundImage:
                        'conic-gradient(from 1turn, rgb(241, 149, 17), rgb(246, 199, 34))',
                },
            },
            '& .item:nth-child(2)': {
                zIndex: '3',
                '& .mask': {
                    backgroundImage:
                        'url(data:image/png;base64,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)',
                    '&::after': {
                        backgroundImage:
                            'url(https://static.bc.game/static/media/mask2.60f17293.png)',
                    },
                },
                '& .front': {
                    backgroundImage:
                        'url(https://static.bc.game/static/media/front2.37d90a1e.png)',
                },
                '& .stage::after': {
                    backgroundImage:
                        'url(https://static.bc.game/static/media/bg2.e332897a.svg)',
                },
                '& .button': {
                    backgroundImage:
                        'conic-gradient(from 1turn, rgb(204, 86, 0), rgb(255, 131, 43))',
                },
            },
            '& .item:nth-child(3)': {
                zIndex: '2',
                '& .mask': {
                    backgroundImage:
                        'url(data:image/png;base64,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)',
                    '&::after': {
                        backgroundImage:
                            'url(https://static.bc.game/static/media/mask3.c201d2da.png)',
                    },
                },
                '& .front': {
                    backgroundImage:
                        'url(https://static.bc.game/static/media/front3.d1ee18c0.png)',
                },
                '& .stage::after': {
                    backgroundImage:
                        ' url(https://static.bc.game/static/media/bg3.246458fa.svg)',
                },
                '& .button': {
                    backgroundImage:
                        'conic-gradient(from 1turn, rgb(131, 29, 184), rgb(171, 70, 207))',
                    color: 'rgb(255, 255, 255)',
                },
            },
            '& .item:nth-child(4)': {
                zIndex: '1',
                marginRight: '0px',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    // top: '0.5rem',
                    left: '-0.125rem',
                    width: '4.375rem',
                    height: '4.375rem',
                    background:
                        'url(data:image/png;base64,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) left top / contain no-repeat',
                    zIndex: '3',
                    transition: 'top 200ms ease-in 0s',
                    top: '-0.75rem',
                },
                '& .mask': {
                    backgroundImage:
                        'url(data:image/png;base64,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)',
                    '&::after': {
                        backgroundImage:
                            'url(https://static.bc.game/static/media/mask4.9638c436.png)',
                    },
                },
                '& .front': {
                    backgroundImage:
                        'url(https://static.bc.game/static/media/front4.19b69ae7.png)',
                },
                '& .stage::after': {
                    backgroundImage:
                        'url(https://static.bc.game/static/media/bg4.4344275e.svg)',
                },
                '& .button': {
                    backgroundImage:
                        'conic-gradient(from 1turn, rgb(63, 18, 140), rgb(113, 33, 252))',
                    color: 'rgb(255, 255, 255)',
                },
            },
            '& .item': {
                flex: '1 1 0%',
                marginRight: '1.125rem',
                marginBottom: '1.125rem',
                textAlign: 'center',
                position: 'relative',
                '&.active': {
                    '& .stage': {
                        top: '-0.625rem',
                        '& .effect': {
                            display: 'block',
                        },
                    },
                    '& .mask::after': {
                        animation:
                            '5s linear 0s infinite normal none running spin',
                    },
                    '& .icon': {
                        fill: 'rgb(255, 212, 68)',
                    },
                    '& .button': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    zIndex: '1',
                    left: '0px',
                    bottom: '-0.625rem',
                    right: '0px',
                    height: '3.75rem',
                    background:
                        'url(data:image/png;base64,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) center center / contain no-repeat',
                },
            },
            '& .stage': {
                position: 'relative',
                zIndex: '2',
                borderRadius: '0.75rem',
                lineHeight: 'normal',
                paddingTop: '119.6%',
                color: 'rgb(34, 35, 41)',
                top: '0.625rem',
                transition: 'top 200ms ease-in 0s',
                '& .mask': {
                    position: 'absolute',
                    top: '0.1875rem',
                    left: '0.1875rem',
                    right: '0.1875rem',
                    height: '80%',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    background: 'center center / contain no-repeat',
                    zIndex: '0',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: '100%',
                        paddingTop: '100%',
                        transform: 'scale(2.2) translateY(18%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    },
                },
                '& .front': {
                    position: 'absolute',
                    inset: '0px',
                    zIndex: '3',
                    background: 'center bottom / 100% no-repeat',
                },
                '& .text': {
                    position: 'absolute',
                    top: '0.875rem',
                    left: '0px',
                    right: '0px',
                    color: 'rgb(34, 35, 41)',
                    lineHeight: 'normal',
                    '& .small': {
                        fontSize: '0.875rem',
                    },
                    '& .large': {
                        fontSize: '1.375rem',
                    },
                },
                '& .bold': {
                    fontWeight: '600',
                },
                '& .ttu': {
                    textTransform: 'uppercase',
                },
                '& .effect': {
                    position: 'absolute',
                    inset: '0px',
                    zIndex: '5',
                    display: 'none',
                },
                '& .effect-item': {
                    width: '2.5rem',
                    height: '2.5rem',
                    background:
                        'url(data:image/png;base64,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) center center / contain no-repeat',
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    animation:
                        '1s linear 0s infinite alternate none running coin',
                    '&:last-child': {
                        top: 'unset',
                        bottom: '0.625rem',
                        backgroundImage:
                            'url(data:image/png;base64,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)',
                        right: 'unset',
                        left: '0px',
                    },
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: '0px 0px 1.5rem',
                    zIndex: '-1',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    backgroundSize: '100%',
                },
            },
            '& .stage__arrow': {
                position: 'absolute',
                top: '40%',
                right: '-1.75rem',
                width: '2.375rem',
                height: '2.375rem',
                borderRadius: '0.3125rem',
                background: 'rgb(34, 35, 41)',
                zIndex: '3',
                '& .icon': {
                    fill: 'rgb(158, 158, 158)',
                    transform: 'scale(0.6)',
                },
            },
        },
        '.depositCard': {
            flex: '1 1 0%',
            width: '100%',
            height: '15.375rem',
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.5s ease 0s',
            '&:hover .deposit-bg, &.active .deposit-bg': {
                height: '100%',
                '& .main-bg': {
                    border: '1px solid rgb(255, 188, 0)',
                    '& .sf-img': {
                        animation:
                            '5s linear 0s infinite normal none running spin',
                    },
                    '& .bottom-gradient': {
                        height: '3.75rem',
                    },
                    '& .bottom': {
                        height: '5.125rem',
                    },
                },
            },
            '& .deposit-bg': {
                position: 'absolute',
                width: '100%',
                bottom: '0px',
                transition: 'all 0.5s ease 0s',
                height: '14.625rem',
                '& .main-bg': {
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    border: '1px solid transparent',
                    borderRadius: '0.625rem',
                    overflow: 'hidden',
                    zIndex: '1',
                    '& .top': {
                        width: '100%',
                        height: '11.25rem',
                        position: 'relative',
                        transition: 'all 0.5s ease 0s',
                        borderRadius: '0.625rem',
                        '& .sf-img': {
                            width: '13.75rem',
                            height: '13.75rem',
                            marginLeft: '-2.875rem',
                            marginTop: '-1.75rem',
                        },
                        '& .top-info': {
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            '& p': {
                                margin: '0px',
                            },
                            '& .p_1': {
                                lineHeight: '1.25rem',
                            },
                            '& .p_2': {
                                lineHeight: '1.25rem',
                                fontWeight: 'bold',
                                fontSize: '1.125rem',
                            },
                            '& .add': {
                                background:
                                    'url(data:image/png;base64,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) center center / 100% 100% no-repeat',
                                width: '1.375rem',
                                height: '1.375rem',
                                margin: '0.75rem 0px 0.25rem',
                            },
                            '& .p_3': {
                                lineHeight: '2.5rem',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                            },
                            '& .p_4': {
                                lineHeight: '1.25rem',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            },
                        },
                    },
                    '& .bottom-gradient': {
                        position: 'absolute',
                        transition: 'all 0.5s ease 0s',
                        bottom: '0px',
                        width: '100%',
                        height: '3.125rem',
                        color: 'rgb(239, 239, 239)',
                    },
                    '& .bottom': {
                        position: 'absolute',
                        bottom: '0px',
                        width: '102%',
                        left: '-1%',
                        height: '4.375rem',
                        transition: 'all 0.5s ease 0s',
                        background:
                            'url(data:image/png;base64,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) center top / 100% no-repeat',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        '& p': {
                            margin: '0px',
                            lineHeight: '0.9375rem',
                            whiteSpace: 'nowrap',
                            fontSize: '0.75rem',
                            color: 'rgba(153, 164, 176, 0.8)',
                        },
                    },
                },
            },
        },
        '.button-normal': {
            width: '8.875rem',
            height: '2.75rem',
            margin: '0px auto',
            color: 'rgb(34, 35, 41)',
            opacity: '0',
            transform: 'scale(0)',
            transition: 'all 200ms ease-out 0s',
            position: 'relative',
            zIndex: '3',
            boxShadow: 'rgb(29 34 37 / 10%) 0px 4px 8px 0px',
            backgroundColor: 'rgb(107, 113, 128)',
            display: 'block',
            borderRadius: '6.25rem',
            height: '3rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
            '& .button-inner': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            },
            '&:disabled': {
                opacity: '0.5 !important',
            },
            '&.deposit-btn': {
                margin: '0px auto 1.875rem',
                width: '17.5rem',
                height: '3.5rem',
                color: 'rgb(245, 246, 247)',
                boxShadow: 'rgb(29 34 37 / 10%) 0px 4px 8px 0px',
                backgroundColor: 'rgb(67, 179, 9)',
                backgroundImage:
                    'conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28))',
                opacity: '1',
                transform: 'scale(1)',
                '&:hover': {
                    transform: 'scale(0.95)',
                },
            },
        },
        '.depositPercent': {
            padding: '0px 1.25rem',
            height: '0.5rem',
            width: '100%',
            display: 'flex',
            marginTop: '1.375rem',
            '& > .item:first-child': {
                borderRadius: '0.25rem 0px 0px 0.25rem',
            },
            '& > .item:last-child': {
                marginRight: '0px',
                borderRadius: '0px 0.25rem 0.25rem 0px',
            },
            '& .item.full-item': {
                backgroundImage:
                    'linear-gradient(to left, rgb(252, 177, 30), rgba(217, 174, 79, 0.48))',
            },
            '& .item': {
                flex: '1 1 0%',
                marginRight: '1px',
                background: 'rgba(216, 216, 216, 0.1)',
                position: 'relative',
                '& span': {
                    height: '100%',
                    backgroundImage:
                        'linear-gradient(to left, rgb(252, 177, 30), rgba(217, 174, 79, 0.48))',
                    display: 'inline-block',
                    position: 'absolute',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: '-1px',
                    top: '0px',
                    height: '100%',
                    width: '1px',
                    background: 'rgba(255, 255, 255, 0.2)',
                },
            },
        },
        '.depositPercentNum': {
            color: 'rgb(249, 178, 37)',
            fontSize: '0.75rem',
            position: 'relative',
            margin: '0.375rem 1rem 0px',
            height: '1rem',
            '& .num': {
                position: 'absolute',
                transform: 'translateX(-60%)',
                lineHeight: '1rem',
            },
        },
        '@media (min-width: 1024px)': {
            '.customCard': {
                gridTemplateColumns: 'repeat(4, 1fr)',
            },
        },
        '.hero-section': {
            alignItems: 'flex-start',
            backgroundImage: 'linear-gradient(15deg, #0f4667 0%, #2a6973 150%)',
            display: 'flex',
            minHeight: '100%',
            justifyContent: 'center',
            padding: 'var(--spacing-xxl) var(--spacing-l)',
            borderRadius: '10px',

            '& .card-grid': {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridColumnGap: 'var(--spacing-l)',
                gridRowGap: 'var(--spacing-l)',
                maxWidth: 'var(--width-container)',
                width: '100%',
                '&:hover > .card:not(:hover) .card__background': {
                    filter: 'brightness(0.5) saturate(0) contrast(1.2) blur(10px)',
                },
            },
            '@media (min-width: 960px)': {
                '& .card-grid': {
                    gridTemplateColumns: 'repeat(5, 1fr)',
                },
            },
            '& .card': {
                listStyle: 'none',
                position: 'relative',
                border: '1px solid #ede4e4b8',
                borderRadius: '22px',
                '&:before': {
                    content: "''",
                    display: 'block',
                    paddingBottom: '150%',
                    width: '100%',
                },
                '&:hover .card__background': {
                    transform: 'scale(0.95) translateZ(0)',
                },
            },
            '& .card__background': {
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--spacing-l)',
                bottom: '0',
                filter: 'brightness(0.75) saturate(1.2) contrast(0.85)',
                left: '0',
                position: 'absolute',
                right: '0',
                top: '0',
                transformOrigin: 'center',
                trsnsform: 'scale(1) translateZ(0)',
                transition: 'filter 200ms linear, transform 200ms linear',
            },
            '& .card__content': {
                left: 0,
                padding: 'var(--spacing-l)',
                position: 'absolute',
                top: '0',
                color: 'var(--text-lighter)',
                fontSize: '0.9rem',
                textShadow: '2px 2px 20px rgb(0 0 0 / 20%)',
            },
            '& .card__category': {
                fontSize: '0.9rem',
                marginBottom: 'var(--spacing-s)',
            },
            '& .card__heading': {
                color: 'var(--text-lighter)',
                fontSize: '1.2rem',
                textShadow: '2px 2px 20px rgba(0, 0, 0, 0.2)',
            },
        },
    },
}))
