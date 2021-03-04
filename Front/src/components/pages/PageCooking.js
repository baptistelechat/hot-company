import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom'

const CookingPage = () => {

  const history = useHistory()
  
  useEffect(() => {
    setTimeout(() => {
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

  return (
    <div>
      <h1>Toasting ...</h1>
    </div>
  );
}

export default CookingPage;
