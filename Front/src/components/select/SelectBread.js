import React from 'react';
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
  const [bread, setBread] = React.useState('Pain de mie');

  const handleChange = (event) => {
    console.log(event.target.value)
    setBread(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="simple-select-profile"
          id="simple-select-profil"
          value={bread}
          onChange={handleChange}
          className={classes.selectMenu}
        >
          <MenuItem value={'Pain de mie'}>Pain de mie</MenuItem>
          <MenuItem value={'Pain au céréales'}>Pain au céréales</MenuItem>
          <MenuItem value={'Brioche'}>Brioche</MenuItem>
          <MenuItem value={'Fait maison'}>Fait maison</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectBread;
