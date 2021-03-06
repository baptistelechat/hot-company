import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom'
import ButtonStopCooking from '../button/ButtonStopCooking'

const CookingPage = () => {

  const history = useHistory()
  var currentTimeout;

  useEffect(() => {
    currentTimeout = setTimeout(() => {
      toast.success('Completed cooking !', {
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
      history.push("/feedback")
    }, 5000)
  },[history])

  const stopHandler = () => {
    // Call api to stop the toasting
    clearTimeout(currentTimeout);
    history.push("/")
    toast.error("Cooking was stopped !", {
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
  }

  return (
    <div>
      <h1>Toasting ...</h1>
      <ButtonStopCooking stopHandler={stopHandler}/>
    </div>
  );
}

export default CookingPage;
