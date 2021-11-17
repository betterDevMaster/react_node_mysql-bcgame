import { makeStyles } from '@material-ui/core/styles'

export const footerStyle = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.footer': {
            marginTop: '2.5rem',
            backgroundColor: 'rgb(34 41 68)',
            padding: '48px 0px 0px',
        },
        '.footer-wrap': {
            width: '90%',
            margin: '0px auto',
            maxWidth: '1328px',
            padding: '0px 16px',
            lineHeight: '2',
            '& .logo': {
                width: '160px',
                marginBottom: '2px'
            }
        },
        '.footer__desc': {
            width: '360px',
            paddingRight: '24px',
            fontSize: '12px',
            lineHeight: '3',
            color: 'rgba(153, 164, 176, 0.8)',
        },
        '.v-line': {
            borderRight: '1px solid rgba(84, 97, 106, 0.15)',
        },
        '.footer__entries': {
            padding: '0px 24px 0px 48px',
            whiteSpace: 'nowrap',
            lineHeight: '2.5',
            marginRight: '40px',
            '& a': {
                display: 'block',
                fontSize: '12px',
                color: 'rgb(192, 203, 213)',
                textTransform: 'uppercase',
            },
        },
        '.title': {
            fontSize: '12px',
        },
        '.ttu': {
            textTransform: 'uppercase',
        },
        '.contact-us': {
            maxWidth: '560px',
            color: 'rgba(153, 164, 176, 0.8)',
            '& .flexWrap': {
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                '& .flex-group': {
                    marginRight: '6px',
                },
                '& .flex-group-right': {
                    marginLeft: '60px',
                }
            },
        },
        '.item': {
            fontSize: '12px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            '& .name': {
                marginRight: '4px',
            },
            '& a,& a:visited,& a:active': {
                color: 'rgb(93, 160, 0)',
                textDecoration: 'none',
            },
        },
        '.footer__currencies': {
            marginTop: '24px',
            '& .currency-list': {
                marginTop: '10px',
                display: 'flex',
                flexWrap: 'wrap',
                '& .currency-item': {
                    marginRight: '16px',
                    marginBottom: '12px',
                    position: 'relative',
                    '& svg': {
                        verticalAlign: 'top',
                        fill: 'rgb(85, 91, 101)',
                    },
                },
            },

        },
        '.footer_license': {
            display: 'flex',
            borderTop: '1px solid rgba(84, 97, 106, 0.15)',
            borderBottom: '1px solid rgba(84, 97, 106, 0.15)',
            borderLeft: 'none',
            borderRight: 'none',
            padding: '20px 0px',
            marginTop: '30px',
            '& .licenes-by': {
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0px',
                maxWidth: '660px',
                '& img': {
                    width: '54px',
                    height: '51px',
                    marginRight: '30px',
                    verticalAlign: 'top',
                },

                '& .licenes-desc': {
                    fontSize: '13px',
                    lineHeight: '1.4',
                    color: 'rgba(153, 164, 176, 0.8)',
                },
            },
            '& .footer__cert': {
                display: 'flex',
                alignItems: 'center',
                marginLeft: '40px',
                paddingLeft: '50px',
                justifyContent: 'space-between',
                flex: '1 1 0%',
                borderLeft: '1px solid rgba(84, 97, 106, 0.15)',
                '& a': {
                    margin: '0px 10px',
                    '& svg': {
                        fill: 'rgb(85, 91, 101)',
                    }
                },
            },
        },
        '.footer__bottom': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '120px',
            '& .btc-price': {
                fontSize: '12px',
                color: 'rgb(84, 97, 106)',
            },
            '& .footer__copyright': {
                fontSize: '12px',
                color: 'rgba(153, 164, 176, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& .to-top': {
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(53, 60, 66, 0.4)',
                    color: 'rgb(153, 164, 176)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                    marginLeft: '14px',
                    lineHeight: 'normal',
                    cursor: 'pointer',
                    '& svg': {
                        fill: 'rgb(93, 160, 0)',
                        width: '8px',
                        height: '8px',
                        transform: 'rotateZ(-90deg)',
                    }
                },
            },
        }
    },
}))
