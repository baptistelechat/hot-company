import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HotCompanyHeader from './components/hotCompanyHeader'
import MakeToast from './components/makeToast'
import SelectProfil from './components/selectProfil'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #ffd222 0%, #e0931f 50%)',
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
}));

function App() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HotCompanyHeader/>
      <MakeToast/>
      <SelectProfil/>
    </div>
  );
}

export default App;
