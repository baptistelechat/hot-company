import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GetAppIcon from '@material-ui/icons/GetApp';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/logo.png'

// STYLE
const useStyles = makeStyles((theme) => ({
  menuButton: {
    position: 'fixed',
    top: theme.spacing(2),
    left: theme.spacing(2)
  },
  contact: {
    width: '25vw',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      width: '33vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '75vw',
    },
  },
  list: {
    marginBottom: theme.spacing(3)
  },
  h3: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  p:{
    margin: theme.spacing(2)
  },
  iconHeader: {
    fontSize: 25,
    color: theme.palette.text.primary
  },
  ListItemHeader: {
    backgroundColor: '#e0931f'
  },
  logo: {
    height: '70px',
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  fontAwesomeIcon: {
    fontSize: '45px',
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    '&:hover': {
      color: '#e0931f',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '35px',
      padding: theme.spacing(1),
    },
  },
  iconContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  }
}));

const HamburgerMenu = () => {

  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false)
  const [supportPWA, setSupportPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  const urlBaptiste = 'https://github.com/baptistelechat'
  const urlLeopold = 'https://github.com/LeopoldBriand-bot'
  const urlCan = 'https://github.com/Hyddrax'
  const urlCharly = 'https://github.com/FoxBandyKoot'
  const urlProject = 'https://github.com/baptistelechat/hot-company'

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);
  
  const install = (event) => {
    event.preventDefault();
    if (!promptInstall) {
        return
    }
    promptInstall.prompt();
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const openLink = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  
  const contact = () => (
    <div
      className={classes.contact}
    >
      <div className={classes.iconContainer}>
        <ListItem button onClick={() => openLink(urlBaptiste)}>
          <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGithub}/>
          <ListItemText primary={"@baptistelechat"} secondary={"Baptiste LECHAT"}/> 
        </ListItem>
        <ListItem button onClick={() => openLink(urlLeopold)}>
          <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGithub}/>
          <ListItemText primary={"@LeopoldBriand-bot"} secondary={"Léopold BRIAND"}/> 
        </ListItem>
        <ListItem button onClick={() => openLink(urlCan)}>
          <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGithub}/>
          <ListItemText primary={"@Hyddrax"} secondary={"Can SESEN"}/> 
        </ListItem>
        <ListItem button onClick={() => openLink(urlCharly)}>
          <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGithub}/>
          <ListItemText primary={"@FoxBandyKoot"} secondary={"Charly LERENARD"}/> 
        </ListItem>
      </div>
    </div>
  );

  return (
    <div>
      <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
          <MenuIcon />
      </IconButton>
      <Drawer anchor={'left'} open={openDrawer} onClose={toggleDrawer(false)} style={{width: '75vw'}}>
        <ListItem className={classes.ListItemHeader} onClick={toggleDrawer(false)}>
          <ListItemIcon><NavigateBeforeIcon className={classes.iconHeader}/></ListItemIcon>
          <h2>Hot Company</h2>
          <img className={classes.logo} src={logo} alt="logo"/>
        </ListItem>
        <List className={classes.list}>
          <p className={classes.p}>Control your homemade connected toaster !</p>
          <Divider/>
          <ListItem button onClick={() => openLink(urlProject)}>
            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGithub}/>
            <ListItemText primary={"Hot-Company"} secondary={"GitHub Project"}/> 
          </ListItem>
          <Divider/>
          <ListItem>
            <h3>Contact</h3>
          </ListItem>
          {contact()}
          <Divider/>
          {supportPWA ? 
            (<ListItem button onClick={install}>
              <ListItemIcon><GetAppIcon/></ListItemIcon>
              <ListItemText primary={"Installer PWA"} secondary={"Installer Hot Company sur votre appareil"}/> 
            </ListItem>) 
            :
            <div></div>
          }
        </List>
      </Drawer>
    </div>
  );
}

export default HamburgerMenu
