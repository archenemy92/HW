import React from 'react'
import {AffairType} from "./HW2"
import style from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
            props.deleteAffairCallback(_id)
    }
    return (
        <div className={style.content}>
            <div className={style.content_name}>
                {props.affair.name.toUpperCase()}
            </div>
            <div className={style.content_action}>
                <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
            </div>
        </div>
    )
}

export default Affair
