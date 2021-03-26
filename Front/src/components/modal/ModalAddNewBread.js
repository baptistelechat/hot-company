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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { connect } from 'react-redux'

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
  fab: {
    backgroundColor: '#ffca28',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#e0931f',
    },
  },
  textField: {
    margin: theme.spacing(1)
  }
}));

const AddNewBread = ({currentUser}) => {

  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false)
  const [breadType, setBreadType] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const [isCookingTime, setIsCookingTime] = useState(false);
  const [isBreadType, setIsBreadType] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const isNumber = new RegExp("[0-9]*")
  
  const handleOpenDialog = () => {
    setOpenDialog(true)
  };

  const handleCloseDialog = () => {
    setIsCookingTime(!(/\s/.test(cookingTime)) && (Boolean(isNumber.exec(cookingTime)) && cookingTime > 0) && cookingTime !== "")
    setIsBreadType(!(/\s/.test(breadType)) && breadType !== "")
    
    // TODO Test if new User is create
    if ((!(/\s/.test(breadType)) && breadType !== "") && (!(/\s/.test(cookingTime)) && (Boolean(isNumber.exec(cookingTime)) && cookingTime > 0) && cookingTime !== "")) {
      axios.post(process.env.REACT_APP_API_URL_BREADS, { 
        "defaultCookingTime": cookingTime*1000,
        "userId": currentUser.id,
        "breadType": breadType,
        "cookingTime": cookingTime*1000
       })
       .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
          setOpenDialog(false);
          setBreadType('')
          setCookingTime(-1)
          toast.success('A new bread was created !', {
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

      const cookingTimeMessage = () =>{
        if (cookingTime === "") {
          return 'Cooking Time is empty !'
        } else if (/\s/.test(cookingTime)) {
          return 'Cooking Time contain white space !'
        } else if (!(Boolean(isNumber.exec(cookingTime)) && cookingTime>0)) {
          return 'Cooking Time is not a number !'
        } else {
          return null
        }
      }

      const breadTypeMessage = () => {
        if (breadType === "") {
          return 'Bread Type is empty !'
        } else if (/\s/.test(breadType)) {
          return 'Bread Type contain white space !'
        } else {
          return null
        }
      }

      if (cookingTimeMessage() !== null) {
        toast.error(cookingTimeMessage(), {
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

      if (breadTypeMessage() !== null) {
        toast.error(breadTypeMessage(), {
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

  const handleBreadTypeChange = (event) => {
    setBreadType(event.currentTarget.value)
  }
  
  const handleCookingTimeChange = (event) => {
    setCookingTime(event.currentTarget.value)
  }

  return (
    <div>
      <Fab size="small" color="primary" aria-label="add" onClick={handleOpenDialog} className={classes.fab}>
        <AddIcon fontSize="small"/>
      </Fab>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.title}>Add new type of bread</DialogTitle>
        <DialogContent style={{paddingBottom: '16px'}}>
          <DialogContentText className={classes.dialogContentText}>
            Fill all fields and submit form.
          </DialogContentText>
            <div>
              <TextField
                required
                color="secondary"
                error={isSubmit && !isBreadType}
                helperText={isSubmit && !isBreadType ? ('An error occurred for this text field, look the notifications !') : null}
                name="breadType"
                id="breadType"
                label="Bread Type"
                className={classes.textField}
                onChange={handleBreadTypeChange}
              />
            </div>
            <div>
              <TextField
                required
                color="secondary"
                error={isSubmit && !isCookingTime}
                helperText={isSubmit && !isCookingTime ? ('An error occurred for this text field, look the notifications !') : null}
                name="cookingTime"
                id="cookingTime"
                label="Cooking Time (sec)"
                className={classes.textField}
                onChange={handleCookingTimeChange}
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
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps)(AddNewBread);
