import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import { connect } from 'react-redux'
import ModalAddNewBread from "../modal/ModalAddNewBread";
import {breadsApiCall} from '../../redux/breads/actionBreads'
import { setCurrentBread } from "../../redux/currentBread/actionCurrentBread";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "50vw",
  },
  container: {
    maxHeight: "100vh",
    [theme.breakpoints.down("lg")]: {
      maxHeight: "60vh",
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "35vh",
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

const TableSettingsUser = ({currentUser, breadsApiCall, setCurrentBread}) => {
  const classes = useStyles();
  const history = useHistory();
  // TODO Toggle mocked data to API
  // const [rows, setRows] = useState([breadsApiCall(currentUser)]);
  const [rows, setRows] = useState([
    {
      id: 0,
      breadType: "Pain de mie",
      lastCooking: "04/03/2021",
      cookingTime: 120000,
    },
  ]);

  // const today = () => {
  //   const today = new Date();
  //   let d = today.getDate();
  //   let m = today.getMonth() + 1;
  //   let y = today.getFullYear();
  //   if (d < 10) {
  //     d = "0" + d;
  //   }
  //   if (m < 10) {
  //     m = "0" + m;
  //   }
  //   return `${d}/${m}/${y}`;
  // };

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
          
          <StyledTableCell align="left">{row.cookingTime/1000}</StyledTableCell>
          
          <StyledTableCell align="center">
            <IconButton
              aria-label="settings"
              onClick={() => {
                  setCurrentBread(row)
                  history.push(`/settings/${currentUser.name}/${row.id}`)
                }
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
      <h3 style={{marginTop:0}}>{currentUser.name}</h3>
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Bread Type</StyledTableCell>
              <StyledTableCell align="left">Cooking Time</StyledTableCell>
              <StyledTableCell align="center">
                <ModalAddNewBread/>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{generateRows()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser.user,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    breadsApiCall: (user) => {
      dispatch(breadsApiCall(user))
    },
    setCurrentBread: (bread) => {
      dispatch(setCurrentBread(bread))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSettingsUser);
