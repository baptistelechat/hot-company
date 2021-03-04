import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
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
  
  const handleOpenDialog = () => {
    setOpenDialog(true)
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    addNewBread(breadType, cookingTime)
  };

  const handleBreadTypeChange = (event) => {
    setBreadType(event.currentTarget.value)
  }
  
  const handleCookingTimeChange = (event) => {
    setCookingTime(event.currentTarget.value)
  }

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleOpenDialog} className={classes.fab}>
        <AddIcon/>
      </Fab>
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.title}>Add new type of bread</DialogTitle>
        <DialogContent style={{paddingBottom: '16px'}}>
          <DialogContentText className={classes.dialogContentText}>
            Fill all fields and submit form.
          </DialogContentText>
            <div>
              <TextField id="standard-basic" label="Bread Type" className={classes.textField} onChange={handleBreadTypeChange}/>
            </div>
            <div>
              <TextField id="standard-basic" label="Cooking Time" className={classes.textField} onChange={handleCookingTimeChange}/>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{color: '#e0931f'}}>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewBread;
