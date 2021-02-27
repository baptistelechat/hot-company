import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableSettingsProfil from '../table/TableSettingsProfil'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}))

const PageSettingsProfil = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableSettingsProfil/>
    </div>
  );
}

export default PageSettingsProfil;
