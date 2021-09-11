import React, {ChangeEvent, useState} from "react"
import Input from "./common/c1-SuperInputText/SuperInputText"
import s from "./HW4.module.css"
import Button from "./common/c2-SuperButton/SuperButton"
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox"

function HW4() {
    const [text, setText] = useState<string>("")
    const [error, setError] = useState<string>("")

    const showAlert = () => {
        let trim = text.trim()
        if (!trim) {
            setError("error")
            alert("введите текст...")
        }
        if (trim) {
            setText("")
            setError("")
            alert(trim) // если нет ошибки показать текст
        }
    }
    const deleteButton = () => {
        setText("")
    }
    const defaultButton = () => {
        setText("Name+LastName+FamilyName")
    }


    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <Input
                    label={"name"}
                    textValue={text}
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // spanClassName={s.testSpanError}
                />

                <Input
                    /* label={"name"}
                     textValue={text}
                     value={text}
                     onChangeText={setText}
                     onEnter={showAlert}
                     error={error}*/
                    //для того чтобы были разные данные в обоих инпутах, нужно создавать отдельный стейт здесь,
                    //или перенести стейт внутрь компоненты
                    //className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <Button onClick={defaultButton}>
                    default
                </Button>

                <Button
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={deleteButton}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </Button>

                <Button disabled>
                    disabled
                </Button>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
