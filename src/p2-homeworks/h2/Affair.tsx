import React from "react"
import {AffairType} from "./HW2"
import style from "./Affairs.module.css"
import Button from "../h4/common/c2-SuperButton/SuperButton"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }

    const chooseColor = () => {
        if (props.affair.priority === "middle") {
            return {color: "yellow"}
        }
        if (props.affair.priority === "high") {
            return {color: "red"}
        }
        if (props.affair.priority === "low") {
            return {color: "gray"}
        }
    }

    return (
        <div className={style.content}>
            <div className={style.content_name}>
                {props.affair.name.toUpperCase()}
            </div>
            <div className={`${style.content_priority} `} style={chooseColor()}>
                [{props.affair.priority}]
            </div>
            <div className={style.content_action}>
                <Button onClick={() => deleteCallback(props.affair._id)}>X</Button>
            </div>
        </div>
    )
}

export default Affair
