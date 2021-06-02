import React from "react"
import style from "./Message.module.css"
import {MessageType} from "./HW1"

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div>
            <div className={style.message}>
                <div className={style.img}>
                    <img src={props.avatar} className={style.avatar} alt={props.name}/>
                </div>
                <div className={style.textBody}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.text}>{props.message}</div>
                    <div className={style.date}>{props.time}</div>
                    <div className={style.left}></div>
                </div>
            </div>
        </div>
    )
}
