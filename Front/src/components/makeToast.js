import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    padding: theme.spacing(5),
  },
  fontAwesomeIcon: {
    fontSize: '32px',
    padding: theme.spacing(2),
  },
}));

const MakeToast = () => {

  const classes = useStyles()

  return (
    <div>
      <Fab variant="extended">
        <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faBreadSlice}/>
        Toast !
      </Fab>
    </div>
  );
}

export default MakeToast;
