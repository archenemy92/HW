import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react"
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
    const disabled = true

    useEffect(() => {
        if (error) {
            setTimeout(() => setError(""), 3000)
        }
    }, [error])

    /*  const deleteError = () => {
          setTimeout(() => setError(""), 3000)
      }*/

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (name.length === 0) {
            setError("name is required")
            //deleteError()
        }
        setName(e.currentTarget.value.trim())
    }
    const addUser = () => {
        if (name.length === 0) {
            setError("name is required")
            return
        }
        addUserCallback(name)
        setError("")
        alert(`Hello ${name} !`)
        setName("")
    }

    const onPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && name.length === 0) {
            setError("name is required")
            //deleteError()
        }
        if (e.key === "Enter") {
            addUser()
        }
    }

    const totalUsers = users.length
    const disabledButton = name.length > 0 ? !disabled : disabled

    return (
        <Greeting
            name={name}
            disabled={disabledButton}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onPressHandler={onPressHandler}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
