import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  tooMuchFab:{
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    background: 'linear-gradient(45deg, #e57373 10%, #f44336 75%)',
    '&:hover': {
      background: 'linear-gradient(45deg, #f44336 10%, #d32f2f 75%)',
   },
  }
}));

const ButtonFeedbackTooMuch = () => {
  
  const classes = useStyles()
  const history = useHistory()
  
  const sendFeedback = () => {
    toast.success('Too much cooked !', {
      duration: 5000,
      icon: '🍞',
      style: {
        background: '#f44336',
        color: '#000000',
      }
    })
    history.push('/')
  }

  return (
    <div>
      <Fab variant="extended" className={classes.tooMuchFab} onClick={sendFeedback}>
        Too Much
      </Fab>
    </div>
  );
}

export default ButtonFeedbackTooMuch;
