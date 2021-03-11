import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  fab: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    minWidth: 200,
    maxWidth: 200
  },
  fontAwesomeIcon: {
    fontSize: '32px',
    paddingRight: theme.spacing(2),
  },
}));

const ButtonMakeToast = () => {

  const classes = useStyles()
  const history = useHistory()

  return (
    <Fab variant="extended" onClick={() => history.push("/cooking")} className={classes.fab}>
      <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faBreadSlice}/>
      Toast !
    </Fab>
  );
}

export default ButtonMakeToast;
