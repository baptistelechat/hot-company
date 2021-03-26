import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import HotCompanyHeader from './components/HotCompanyHeader'
import MainPage from './components/pages/MainPage'
import PageCooking from './components/pages/PageCooking'
import PageFeedback from './components/pages/PageFeedback'
import PageNotFound from './components/pages/PageNotFound';
import PageSettings from './components/pages/PageSettings'
import PageSettingsUser from './components/pages/PageSettingsUser'
import PageSettingsChange from './components/pages/PageSettingsChange'
import Login from './components/pages/Login';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #ffd222 10%, #e0931f 75%)',
    // background: 'linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    // backgroundSize: "650% 650%",
    // animation: "$gradient 40s ease infinite",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  
  // "@keyframes gradient":{
  //   "0%": {
  //     backgroundPosition: "0% 50%"
  //   },
  //   "50%": {
  //     backgroundPosition: "100% 50%"
  //   },
  //   "100%": {
  //     backgroundPosition: "0% 50%"
  //   }
  // }
}));

function App({currentUser, currentBread}) {

  const classes = useStyles()

  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#e0931f'
      },
      secondary: {
        main: '#000000'
      }
    },
  });

  

  return (
    <ThemeProvider theme={muiTheme}>
      {console.log(`
██╗  ██╗ ██████╗ ████████╗     ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
██║  ██║██╔═══██╗╚══██╔══╝    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
███████║██║   ██║   ██║       ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
██╔══██║██║   ██║   ██║       ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
██║  ██║╚██████╔╝   ██║       ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
╚═╝  ╚═╝ ╚═════╝    ╚═╝        ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
                                                                                             
                      made by @baptistelechat / @leopoldBriand-bot / @FoxBandyKoot / @Hyddrax
                                          visit https://github.com/baptistelechat/hot-company
                                          `)}
      <div className={classes.root}>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <BrowserRouter>
          <HotCompanyHeader/>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/connect" component={Login}/>
            <Route exact path="/cooking" component={PageCooking}/>
            <Route exact path="/feedback" component={PageFeedback}/>
            <Route exact path="/settings" component={PageSettings}/>
            <Route exact path="/settings/:user" component={PageSettingsUser}/>
            <Route exact path="/settings/:user/:id" component={PageSettingsChange}/>
            <Route path="/" component={PageNotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser.user,
    currentBread: state.currentUser.bread,
  }
}

export default connect(mapStateToProps)(App);
