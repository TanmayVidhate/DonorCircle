import React from 'react'

function Inputsfields({ type, name, placeholder, onChange,value, disabled}) {

    return (
        <>
            <input
                className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg block m-2 p-2.5 '
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value ||''}
                disabled={disabled}
                required />
        </>
    )
}

export default Inputsfields;