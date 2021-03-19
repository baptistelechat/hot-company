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
}));

const SelectWifiSecurity = ({selectSecurity, setSelectSecurity}) => {

  const classes = useStyles();
  const securityList = ["None", "WEP", "WPA", "WPA2", "WPA3"]

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectSecurity(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          color="secondary"
          labelId="simple-select-profile"
          id="simple-select-profil"
          value={selectSecurity}
          onChange={handleChange}
          className={classes.selectMenu}
        >
          {securityList.map((security) => {
            return(<MenuItem key={security} value={security}>{security}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectWifiSecurity;
