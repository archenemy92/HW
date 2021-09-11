import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3"

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string>("")

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let evt = e.currentTarget.value.trim()
        if ( evt.length < 1) {
             setError("name is required")
            //deleteError()
        }
        if ( evt.length === 15){
            setError("max 15 symbols")
            return
        }
        setName(evt)

    }
    const addUser = () => {
        addUserCallback(name)
        setError("")
        alert(`Hello ${name} !`)
        setName("")
    }

    const onPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && e.currentTarget.value.length === 0) {
            setError("name is required")
            return
            //deleteError()
        }
        if (e.key === " ") {
            setError("Name mast be without space")
        }

        if (e.key === "Enter") {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            disabled={name.length === 0}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onPressHandler={onPressHandler}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
