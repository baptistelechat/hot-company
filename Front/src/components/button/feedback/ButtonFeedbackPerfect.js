import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  perfectFab:{
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    background: 'linear-gradient(45deg, #aed581 10%, #8bc34a 75%)',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:hover': {
      background: 'linear-gradient(45deg, #8bc34a 10%, #689f38 75%)',
   },
  }
}));

const ButtonFeedbackPerfect = () => {
  
  const classes = useStyles()
  const history = useHistory()

  const sendFeedback = () => {
    // TODO Test if cookingTime didn't change
    toast.success('Perfect cooked !', {
      duration: 5000,
      icon: '🍞',
      style: {
        background: '#8bc34a',
        color: '#000000',
      }
    })
    history.push('/')
  }

  return (
    <div>
      <Fab variant="extended" className={classes.perfectFab} onClick={sendFeedback}>
        Perfect
      </Fab>
    </div>
  );
}

export default ButtonFeedbackPerfect;
