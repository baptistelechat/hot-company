import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import HotCompanyHeader from './components/HotCompanyHeader'
import MainPage from './components/pages/MainPage'
import PageCooking from './components/pages/PageCooking'
import PageFeedback from './components/pages/PageFeedback'
import PageNotFound from './components/pages/PageNotFound';
import PageSettings from './components/pages/PageSettings'
import PageSettingsProfil from './components/pages/PageSettingsProfil'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #ffd222 10%, #e0931f 75%)',
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
}));

function App() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <HotCompanyHeader/>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/cooking" component={PageCooking}/>
          <Route exact path="/feedback" component={PageFeedback}/>
          <Route exact path="/settings" component={PageSettings}/>
          <Route exact path="/settings/profilSettings" component={PageSettingsProfil}/>
          <Route path="/" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
