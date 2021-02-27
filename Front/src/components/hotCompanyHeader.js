import React from 'react';
import logo from '../img/toaster-logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "30vh",
  },
  h1: {
    marginBottom: theme.spacing(4)
  }
}));

const HotCompanyHeader = () => {

  const classes = useStyles();

  return (
    <div className={"header"}>
      <img src={logo} className={classes.logo} alt="logo" />
      <h1 className={classes.h1}>
        Hot Company
      </h1>
    </div>
  );
}

export default HotCompanyHeader;
