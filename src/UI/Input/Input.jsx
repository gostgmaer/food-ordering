import React, { Fragment } from 'react'

const Input =React.forwardRef((props,ref) => {
  return (
   <Fragment > <input ref={ref} {...props.input} /> </Fragment>
  )
})

export default Input