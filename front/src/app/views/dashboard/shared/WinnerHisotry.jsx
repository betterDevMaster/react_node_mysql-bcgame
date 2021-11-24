import React, { useEffect, useState } from 'react'
import {
    Card,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableContainer,
    TableRow,
    useMediaQuery,
} from '@material-ui/core'
import { withStyles, styled, useTheme } from '@material-ui/core/styles'

const columns = [
    { id: 'name', label: 'Game', fontSize: '12px' },
    {
        id: 'betId',
        label: 'Bet ID',
        fontSize: '12px',
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'payout',
        label: 'Payout',
        fontSize: '12px',
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'profit',
        label: 'Profit',
        fontSize: '12px',
        align: 'right',
        format: (value) => value.toFixed(6),
    },
]

function createData(name, betId, payout) {
    const profit = betId / payout
    return { name, betId, payout, profit }
}

const rows = [
    createData('India', 1324171354, 3287263),
    createData('China', 1203500365, 9596961),
    createData('Italy', 60483973, 301340),
    createData('United States', 327167434, 9833520),
]

const WinnerHisotry = ({ list, onChange }) => {
    const theme = useTheme()
    const isXSMobile = useMediaQuery(theme.breakpoints.down('xs'))

    const MuiTableCell = withStyles({
        root: {
            borderBottom: 'none',
            fontSize: isXSMobile ? '12px' : null,
            padding: isXSMobile ? '.1rem' : '.7rem',
        },
    })(TableCell)
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }))

    return (
        <Card elevation={3} >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table aria-label="sticky table">
                    <TableBody>
                        {/* {rows.map((row) => { */}
                        {rows.map((row, index) => {
                            return (
                                <StyledTableRow
                                    key={index}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id]
                                        return (
                                            <MuiTableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </MuiTableCell>
                                        )
                                    })}
                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default WinnerHisotry
