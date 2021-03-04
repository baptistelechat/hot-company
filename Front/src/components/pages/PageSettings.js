import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SelectProfil from '../select/SelectProfil'
import ModalCreateUser from '../modal/ModalCreateUser'

const useStyles = makeStyles((theme) => ({
  btn: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  fab: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));

const PageSettings = () => {

  const classes = useStyles()
  const history = useHistory()
  const [users, setUsers] = useState(["Baptiste","Charly","Léopold","Can","+ Create user"]);
  const [selectUser, setSelectUser] = useState("Baptiste");
  const [openDialog, setOpenDialog] = useState(false)

  const nextPage = () => {
    if (selectUser !== '+ Create user') {
      history.push(`/settings/${selectUser}`)
    } else {
      setOpenDialog(true)
    }
  }

  return (
    <div>
      <ModalCreateUser openDialog={openDialog} setOpenDialog={setOpenDialog} users={users} setUsers={setUsers} setSelectUser={setSelectUser}/>
      <SelectProfil users={users} selectUser={selectUser} setSelectUser={setSelectUser}/>
      <Fab variant="extended" className={classes.fab} onClick={nextPage}>
        Next
        <NavigateNextIcon/>
      </Fab>
      <IconButton aria-label="settings" className={classes.btn} onClick={() => history.push('/')}>
        <HomeIcon fontSize="large"/>
      </IconButton>
    </div>
  );
}

export default PageSettings;
