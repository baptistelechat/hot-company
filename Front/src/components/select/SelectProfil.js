import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux'
import { usersApiCall } from '../../redux/users/actionUsers'
import { setCurrentUser } from '../../redux/currentUser/actionCurrentUser'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 200,
    maxWidth: 200,
  },
  selectMenu: {
    fontSize: '22px',
    color: theme.palette.text.primary,
    '&:before': {
      borderColor: theme.palette.text.primary,
    },
    '&:after': {
      borderColor: theme.palette.text.primary,
    }
  },
  inputLabel: {
    color: theme.palette.text.primary,
  }
}));

const SelectProfil = ({setCurrentUser, usersApiCall}) => {

  const classes = useStyles();

  const users = [
    {
      "id":0,
      "name":"Baptiste"
    },
    {
      "id":1,
      "name":"Léopold"
    },
    {
      "id":2,
      "name":"Charly"
    },
    {
      "id":3,
      "name":"Can"
    },
    {
      "id":4,
      "name":"+ Create user"
    },
  ]
  // TODO Toggle mocked data to API
  // const users = usersApiCall()
  const [value, setValue] = useState('Baptiste');

  const handleChange = (index) => {
    const data = users[index]
    console.log(data)
    setCurrentUser(data)
    setValue(data.name)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="simple-select-profile"
          id="simple-select-profil"
          value={value}
          className={classes.selectMenu}
        >
          {users.map((user, index) => {
            return(<MenuItem key={index} value={user.name} onClick={()=> handleChange(index)}>{user.name}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    // users: state.users.users,
    // currentUser: state.currentUser.user,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usersApiCall: () => {
      dispatch(usersApiCall())
    },
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectProfil)
