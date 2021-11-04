import React from "react";
import s from "./Button.module.css";

const MyButton = ({children, ...props}) => {

    return (
        <button {...props} className={s.myBtn}>
          {children}
        </button>
    )
}
export default MyButton