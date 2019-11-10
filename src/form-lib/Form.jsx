import React, { createRef, forwardRef, useRef } from "react"

const Form = forwardRef(
  ({ name, onSubmit, onValidationError, children }, ref) => {
    const childMapper = child =>
      child.ref ? child : { ...child, ref: createRef() }

    const elementsMapper = (formElement, index) => {
      return {
        name: formElement.props
          ? formElement.props.name
          : `${formElement.name}-${index}`,
        ref: formElement.ref
      }
    }

    const mappedChildren = Array.isArray(children)
      ? children.map(childMapper)
      : [
          Object.assign({}, children, {
            ref: createRef()
          })
        ]

    const formElements = mappedChildren.map(elementsMapper)

    const formRef = useRef()

    const formSubmission = e => {
      e.preventDefault()
      let values = {}
      let fieldValidation = {}

      formElements.forEach(element => {
        const { name, ref } = element
        if (!name || !ref) {
          return
        }

        fieldValidation[name] = ref.current.isValid()

        values[name] = ref.current.getValue
          ? ref.current.getValue()
          : ref.current.value
      })

      const flattenObject = obj => {
        const flattened = {}

        Object.keys(obj).forEach(key => {
          if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(flattened, flattenObject(obj[key]))
          } else {
            flattened[key] = obj[key]
          }
        })

        return flattened
      }

      Object.keys(fieldValidation).find(field => !field)
        ? onValidationError(fieldValidation)
        : onSubmit(flattenObject(values))
    }

    return (
      <form ref={formRef} name={name} onSubmit={formSubmission}>
        {mappedChildren}
      </form>
    )
  }
)

export default Form
