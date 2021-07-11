import React, {useEffect, useState} from "react"
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import {restoreState, saveState} from "./localStorage/localStorage"


function HW6() {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState("")
    const [editMode, setEditMode] = useState<boolean>(false)

useEffect(()=>{
    if (value.length === 0) {
        setError("error: field can't be empty")
    }
    if (value) {
        setError("")
    }

}, [value])

    const save = () => {
        saveState<string>("editable-span-value", value)
    }
    const restore = () => {
        setValue(() => restoreState<string>("editable-span-value", value))
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    label={"Enter Text"}
                    setErrorHandler={(err:string)=>setError(err)}
                    isEditMode={()=>setEditMode(!editMode)}
                    editMode={editMode}
                    error={error}
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <SuperButton onClick={save} disabled={!value}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
