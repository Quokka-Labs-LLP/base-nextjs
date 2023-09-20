'use client'

import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'

export const TableWrapper = ({
  children,
  maxHeight = 440,
}: {
  children: React.ReactNode
  maxHeight?: number
}) => (
  <TableContainer sx={{ maxHeight }}>
    <Table stickyHeader aria-label='sticky table'>
      {children}
    </Table>
  </TableContainer>
)

export const PaperWrapper = ({ children }: { children: React.ReactNode }) => (
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>{children}</Paper>
)

export const TableHeadWrapper = ({ children }: { children: React.ReactNode }) => (
  <TableHead>
    <TableRow>{children}</TableRow>
  </TableHead>
)

export const TableBodyWrapper = ({ children }: { children: React.ReactNode }) => (
  <TableBody>{children}</TableBody>
)

export const TableRowWrapper = ({ children }: { children: React.ReactNode }) => (
  <TableRow>{children}</TableRow>
)

export const TableCellWrapper = ({ children }: { children: React.ReactNode }) => (
  <TableCell>{children}</TableCell>
)
export const PaginationWrapper = ({ rows }: { rows: any[] }) => {
  const theme = useTheme()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component='div'
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      color={theme.palette.primary.main}
    />
  )
}
