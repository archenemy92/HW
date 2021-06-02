import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2"
import styles from "./Affairs.module.css"

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

    const setAll = (filter: FilterType) => {
        props.setFilter("all")
    } // need to fix
    const setHigh = (filter: FilterType) => {
        props.setFilter("high")
    }
    const setMiddle = (filter: FilterType) => {
        props.setFilter("middle")
    }
    const setLow = (filter: FilterType) => {
        props.setFilter("low")
    }

    return (
        <div className={styles.mainContent}>
            <div className={styles.mainContent_affairs}>
                {mappedAffairs}
            </div>
            <div className={styles.mainContent_buttons}>
                <button onClick={()=>setAll("all")}>All</button>
                <button onClick={()=>setHigh("high")}>High</button>
                <button onClick={()=>setMiddle("middle")}>Middle</button>
                <button onClick={()=>setLow("low")}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
