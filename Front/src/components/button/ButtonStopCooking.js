import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  fab: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  icon: {
    fontSize: '32px',
    paddingRight: theme.spacing(2),
  },
}));

const ButtonStopCooking = ({stopHandler}) => {

  const classes = useStyles()

  //TODO Test if button stop cooking process

  return (
    <Fab variant="extended" className={classes.fab} onClick={stopHandler}>
      <CancelIcon className={classes.icon}/>
      Stop
    </Fab>
  );
}

export default ButtonStopCooking;
