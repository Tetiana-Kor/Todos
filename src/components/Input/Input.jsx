import React from "react";
import s from "./Input.module.css";

const MyInput = (props) => {

    return (
        <input {...props} className={s.myInput} />

    )
}
export default MyInput