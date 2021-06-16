import React, {ChangeEvent, KeyboardEvent} from "react"
import s from "./Greeting.module.css"
import Input from "../h4/common/c1-SuperInputText/SuperInputText"
import Button from "../h4/common/c2-SuperButton/SuperButton"

type GreetingPropsType = {
    disabled: boolean
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onPressHandler, disabled} // деструктуризация пропсов
) => {


    return (
        <div className={s.content}>
            <Input value={name}
                   error={error}
                   onChange={setNameCallback}
                   onKeyPress={onPressHandler}
                   autoFocus
                   label={"enter your name"}
                   textValue={name}
                   className={s.input}/>
            <Button onClick={addUser} disabled={disabled} className={s.addButton}>ADD</Button>
            <span className={s.userCount}>{totalUsers}</span>
            {/*  {!!error && <div className={s.errorText}>{error}</div>}*/}
        </div>
    )
}

export default Greeting
