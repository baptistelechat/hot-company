import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableSettingsUser from '../table/TableSettingsUser'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}))

const PageSettingsUser = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableSettingsUser/>
    </div>
  );
}

export default PageSettingsUser;
