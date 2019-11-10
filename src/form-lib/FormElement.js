import { useState, useRef, useImperativeHandle, createRef } from 'react'

const useFormElement = (ref = createRef()) => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    clear: () => setValue(''),
    reset: () => setValue(''),
    getValue: () => inputRef.current.value,
    getValidity: () => inputRef.current.validity,
    isValid: () => inputRef.current.validity.valid,
  }))

  return { value, inputRef, handleChange }
}

export default useFormElement
