import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

const SelectBread = () => {

  const classes = useStyles();
  const [selectBread, setSelectBread] = useState('Pain de mie');
  const [breadList, setBreadList] = useState(["Pain de mie", "Pain au céréales", "Brioche","Fait Maison"])

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectBread(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="simple-select-profile"
          id="simple-select-profil"
          value={selectBread}
          onChange={handleChange}
          className={classes.selectMenu}
        >
          {breadList.map((bread) => {
            return(<MenuItem key={bread} value={bread}>{bread}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectBread;
