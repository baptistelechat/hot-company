import React from 'react';
import ButtonFeedbackNotEnough from '../button/feedback/ButtonFeedbackNotEnough'
import ButtonFeedbackPerfect from '../button/feedback/ButtonFeedbackPerfect'
import ButtonFeedbackTooMuch from '../button/feedback/ButtonFeedbackTooMuch'

const PageFeedback = () => {

  return (
    <div>
      <ButtonFeedbackNotEnough/>
      <ButtonFeedbackPerfect/>
      <ButtonFeedbackTooMuch/>
    </div>
  );
}

export default PageFeedback;
