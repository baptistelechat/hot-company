import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  fab: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  fontAwesomeIcon: {
    fontSize: '32px',
    paddingRight: theme.spacing(2),
  },
}));

const ButtonStopCooking = ({stopHandler}) => {

  const classes = useStyles()

  return (
    <Fab variant="extended" className={classes.fab} onClick={stopHandler}>
      Stop
    </Fab>
  );
}

export default ButtonStopCooking;
