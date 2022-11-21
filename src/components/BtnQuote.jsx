import React from 'react'

const BtnQuote = ({objStyleBtn, handleClick}) => {
  return (
    <button style={objStyleBtn} className='card_btn' onClick={handleClick}>&gt;</button>
  )
}

export default BtnQuote