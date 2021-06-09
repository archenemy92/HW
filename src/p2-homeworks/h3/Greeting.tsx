import React, {ChangeEvent, KeyboardEvent} from "react"
import s from "./Greeting.module.css"

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
    const inputClass = name.length === 0 ? s.inputError : s.input

    return (
        <div className={s.content}>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onPressHandler}
                   className={inputClass}
                   placeholder={"Please, enter your name!"}
                   autoFocus/>
            <button onClick={addUser} disabled={disabled} className={s.addButton}>ADD</button>
            <span className={s.userCount}>{totalUsers}</span>
            {!!error && <div className={s.errorText}>{error}</div>}
        </div>
    )
}

export default Greeting
