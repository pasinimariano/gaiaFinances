import React from 'react'
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

import { Pagination } from './modules/pagination'
import { OperationModal } from './operationModal'

export const OperationsTable = ({
  userOperations,
  paginationState,
  nextPage,
  prevPage,
  indexFirstOperation,
  indexLastOperation,
  updateOperation,
  openModal,
  handleChange,
  handleOpen,
  handleClose,
  classes
}) => {
  const headers = [
    'ID',
    'DESCRIPCION',
    'CATEGORIA',
    'STATUS',
    'IMPORTE',
    'FECHA'
  ]

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label='simple table'>
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
        <TableBody className={classes.tableBody}>
          {paginationState &&
            paginationState.map(transaction => (
              <TableRow
                key={transaction._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleOpen(transaction)}
              >
                <TableCell align='left'>{transaction._id}</TableCell>
                <TableCell align='left'>{transaction.description}</TableCell>
                <TableCell align='left'>{transaction.category}</TableCell>
                <TableCell align='left'>{transaction.status}</TableCell>
                <TableCell align='left'>${transaction.amount}</TableCell>
                <TableCell align='left'>{transaction.date}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          userOperations={userOperations}
          indexFirstOperation={indexFirstOperation}
          indexLastOperation={indexLastOperation}
          classes={classes}
        />
      </Table>
    </TableContainer>
  )
}
