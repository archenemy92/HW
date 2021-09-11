import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    debugger
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: undefined | JSX.Element[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                onChange={onChangeCallback}
                type={"radio"}
                value={o}
                checked={o === value}
                name={name}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
