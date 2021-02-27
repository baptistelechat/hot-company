import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SelectProfil from '../select/SelectProfil'

const useStyles = makeStyles((theme) => ({
  btn: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  fab: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));

const PageSettings = () => {

  const classes = useStyles()
  const history = useHistory()

  return (
    <div>
      <SelectProfil/>
      <Fab variant="extended" className={classes.fab} onClick={() => history.push('/settings/profil')}>
        Next
        <NavigateNextIcon/>
      </Fab>
      <IconButton aria-label="settings" className={classes.btn} onClick={() => history.push('/')}>
        <NavigateBeforeIcon fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default PageSettings;
