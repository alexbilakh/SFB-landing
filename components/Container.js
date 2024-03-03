import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1920px] m-auto overflow-hidden'>{ children }</div>
  )
}

export default Container