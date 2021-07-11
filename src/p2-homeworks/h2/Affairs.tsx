import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2"
import styles from "./Affairs.module.css"
import Button from "../h4/common/c2-SuperButton/SuperButton"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType)=>void
    deleteAffairCallback: (_id: number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div className={styles.mainContent}>
            <div className={styles.mainContent_affairs}>
                {mappedAffairs}
            </div>
            <div className={styles.mainContent_buttons}>
                <Button onClick={()=>props.setFilter("all")}>All</Button>
                <Button onClick={()=>props.setFilter("high")}>High</Button>
                <Button onClick={()=>props.setFilter("middle")}>Middle</Button>
                <Button onClick={()=>props.setFilter("low")}>Low</Button>
            </div>

        </div>
    )
}

export default Affairs
