import React from 'react';
import logo from '../img/toaster-logo.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    "height": "30vmin",
    "pointer-events": "none",
    "marginTop": theme.spacing(3)
  }
}));

const HotCompanyHeader = () => {

  const classes = useStyles();

  return (
    <div className={"header"}>
      <img src={logo} className={classes.logo} alt="logo" />
      <h1>
        Hot Company
      </h1>
    </div>
  );
}

export default HotCompanyHeader;
