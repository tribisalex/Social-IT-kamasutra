import React from 'react';
import s from "./../Dialogs.module.css"; 

const Answer = (props) => {
  return (
    <div className={s.dialog}> 
      {props.answer}
      <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="Text"/>
      </div>
  )
}

export default Answer;