import React from 'react';
import s from "./../Dialogs.module.css";


const Message = (props) => {
  return (
    <div className={s.dialog}>
      <img src="https://vk.vkfaces.com/856020/v856020732/c6c70/UkL54df8UvI.jpg" alt="Text" />
      {props.message}
    </div>
  )
}


export default Message;