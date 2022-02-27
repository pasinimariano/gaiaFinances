import React, { useEffect, useState } from 'react'
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Typography
} from '@material-ui/core'

export const LastOperations = ({ lastTransactions, classes }) => {
  const headers = ['DESCRIPCION', 'STATUS', 'IMPORTE', 'FECHA']

  const getDate = date => {
    return new Date(date).toDateString()
  }
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow className={classes.tableHeaders}>
            {headers.map(header => {
              return (
                <TableCell key={header} align='left'>
                  <Typography className={classes.header}>{header}</Typography>
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {lastTransactions &&
            lastTransactions.map(transaction => (
              <TableRow
                key={transaction._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='left'>{transaction.description}</TableCell>
                <TableCell align='left'>{transaction.status}</TableCell>
                <TableCell align='left'>${transaction.amount}</TableCell>
                <TableCell align='left'>{getDate(transaction.date)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
