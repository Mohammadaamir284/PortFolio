import React from 'react'

const Input = ({
    label ,
    placeholder = '',
    type = '',
    isRequired = true,
    value,
    ...inputProps
}) => {
    return (<>
        <label className="text-gray-300 text-sm">
            {label}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            required={isRequired}
            {...(value !== undefined && { value })}
            {...inputProps}
            className="
                mt-2 w-full rounded-xl
                border border-violet-500/30
                bg-white/5
                px-4 py-3
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-cyan-400
                transition
              "
        />
    </>)
}

export default Input
