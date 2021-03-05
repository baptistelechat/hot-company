import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ModalAddNewBread from "../modal/ModalAddNewBread";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "50vw",
  },
  container: {
    maxHeight: "45vh",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "50vh",
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffca28",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff9c4",
    },
  },
}))(TableRow);

const TableSettingsUser = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useParams();
  const [rows, setRows] = useState([
    {
      id: 0,
      breadType: "Pain de mie",
      lastCooking: "04/03/2021",
      cookingTime: 120,
    },
  ]);

  const today = () => {
    const today = new Date();
    let d = today.getDate();
    let m = today.getMonth() + 1;
    let y = today.getFullYear();
    if (d < 10) {
      d = "0" + d;
    }
    if (m < 10) {
      m = "0" + m;
    }
    return `${d}/${m}/${y}`;
  };

  const addNewBread = (breadType, cookingTime) => {
    console.log(rows);
    let id = rows.length;
    const data = {
      id: id,
      breadType: breadType,
      lastCooking: today(),
      cookingTime: cookingTime,
    };
    setRows([...rows, data]);
  };

  const deleteBread = (bread) => {
    let tmpRows = rows.filter(item => item !== bread)
    setRows([...tmpRows]);
  };

  const generateRows = () => {
    if (rows.length > 0) {
    return rows.map((row) => (
        <StyledTableRow hover key={row.breadType} className={classes.tableRow}>
          <StyledTableCell component="th" scope="row">
            {row.breadType}
          </StyledTableCell>
          <StyledTableCell align="left">{row.cookingTime}</StyledTableCell>
          <StyledTableCell align="center">
            <IconButton
              aria-label="settings"
              onClick={() =>
                history.push({
                  pathname: `/settings/${user}/${row.id}`,
                  state: {
                    breadType: row.breadType,
                    lastCooking: today(),
                    cookingTime: row.cookingTime,
                  },
                })
              }
            >
              <NavigateNextIcon fontSize="medium" />
            </IconButton>
            <IconButton onClick={() => deleteBread(row)}>
              <DeleteForeverIcon />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
      ));
    }
    return null;
  };

  return (
    <div>
      <h3>{user}</h3>
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Bread Type</StyledTableCell>
              <StyledTableCell align="left">Cooking Time</StyledTableCell>
              <StyledTableCell align="center">
                <ModalAddNewBread addNewBread={addNewBread} />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{generateRows()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableSettingsUser;
