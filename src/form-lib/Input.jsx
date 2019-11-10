import React, { forwardRef } from "react"
import useFormElement from "./FormElement"

const Input = forwardRef(({ name, validate, type, value, onChange, className, ...props }, ref) => {
    const { inputRef } = useFormElement(ref)
    return (
      <input
        ref={inputRef}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className={className}
        {...props}
      />
    )
  }
)

export default Input
