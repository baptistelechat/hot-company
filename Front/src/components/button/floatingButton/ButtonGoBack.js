import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  btn_back: {
    position: 'fixed',
    bottom: theme.spacing(7),
    right: theme.spacing(1),
    zIndex: 100,
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(10),
      zIndex: 100
    },
  },
}));

const ButtonGoBack = () => {
  
  const classes = useStyles()
  const history = useHistory()

  return (
    <IconButton aria-label="home" className={classes.btn_back} onClick={() => history.goBack()}>
        <ArrowBackIcon fontSize="large"/>
      </IconButton>
  );
}

export default ButtonGoBack;
