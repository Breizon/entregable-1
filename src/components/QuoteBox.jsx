import React from 'react'
import BtnQuote from './BtnQuote'

const QuoteBox = ({quoteRandom, handleClick,colorRandom}) => {

    const objStyle = {
        color: colorRandom
    }

    const objStyleBtn = {
        backgroundColor: colorRandom
    }

  return (
    <article className='card' style={objStyle}>
        <i className="card_icon fa-solid fa-quote-left"></i>
        <p className='card_quote'>{quoteRandom.quote} </p>
        <h1 className='card_author'>{quoteRandom.author} </h1>
        <BtnQuote 
        objStyleBtn ={objStyleBtn} 
        handleClick ={handleClick} />
    </article>
  )
}

export default QuoteBox