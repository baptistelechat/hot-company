import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/currentUser/actionCurrentUser'

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#e0931f',
  },
  dialogContentText: {
    marginBottom: theme.spacing(1)
  },
  gridContainer: {
    width: '100%',
    background: 'rgba(0,0,0,0)'
  },
  textField: {
    margin: theme.spacing(1)
  }
}));

const ModalCreateUser = ({openDialog, setOpenDialog, setCurrentUser}) => {
  
  const classes = useStyles();
  const [name, setName] = useState('')
  const [isName, setIsName] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleCloseDialog = () => {
    
    setIsName(!(/\s/.test(name)) && name !== "")
    
    // TODO Test if new Bread is create for the currentUser
    if (!(/\s/.test(name)) && name !== "") {
      axios.post(process.env.REACT_APP_API_URL_USERS, { name: name })
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res.status === 200) {
            setOpenDialog(false);
            setCurrentUser(res.data.name)
            toast.success('New Profil successfully created !', {
              duration: 5000,
              style: {
                background: '#ffd222',
                color: '#000000',
              },
              iconTheme: {
                primary: '#e0931f',
                secondary: '#000000'
              },
            })
          } else {
          console.log(res);
          console.log(res.data);
          toast.success('Error return by the server, please try again or visit error log. !', {
            duration: 5000,
            style: {
              background: '#e57373',
              color: '#FFFFFF',
            },
            iconTheme: {
              primary: '#b71c1c',
              secondary: '#FFFFFF'
            },
          })
        }
      })
    } else {
      setIsSubmit(true)

      const nameMessage = () => {
        if (name === "") {
          return 'User name is empty !'
        } else if (/\s/.test(name)) {
          return 'User Name contain white space !'
        } else {
          return null
        }
      }

      if (nameMessage() !== null) {
        toast.error(nameMessage(), {
          duration: 5000,
          style: {
            background: '#e57373',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#b71c1c',
            secondary: '#FFFFFF'
          },
        })
      }
    }
  }

  const handleNameChange = (event) => {
    setName(event.currentTarget.value)
  }

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" className={classes.title}>Create user</DialogTitle>
      <DialogContent style={{paddingBottom: '16px'}}>
        <DialogContentText className={classes.dialogContentText}>
          Write her name and submit form.
        </DialogContentText>
          <div>
            <TextField
              autoFocus
              required
              color="secondary"
              error={isSubmit && !isName}
              helperText={isSubmit && !isName ? ('An error occurred for this text field, look the notifications !') : null}id="name"
              label="Name"
              name="name"
              className={classes.textField}
              onChange={handleNameChange}
            />
          </div>
      </DialogContent>  
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)} style={{color: '#e0931f'}}>
          Cancel
        </Button>
        <Button onClick={handleCloseDialog} style={{color: '#e0931f'}}>
          Submit
        </Button>   
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    openDialog: ownProps.openDialog,
    setOpenDialog: ownProps.setOpenDialog
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateUser);
