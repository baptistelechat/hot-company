import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  btn_home: {
    position: 'fixed',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 100,
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 100,
    },
  }
}));

const ButtonGoHome = () => {
  
  const classes = useStyles()
  const history = useHistory()

  return (
    <IconButton aria-label="home" className={classes.btn_home} onClick={() => history.push('/')}>
        <HomeIcon fontSize="large"/>
      </IconButton>
  );
}

export default ButtonGoHome;
