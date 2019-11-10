import React, { forwardRef } from 'react'

const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <button {...props} ref={ref}>
      {children}
    </button>
  )
})

export default Button