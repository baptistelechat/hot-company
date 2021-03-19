import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableSettingsUser from '../table/TableSettingsUser'

import ButtonGoHome from '../button/floatingButton/ButtonGoHome'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

const PageSettingsUser = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableSettingsUser/>
      {/* <ButtonGoBack/> */}
      <ButtonGoHome/>
    </div>
  );
}

export default PageSettingsUser;
