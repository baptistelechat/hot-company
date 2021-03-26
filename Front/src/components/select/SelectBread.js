import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux'
import { breadsApiCall } from '../../redux/breads/actionBreads'
import { setCurrentBread } from '../../redux/currentBread/actionCurrentBread'

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

const SelectBread = ({currentUser, setCurrentBread, breadsApiCall}) => {

  const classes = useStyles();
  const breads = ["Pain de mie", "Pain au céréales", "Brioche","Fait Maison"]
  // TODO Toggle mocked data to API
  // const breads = breadsApiCall(currentUser)
  const [value, setValue] = useState('Pain de mie');


  const handleChange = (index) => {
    console.log(breads[index])
    setCurrentBread(breads[index])
    //TODO Add .breadType after breads[index] for setValue
    setValue(breads[index])
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
          {breads.map((bread, index) => {
            return(<MenuItem key={index} value={bread} onClick={()=> handleChange(index)}>{bread}</MenuItem>)
          })}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    breadsApiCall: (user) => {
      dispatch(breadsApiCall(user))
    },
    setCurrentBread: (bread) => {
      dispatch(setCurrentBread(bread))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectBread);
