import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../img/toaster-logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "25vh",
    [theme.breakpoints.up('sm')]: {
      height: "28vh",
    },
  },
  h1: {
    marginBottom: theme.spacing(3),
  },
}));

const HotCompanyHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  var exceptedPath = ["/", "/cooking", "/feedback", "/login"];

  const isInExceptedPath = (value) => {
    return exceptedPath.includes(value);
  };

  const goToMainMenu = () => {
    if (!isInExceptedPath(location.pathname)) {
      history.push("/");
    }
  };

  return (
    <div className={"header"}>
      <img
        src={logo}
        className={classes.logo}
        alt="logo"
        onClick={goToMainMenu}
      />
      <h1 className={classes.h1} onClick={goToMainMenu}>
        Hot Company
      </h1>
    </div>
  );
};

export default HotCompanyHeader;
