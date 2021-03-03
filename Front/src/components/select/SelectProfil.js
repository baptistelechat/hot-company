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

const SelectProfil = () => {

  const classes = useStyles();
  const [profil, setProfil] = React.useState('Baptiste');

  const handleChange = (event) => {
    console.log(event.target.value)
    setProfil(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="simple-select-profile"
          id="simple-select-profil"
          value={profil}
          onChange={handleChange}
          className={classes.selectMenu}
        >
          <MenuItem value={'Baptiste'}>Baptiste</MenuItem>
          <MenuItem value={'Charly'}>Charly</MenuItem>
          <MenuItem value={'Léopold'}>Léopold</MenuItem>
          <MenuItem value={'Can'}>Can</MenuItem>
          <MenuItem value={'New'}>+ Nouveau profil</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectProfil;
