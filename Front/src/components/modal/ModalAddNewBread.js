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
    // position: 'fixed',
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
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

const AddNewBread = ({addNewBread}) => {

  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false)
  const [breadType, setBreadType] = useState('')
  const [cookingTime, setCookingTime] = useState(-1)

  const [isNumber, setIsNumber] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [breadTypeNoWhiteSpace, setBreadTypeNoWhiteSpace] = useState(false);
  const [CookingTimeNoWhiteSpace, setCookingTimeNoWhiteSpace] = useState(false);

  const numberRegex = new RegExp("[0-9]*")

  // const isNumber = (testValue) => {
  //   Boolean(regexNickname.exec(test))
  // } 
  
  
  const handleOpenDialog = () => {
    setOpenDialog(true)
  };

  const handleCloseDialog = () => {
    if (/\s/.test(breadType) || /\s/.test(cookingTime)) {
      toast.error("Please, remove whitespaces.", {
        duration: 5000,
        style: {
          background: '#e57373',
          color: '#FFFFFF',
        },
        iconTheme: {
          primary: '#b71c1c',
          secondary: '#FFFFFF'
        },
      });
    } else {
      if (breadType === "" || cookingTime === -1) {
        toast.error("Invalid submit, input fields are empty !", {
          duration: 5000,
          style: {
            background: '#e57373',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#b71c1c',
            secondary: '#FFFFFF'
          },
        });
      } else {
        setOpenDialog(false);
        addNewBread(breadType, cookingTime)
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
      }
    }
  };

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
                id="standard-basic"
                label="Bread Type"
                className={classes.textField}
                onChange={handleBreadTypeChange}
                error={isSubmit && breadType !== "" || isSubmit && breadTypeNoWhiteSpace}
                helperText={isSubmit && breadType !== "" ? ('Is empty !') : isSubmit && breadTypeNoWhiteSpace ? ('Contain white space !') : null}
              />
            </div>
            <div>
              <TextField id="standard-basic" label="Cooking Time" className={classes.textField} onChange={handleCookingTimeChange}/>
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

export default AddNewBread;
