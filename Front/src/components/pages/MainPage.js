import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import MakeToast from '../button/ButtonMakeToast'
import SelectBread from '../select/SelectBread'

const useStyles = makeStyles((theme) => ({
  btn: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
}));

const MainPage = () => {
  
  const classes = useStyles()
  const history = useHistory()

  return (
    <div>
      <MakeToast/>
      <SelectBread/>
      <IconButton aria-label="settings" className={classes.btn} onClick={() => history.push('/settings')}>
        <SettingsIcon fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default MainPage;
