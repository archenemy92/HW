import React, {useState} from "react"
import {Message} from "./Message"
import s from "./../../p1-main/m1-ui/u1-app/App.module.css"

const messages: MessageType[] = []
export type MessageType = {
    id: number
    avatar: string
    name: string
    message: string
    time: string
}

const HW1: React.FC = () => {
    const [value, setValue] = useState("")
    const message = messages.map(el => <Message key={el.id}
                                                message={el.message}
                                                id={el.id}
                                                avatar={el.avatar}
                                                name={el.name}
                                                time={el.time}/>)
    const createMessage = () => {
        if (!value.trim()) {
            return
        }
        messages.push({
            name: "NIK",
            id: Math.random(),
            message: value,
            time: new Date().toLocaleString(),
            avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
        })
        setValue("")
    }

    const addMessage = (e: React.KeyboardEvent): void => {
        if (e.shiftKey && e.key === "Enter") {
            e.preventDefault()
            createMessage()
        }
    }

    return (
        <div>
            <hr/>
            homeworks 1
            <div>
                {message}
            </div>
            <div className={s.content}>
                <textarea value={value}
                          onChange={(e) => setValue(e.target.value)}
                          onKeyPress={addMessage}
                          className={s.text_area_hw}
                          placeholder={"tap a some text and press Shift+Enter or send to view the result"}/>
                <div>
                    <button onClick={createMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default HW1
