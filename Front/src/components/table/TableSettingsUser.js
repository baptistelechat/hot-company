import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SettingsIcon from '@material-ui/icons/Settings';
import ModalAddNewBread from '../modal/ModalAddNewBread'

const useStyles = makeStyles((theme) => ({
  table: {
    width: '50vw',
  },
  container: {
    maxHeight: '45vh',
    [theme.breakpoints.up('sm')]: {
      maxHeight: '50vh',
    },
  },
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

const TableSettingsUser = () => {

  const classes = useStyles();
  const history = useHistory();
  const {user} = useParams()
  const [rows, setRows] = useState([{
    "breadType": "Pain de mie",
    "lastCooking": "04/03/2021",
    "cookingTime": 120,
    "changeSettings": <IconButton aria-label="settings" onClick={() => history.push({
      pathname:`/settings/${user}/0`,
      state:{
        breadType: "Pain de mie",
        lastCooking: "04/03/2021",
        cookingTime: 120,
      }})}><NavigateNextIcon fontSize="medium"/></IconButton>
  }])

  const today = () => {
    const today = new Date()
    let d = today.getDate()
    let m = today.getMonth()+1
    let y = today.getFullYear()
    if(d<10) 
    {
      d = '0'+d;
    } 
    if(m<10) 
    {
      m = '0'+m;
    } 
    return `${d}/${m}/${y}`
  }
 
  const addNewBread = (breadType, cookingTime) => {
    const data = {
      "id":rows.length,
      "breadType": breadType,
      "lastCooking": today(),
      "cookingTime": cookingTime,
      "changeSettings": <IconButton aria-label="settings" onClick={() => history.push({
        pathname:`/settings/${user}/${rows.length}`,
        state:{
          breadType: breadType,
          lastCooking: today(),
          cookingTime: cookingTime,
        }})}><NavigateNextIcon fontSize="medium"/></IconButton>
    }
    setRows([...rows, data])
  }

  const generateRows = () => {
    return rows.map((row) => (
      <StyledTableRow hover key={row.breadType} className={classes.tableRow}>
        <StyledTableCell component="th" scope="row">{row.breadType}</StyledTableCell>
        <StyledTableCell align="left">{row.cookingTime}</StyledTableCell>
        <StyledTableCell align="center">{row.changeSettings}</StyledTableCell>
      </StyledTableRow>
    ))
  }

  return (
    <div>
      <ModalAddNewBread addNewBread={addNewBread}/>
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Bread Type</StyledTableCell>
              <StyledTableCell align="left">Cooking Time</StyledTableCell>
              <StyledTableCell align="center"><SettingsIcon fontSize="medium"/></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {generateRows()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default TableSettingsUser;
