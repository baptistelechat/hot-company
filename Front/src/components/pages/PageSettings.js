import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SelectProfil from '../select/SelectProfil'
import ModalCreateUser from '../modal/ModalCreateUser'
import ButtonGoHome from '../button/floatingButton/ButtonGoHome'

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
      <ButtonGoHome/>
    </div>
  );
}

export default PageSettings;
