import React from "react";
import { useHistory, useLocation } from "react-router-dom"
import logo from "../img/toaster-logo.png"
import { makeStyles } from "@material-ui/core/styles"
import HamburgerMenu from './HamburgerMenu'

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "25vh",
    [theme.breakpoints.down('md')]: {
      height: "21vh",
    },
    [theme.breakpoints.down('sm')]: {
      height: "18vh",
    },
  },
  h1: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      fontSize: "150%",
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      fontSize: "125%",
    },
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
        <HamburgerMenu className={classes.hamburgerMenu}/>

        <img
          id="mainLogo"
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

}

export default HotCompanyHeader;
