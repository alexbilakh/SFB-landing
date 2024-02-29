import React from 'react'

const Button = ({title, onClick, style}) => {
  return (
    <button className={style} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button