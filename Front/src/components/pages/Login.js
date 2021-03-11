import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SelectWifiSecurity from '../select/SelectWifiSecurity'
import ButtonLoginWifi from '../button/ButtonLoginWifi'

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: theme.spacing(1),
  }
}));

const Login = () => {

  const classes = useStyles();
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [selectSecurity, setSelectSecurity] = useState('None');

  const handleSSIDChange = (event) => {
    setSsid(event.currentTarget.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <div>
      <div>
        <TextField
          autoFocus
          required
          color="secondary"
          label="SSID"
          name="ssid"
          className={classes.textField}
          onChange={handleSSIDChange}
        />
      </div>
      <div>
        <TextField
          autoFocus
          required
          color="secondary"
          label="Password"
          name="password"
          type="password"
          className={classes.textField}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <SelectWifiSecurity selectSecurity={selectSecurity} setSelectSecurity={setSelectSecurity}/>
      </div>
      <ButtonLoginWifi ssid={ssid} password={password} security={selectSecurity}/>
    </div>
  );
}

export default Login;
