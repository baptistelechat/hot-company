import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import toast from 'react-hot-toast';
import WifiIcon from '@material-ui/icons/Wifi';

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

const ButtonLoginWifi = ({ssid, password, security}) => {

  const classes = useStyles()
  const history = useHistory()

  const connect = () => {
    if (ssid !== "" && password !== "" && security !== "") {
      history.push("/")
      toast.success('You are connected !', {
        duration: 5000,
        style: {
          background: '#ffd222',
          color: '#000000',
        },
        iconTheme: {
          primary: '#e0931f',
          secondary: '#000000'
        },
      })
    } else {
      toast.error("Connexion failed !", {
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
  }

  return (
    <Fab variant="extended" onClick={connect} className={classes.fab}>
      <WifiIcon className={classes.icon}/>
      Connect
    </Fab>
  );
}

export default ButtonLoginWifi;
