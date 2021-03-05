import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';
import Fab from '@material-ui/core/Fab';

import ButtonGoHome from '../button//floatingButton/ButtonGoHome'
import ButtonGoBack from '../button/floatingButton/ButtonGoBack'

const useStyles = makeStyles((theme) => ({
  btn: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100
  },
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    paddingRight:theme.spacing(2),
    paddingLeft:theme.spacing(2),
    height:"auto"
  },
  externalColumn: {
    flex: '5%',
    [theme.breakpoints.up('sm')]: {
      flex: '25%',
    },
  },
  dataColumn: {
    flex: '90%',
    [theme.breakpoints.up('sm')]: {
      flex: '50%',
    },
  },
  fab: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: '#ffca28',
    textTransform:'lowercase',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#e0931f',
    },
  },
  h3:{
    marginTop: theme.spacing(4)
  }
}));

const PageSettingsChange = () => {
  
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const [cookingTime, setCookingTime] = useState(parseInt(location.state.cookingTime))

  return (
    <div>
      <ButtonGoBack/>
      <ButtonGoHome/>
      <div style={{display: 'flex'}}>
        <div className={classes.externalColumn}></div>
          <div className={classes.dataColumn}>
              <div style={{display: 'flex'}}>
                <div style={{flex: '45%'}}>
                  <h3 className={classes.h3}>Last Cooking :</h3>
                  <h3 className={classes.h3}>Bread Type :</h3>
                  <h3 className={classes.h3}>Cooking Time :</h3>
                </div>
                <div style={{flex: '55%'}}>
                  <h3 className={classes.h3}>{location.state.lastCooking}</h3>
                  <h3 className={classes.h3}>{location.state.breadType}</h3>
                  <div>
                    <Fab size="small" color="primary" aria-label="add" className={classes.fab} onClick={() => setCookingTime(cookingTime-1)}>
                      <RemoveIcon/>
                    </Fab>
                    <Fab
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="add"
                      className={classes.fab}
                    >{cookingTime}s</Fab>
                    <Fab size="small" color="primary" aria-label="add" className={classes.fab} onClick={() => setCookingTime(cookingTime+1)}>
                      <AddIcon/>
                    </Fab>
                    <Fab size="small" color="primary" aria-label="add" className={classes.fab} onClick={() => setCookingTime(parseInt(location.state.cookingTime))}>
                      <RestoreIcon/>
                    </Fab>
                  </div>
                </div>
              </div>
          </div>
        <div className={classes.externalColumn}></div>
      </div>
    </div>
  );
}

export default PageSettingsChange;
