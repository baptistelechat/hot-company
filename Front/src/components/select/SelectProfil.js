import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(4),
    minWidth: 120,
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

const SelectProfil = ({selectUser, setSelectUser, users}) => {

  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectUser(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="simple-select-profile"
          id="simple-select-profil"
          value={selectUser}
          onChange={handleChange}
          className={classes.selectMenu}
        >
          {users.map((user) => {
            return(<MenuItem key={user} value={user}>{user}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectProfil;
