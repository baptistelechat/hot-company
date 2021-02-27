import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  notEnoughFab:{
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    background: 'linear-gradient(45deg, #64b5f6 10%, #2196f3 75%)',
    '&:hover': {
      background: 'linear-gradient(45deg, #2196f3 10%, #1976d2 75%)',
   },
  }
}));

const ButtonFeedbackNotEnough = () => {
  
  const classes = useStyles()
  const history = useHistory()

  return (
    <div>
      <Fab variant="extended" className={classes.notEnoughFab} onClick={() => history.push('/')}>
        Not Enough
      </Fab>
    </div>
  );
}

export default ButtonFeedbackNotEnough;
