import React from "react";

import './form-input.styles.scss'

interface FormInputProps {
    label: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    type: string,
    name: string
}

const FormInput: React.FC<FormInputProps> = ({handleChange, label, value, type, name}) => (
    <div className='group'>
        {
            label
                ?
                (<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                :
                null
        }
        <input className='form-input' onChange={handleChange} value={value} type={type} name={name}/>

    </div>
)

export default FormInput