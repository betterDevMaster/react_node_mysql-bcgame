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
                    transform: 'translate(-50%,-50%) rotate(0deg)',
                },
                '&:nth-child(2)': {
                    transform: 'translate(-50%,-50%) rotate(90deg)',
                },
                '&:nth-child(3)': {
                    transform: 'translate(-50%,-50%) rotate(180deg)',
                },
                '&:nth-child(4)': {
                    transform: 'translate(-50%,-50%) rotate(270deg)',
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
            transform: 'translate(-50%,-50%)',
            zIndex: '100',
            width: '100%',
            '& .prev,& .next': {
                backgroundColor: 'black',
                // borderRadius: '100px',
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
            '&:hover': {
                transform: 'scale(1.02)'
            },
            '&:focus': {
                outline: 'none'
            }
        },
        '.tag-wrap': {
            position: 'absolute',
            zIndex: '1',
            top: '0.875rem',
            left: '0.875rem',
            display: 'flex',
            '& .tag': {
                fontWeight: 'bold',
                width: '2.8125rem',
                height: '2.8125rem',
                lineHeight: '2.8125rem',
                textAlign: 'center',
                zIndex: '1',
                fontSize: '0.75rem',
                color: 'rgb(245, 246, 247)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                transform: 'scale(0.8)',
                transformOrigin: '50% 0px',
                marginLeft: '-0.4375rem',
            },
            '& .recommend': {
                backgroundImage: "url(data:image/png,base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA3lBMVEUAAAD/7Qf//xr/5AD/2gH/5QL/5gL/5gL/7AX/5AD/3gH/6QD/2AH/4AH/4gD/4AH/5QD/4QH/3QL/2wL/3QL/3AL/2QL/6gH/6wH/4gP/3QP/6wP/6xT//wD/6gD/4wH/4wD/4wD/6gH/2QH/zwL/wgL/ygL/vgP/1gH/0gH/uQP/1AH/xQL/zAL/xwL/4AD/swT/tgP/pgT/2wH/uwP/3QH/sAT/rgT/qgT/rAT/5wD/qAT/4gD/owX/nwX/oQX/nQX/lQX+swP/mQX/mwX/lwX/5AD/kAb/jQb/kgYGlk3wAAAAI3RSTlMAEgLbxFdHOxrt5uHgy8i1saeinI98aWJgUEsmDQXw0+7T8Nq7v6UAAAZCSURBVFjDzZnpdhJBEIUlQIBsZCGJZlc0ahQJDBOWIWogoL7/C3lvVU33DGQwZ354UkRwUL9za+mq7vbV/7X16vJ31fX8vPPNi9eL372+2DzPDTwejUa71ZS8XXx1nJe3VpzPx+Na2X9Tro3H83lxLSewPB6P27C9gj4X9viEL8s5gW/btLAdbJzw8WQjwAPtMh/vDVlhEDaDZvPg7OwAnwGeyXyTC7iNfw2I2taWfOAZ1GA7Vw0GCvuUMjJheWqxFCjtC+0zTH5jzNKzEIXKacFVRIU0omjvxT4blsyKq63CaaWQAayMYLXiTn2/cXhUIs5YrfetFt+NSmTp6LCxX98p1kawSgbwdDSas/CYCsGZsuvrFkzehapIOB6GKMv5aHSa5TJ5YRgydoYDJ22ta4fEXzNilstrI9EXgGfqBPctYXymUCKpMeDSGWUuxRrWBXHkwTnIIe1rwvBIlfhDEj+BCI21zDQX4bCEL/ZWaB+SBiaQ6rcEEsBiJnAnDDV8oCnOaB/FkkiK1ECG4U4msB6YPodTWK9Hnrw5JCNpGuuZwH3NhyRDcWQQeHPT40uggoRIEDUz+5nARrDEI8cbyI5IoBIbmcBD4TG730ye4DrO8OCQDKQSDzOBR1p/ntcj7bYzuYVNbvE7Mum4EbUej7J4lRKAwCmP8oibkHUHw8eESBFpRAljqfJ0/yupwxY/ZAI8IAjrD/v4EShkIpTUaHGk06X15X6/HQQeKProLrX1ARsO8CKTOuE2ieY0gUG4/WYtuYjLl+00z/yFvCFp0YAWDSH0DuGkRnrtJHLBXJZj5PlxEU0mBrYMCB69BS4adKNuF78iIFUkNBLoJTYDNIni8bnEblO6IBadF+h5ENY1IxNIEjvUaBJJpEL2sU3GsnpBoK2RlggEDjwA+4q7v7//8QNvZEaDPiRCI5zWRJtEAi+qsv0ZUaB6nBbYR/SiLmnfYWQCCLcRRwOSaGlhY7St1e5Y22AskAqZX4QPwRPcT5ggoXEAr5nqhM9QCOJ4N95SsbH6HKvAjggkj7hHmCDvAaTTBJJIoEhko626XRF4AvQpnjgecdPZbDqbEkmNKtEl2hVOYg+1B6APoUbQAx9nDzPYA4gmcSiJtiC2LIh7yXm3IcB0CPuR8KjvQW1mRPis6yWhMNhIzb4TJplV7UPIFAuQuD+/fv0BcKo+I4qWZ6ttunxCjrcDl2QIJBAeUyEFkvf7N4lTEOMgSiPT1cc0H7xK29kWgLFClLWF0DwGD8QHjSJqEUBV6Opm6+xJ4HUKGEUETh0QqRFg14A35rIBl11OxpBlzSSLQrrMIM6okEnBYukkFS67fMIs+5XMLGsMKdEl5UGTQoXIso+hT4ovmyBZ2LZQoihdNr4Q4TGBqcJOlc1e8ERhD31hgyiF/ahVY8CPFkMFsrD90munFJKYXnowZsR5DKBbejYFuPR8cwj9ACCQQWQ3dM1h+igrWXiu2xDox0qiOexaP/QN23ebaLF9Rc7jGy5lBYpAaV/WYMnzPlslmsR0gxWBbqr4nJDIBmsjgMTkCNC0TEiMovQIEN5tsgotJxwB76puSIWpIQWgDSmbeWZwNz2kLIQQaEPKjVGfFpXoxx5MZqiN0aGO0YW5HNgYdYP+bdyzXW3LcqHXmMx0HMOe7pq/PoJuLr+1Qe+3Ip7otyIg3oEyGMLwSXepb1FgE1uRlZslR5zQb93ekIb60/HkZ6htllZs5/z2kF4D6bZzYm475x0uVVZuOP0GsSciBdgBiiHV8PViXss2nKu3xCxG85ois7fErX9uiRtxiyBRRaZ37XgwecKzjDT+fawwIgqSRqj8yFnF8Z5xrKgTqMT0wQevxYOPVQxruv6MoxkCaUiDKow0w9nRjE1hZ+Xh0TQunPbET6+O9RfrC1ccHq9w+jWiJnv5eOtx8WE0bF+9yj6Ay/kWSCUiOcsHcJ6WybMjfbjiAF7QK4f0FQF1emMqnn9FYJcYoZwIHNKg8iM0f4kR+EuM7GuWq6euWQDKuGa5kmuW/3URlLZSM+uqClbKdZmGKD15mYZkrOe67uPdoZi/7iMPSdvOeSHZBjKAIL2QDKCNzyEvJHPZJYuSL3dlymfY5Uu51M2+dn4pF+OZV/cv5z8X8thfVhm9gB/sr5cAAAAASUVORK5CYII=)",
            },
        },
        '.game-panel': {
            width: '100%',
            paddingTop: '100%',
            position: 'relative',
            display: 'block',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            transform: 'translateZ(0px)',
            '& .img': {
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '100%',
                height: '100%',
                transition: 'all 0.3s ease 0s',
                background: 'rgb(49, 52, 60)',
            },
            '&:hover:not(.coming-soon) img': {
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease 0s',
            },
            '&:hover:not(.coming-soon) .hover-mask': {
                opacity: '1',
            },
            '& .hover-mask': {
                position: 'absolute',
                transition: 'all 0.3s linear 0s',
                left: '0%',
                top: '0%',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                fontSize: '0.75rem',
                opacity: '0',
                '& .house-edge': {
                    color: 'rgb(245, 246, 247)',
                    textAlign: 'right',
                    padding: '0.625rem 0.875rem 0px 0px',
                },
                '& .play-icon': {
                    transform: 'scale(1)',
                },
                '& .play-icon': {
                    fill: 'rgba(245, 246, 247, 0.9)',
                    width: '3rem',
                    height: '3rem',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-1.5rem',
                    marginTop: '-1.5rem',
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s ease 0s',
                },
            },
        },
        '.game-desc': {
            margin: '0.3125rem 0.625rem 0px',
            color: 'rgba(153, 164, 176, 0.6)',
            height: '1.5625rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .game-name': {
                wordBreak: 'break-all',
                flex: '1 1 auto',
                color: '#3e3e3e',
            },
            '& .help-btn-wrap': {
                position: 'relative',
                width: '1.125rem',
                height: '1.125rem',
                '& button': {
                    position: 'absolute',
                    width: '2.125rem',
                    height: '2.125rem',
                    left: '-0.5rem',
                    top: '-0.5rem',
                    padding: '0.5rem',
                    opacity: '0.6',
                    border: 'none',
                    padding: '0',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    '& svg': {
                        width: '1.4em',
                        height: '1.4em',
                        fill: 'rgba(153, 164, 176, 0.6)',
                    }
                },
            },
        },
        '.alice-carousel__dots': {
            margin: '20px 3px 5px !important'
        },
        '.info': {
            '& .tit': {
                color: 'rgb(125 127 129)',
                fontWeight: 'bold',
                fontSize: '1.375rem',
                letterSpacing: '-0.73px',
                lineHeight: '1.75rem',
            },
            '& .button': {
                marginTop: '3.125rem',
                width: '10.125rem',
                display: 'block',
                borderRadius: '6.25rem',
                height: '3rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s',
                border: 'none',
                '& .button-inner': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                }
            },
            '& .button-normal': {
                color: 'rgb(245, 246, 247)',
                boxShadow: 'rgb(29 34 37 / 10%) 0px 4px 8px 0px',
                backgroundColor: 'rgb(241, 149, 17)',
                backgroundImage: 'conic-gradient(from 1turn, rgb(241, 149, 17), rgb(246, 199, 34))',
            },
        },
        '.tabs-navs': {
            display: 'flex',
            alignItems: 'center',
            height: '2.25rem',
            position: 'relative',
            borderRadius: '1.125rem',
            backgroundColor: 'rgb(201 197 197)',
            color: 'rgb(245, 246, 247)',
            fontSize: '0.875rem',
            marginLeft: '0.625rem',
            marginBottom: '0.75rem',
            maxWidth: '14rem',
            '& button': {
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                backgroundColor: 'transparent',
            },
            '& .tabs-nav': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '1 1 0%',
                height: '100%',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                width: '100%',
                zIndex: '1',
            },
            '& .is-active': {
                color: 'rgb(245, 246, 247)',
                fontWeight: 'bold',
                borderRadius: '1.125rem',
                backgroundImage: 'linear-gradient(to left, rgb(215 215 217), rgb(114 193 185), rgb(130 207 68))',
            }
        },
        '.contest__top': {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            background: 'rgb(30, 32, 36)',
            padding: '0px 1rem 1rem 0px',
            '& .type': {
                width: '5.5625rem',
                height: '1.3125rem',
                lineHeight: '1.3125rem',
                fontSize: '1rem',
                fontWeight: '600',
                marginTop: "1rem",
                textAlign: 'center',
                color: 'rgb(93, 160, 0)',
                marginLeft: '0.625rem',
                backgroundImage: 'url(https://static.bc.game/static/media/grass_left.c0bdebd7.svg), url(https://static.bc.game/static/media/grass_right.3727bc58.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center, right center',
                backgroundSize: 'auto 100%',
            },
            '& .ttc': {
                textTransform: 'capitalize',
            },
            '& .title': {
                fontSize: '1.125rem',
                fontWeight: '600',
                lineHeight: '1.56',
                color: 'rgb(245, 246, 247)',
                margin: '0px 0px 0.75rem 0.625rem',
                textAlign: 'left',
            },
            '& .prize-amount': {
                height: '3rem',
                width: '16.375rem',
                padding: '0.625rem 1.25rem',
                borderRadius: '0.625rem',
                backgroundColor: 'rgba(49, 52, 60, 0.6)',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'rgb(246, 199, 34)',
                letterSpacing: '-1px',
            },
            '& .currency-icon': {
                width: '1.25rem',
                height: '1.25rem',
                marginRight: '0.5rem',
            },
            '& .currency-name': {
                color: 'rgb(245, 246, 247)',
                marginLeft: '0.5rem',
            },
            '& .bg-box': {
                flex: '4 1 0%',
                height: '9.5rem',
                borderRadius: '0.625rem',
                backgroundColor: 'rgba(49, 52, 60, 0.6)',
                textAlign: 'center',
                margin: '1rem 0px 0px 1rem',
                '& .title': {
                    color: 'rgba(153, 164, 176, 0.6)',
                    fontSize: '0.75rem',
                    lineHeight: '1.33',
                    marginTop: '1.625rem',
                    marginBottom: '1.125rem',
                    textAlign: 'center'
                },
                '& .contest-countdown': {
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'rgb(255, 255, 255)',
                    '& .count-item': {
                        display: 'flex',
                        alignItems: 'center',
                        '& .count-panel': {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            width: '3.375rem',
                            height: '4rem',
                            color: 'rgb(245, 246, 247)',
                            backgroundColor: 'rgb(53, 58, 67)',
                            overflow: 'hidden',
                            textAlign: 'center',
                            borderRadius: '0.625rem',
                            lineHeight: '1',
                            '&::before': {
                                content: "''",
                                position: 'absolute',
                                left: '0px',
                                bottom: '0px',
                                width: '100%',
                                height: '50%',
                                boxShadow: 'rgb(0 0 0 / 2%) 0px 2px 3px 0px',
                                backgroundImage: 'linear-gradient(rgb(30, 32, 36) -31%, rgb(53, 58, 67) 100%)',
                            },
                            '& .count-name': {
                                fontSize: '0.75rem',
                                transform: 'scale(0.7)',
                                margin: '0.5rem 0px 0.25rem',
                            },
                            '& .count-value': {
                                position: 'relative',
                                zIndex: '2',
                                fontSize: '1.375rem',
                                fontWeight: '600',
                            }
                        },
                        '& .count-line': {
                            fontSize: '1.5rem',
                            lineHeight: '1.875rem',
                            height: '1.875rem',
                            margin: '0px 0.625rem',
                            color: 'rgb(236, 236, 243)',
                        },
                    },
                },
            },
        },
        '.contest__status': {
            width: '100%',
            height: '4.5rem',
            borderTop: '1px solid rgb(36, 39, 44)',
            display: 'flex',
            alignItems: 'center',
            borderBottomRightRadius: '1.25rem',
            borderBottomLeftRadius: '1.25rem',
            background: 'rgb(30, 32, 36)',
            '& .user': {
                flex: '1 1 0%',
                paddingLeft: '2%',
                display: 'flex',
                alignItems: 'center',
                '& .avatar': {
                    width: '2.1875rem',
                    height: '2.1875rem',
                    borderRadius: '50%',
                    marginTop: '0.3125rem',
                },
                '& .user-name': {
                    color: 'rgb(245, 246, 247)',
                    marginLeft: '1rem',
                    fontWeight: '600',
                },
            },
            '& .myinfo-item': {
                padding: '0px 1% 0px 3%',
                lineHeight: '1.25rem',
                height: '2.5rem',
                position: 'relative',
                boxSizing: 'border-box',
            },
            '& .label': {
                fontSize: '0.75rem',
                color: 'rgba(153, 164, 176, 0.6)',
            },
            '& .coin': {
                display: 'inline-flex',
                verticalAlign: 'middle',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                '& .coin-icon': {
                    width: '1.4em',
                    height: '1.4em',
                    marginRight: '0.25em',
                },
            },
            '& .value': {
                color: 'rgb(219, 230, 236)',
                fontSize: '0.875rem',
            },
            '& .position': {
                flex: '1 1 0%',
            },
            '& .wager': {
                flex: '1 1 0%',
            },
            '& .reach': {
                display: 'flex',
                alignItems: 'center',
                flex: '1.5 1 0%',
                minWidth: '18.75rem',
                fontSize: '0.75rem',
                color: 'rgba(153, 164, 176, 0.6)',
                '& .flex-middle': {
                    display: 'flex',
                    alignItems: 'center',
                },
                '& .coin': {
                    color: 'rgb(245, 246, 247)',
                    marginLeft: '1rem',
                    marginRight: '0.375rem',
                    '& .locale': {
                        display: 'inline-block',
                    },
                    '& .amount-str': {
                        width: '6.6em',
                        display: 'inline-block',
                    },
                    '& .suffix': {
                        opacity: '0.5',
                    },
                },
            },
            '& .color-top': {
                color: 'rgb(93, 160, 0)',
                marginLeft: '0.375rem',
                fontWeight: '600',
            },
        }
    },
}))
