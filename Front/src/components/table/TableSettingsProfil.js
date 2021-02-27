import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '50vw',
  },
  container: {
    maxHeight: '45vh',
    [theme.breakpoints.up('sm')]: {
      maxHeight: '50vh',
    },
  }
}))

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#ffca28',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#fff9c4',
    },
  },
}))(TableRow);

const today = () => {
  
  const today = new Date()

  let d = today.getDate()
  let m = today.getMonth()+1
  let y = today.getFullYear()

  if(d<10) 
  {
      d= '0'+d;
  } 

  if(m<10) 
  {
      m = '0'+m;
  } 

  return `${d}/${m}/${y}`
}

function createData(breadType, lastCooking, cookingTime) {
  return { breadType, lastCooking, cookingTime };
}

const rows = [
  createData('Frozen yoghurt', today(), 159),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
  createData('Ice cream sandwich', today(), 237),
];

const TableSettingsProfil = () => {

  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Bread Type</StyledTableCell>
            <StyledTableCell align="left">Last Cooking</StyledTableCell>
            <StyledTableCell align="left">Cooking Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow hover key={row.breadType} className={classes.tableRow}>
              <StyledTableCell component="th" scope="row">
                {row.breadType}
              </StyledTableCell>
              <StyledTableCell align="left">{row.lastCooking}</StyledTableCell>
              <StyledTableCell align="left">{row.cookingTime}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableSettingsProfil;
