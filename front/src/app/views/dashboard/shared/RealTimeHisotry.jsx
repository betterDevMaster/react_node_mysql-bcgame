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
import { withStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'

const columns = [
    { id: 'name', label: 'Game', fontSize: '12px' },
    { id: 'player', label: 'Player', align: 'center', fontSize: '12px' },
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

function createData(name, player, betId, payout) {
    const profit = betId / payout
    return { name, player, betId, payout, profit }
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1203500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 126793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210127125, 8515767),
]

const RealTimeHisotry = ({ list, onChange }) => {
    const theme = useTheme()
    const isXSMobile = useMediaQuery(theme.breakpoints.down('xs'))

    const MuiTableCell = withStyles({
        root: {
            borderBottom: 'none',
            borderRadius: '0.5rem',
            fontSize: isXSMobile ? '12px' : null,
            padding: isXSMobile ? '.1rem' : '.7rem',
        },
    })(TableCell)

    const [testArr, setTestArr] = useState(rows)

    useEffect(() => {
        setTimeout(() => {
            setTestArr(shuffleArray())
        }, 1);
        setInterval(() => {
            setTestArr(shuffleArray())
        }, 500)
    }, [])

    const shuffleArray = () => {
        const shuffleArr = []
        for (let index = 0; index < 8; index++) {
            let item = rows[Math.floor(Math.random() * rows.length)]
            shuffleArr.push(item)
        }
        return shuffleArr
    }

    return (
        <Card elevation={3} className="px-5 py-5">
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <MuiTableCell
                                    key={column.id}
                                    align={column.align}
                                >
                                    {column.label}
                                </MuiTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => { */}
                        {testArr.map((row, index) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
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
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default RealTimeHisotry
