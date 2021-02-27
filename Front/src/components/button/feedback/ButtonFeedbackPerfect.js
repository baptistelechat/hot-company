import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <div>
      <Fab variant="extended" className={classes.perfectFab} onClick={() => history.push('/')}>
        Perfect
      </Fab>
    </div>
  );
}

export default ButtonFeedbackPerfect;
