import React from 'react';
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()

  return (
    <div className={"header"}>
      <img src={logo} className={classes.logo} alt="logo" onClick={() => history.push('/')}/>
      <h1 className={classes.h1} onClick={() => history.push('/')}>
        Hot Company
      </h1>
    </div>
  );
}

export default HotCompanyHeader;
