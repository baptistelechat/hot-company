import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SelectProfil from '../select/SelectProfil'
import ModalCreateUser from '../modal/ModalCreateUser'
import ButtonGoHome from '../button/floatingButton/ButtonGoHome'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  fab: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    minWidth: 200,
    maxWidth: 200
  },
  btn: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const PageSettings = ({currentUser}) => {

  const classes = useStyles()
  const history = useHistory()
  const [openDialog, setOpenDialog] = useState(false)

  const nextPage = () => {
    if (currentUser.name !== '+ Create user') {
      history.push(`/settings/${currentUser.name}`)
    } else {
      setOpenDialog(true)
    }
  }

  return (
    <div>
      <ModalCreateUser openDialog={openDialog} setOpenDialog={setOpenDialog}/>
      <SelectProfil/>
      <Fab variant="extended" className={classes.fab} onClick={nextPage}>
        Next
        <NavigateNextIcon/>
      </Fab>
      <ButtonGoHome/>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps)(PageSettings);
