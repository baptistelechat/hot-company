import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';
import { connect } from 'react-redux'

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

const ButtonFeedbackNotEnough = ({currentBread}) => {
  
  const classes = useStyles()
  const history = useHistory()

  const sendFeedback = () => {
    // TODO Test if cookingTime change
    const newBread = {
      ...currentBread,
      cookingTime: currentBread.cookingTime+5
    }
    axios.post(process.env.REACT_APP_API_URL_BREADS, newBread)
    .then(res => {
      console.log(res);
      console.log(res.data);
      if (res.status === 200) {
        toast.success('Not enough cooked !', {
          duration: 5000,
          icon: '🍞',
          style: {
            background: '#2196f3',
            color: '#000000',
          }
        })
        history.push('/')
      } else {
      console.log(res);
      console.log(res.data);
      toast.success('Error return by the server, please try again or visit error log. !', {
          duration: 5000,
          style: {
            background: '#e57373',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#b71c1c',
            secondary: '#FFFFFF'
          },
        })
      }
    })
  }

  return (
    <div>
      <Fab variant="extended" className={classes.notEnoughFab} onClick={sendFeedback}>
        Not Enough
      </Fab>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentBread: state.currentBread.bread
  }
}

export default connect(mapStateToProps)(ButtonFeedbackNotEnough);
