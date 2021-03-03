import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const CookingPage = () => {

  const history = useHistory()
  
  useEffect(() => {
    setTimeout(() => {
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
