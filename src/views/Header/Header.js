import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './Header.css'

import * as CardAction from '../../store/card/CardAction'

function Header() {
  const dispatch = useDispatch()
  const numbers = useSelector((state) => state.card.numbers)

  function randomNumberGenerator() {
    do {
      var value = Math.floor(Math.random() * 100)
    } while (numbers.indexOf(value) !== -1)
    dispatch(CardAction.addCard(value))
  }

  function sortNumbers() {
    dispatch(CardAction.sortCards())
  }

  return (
    <div className='app-header'>
      <button className='addCard' onClick={() => randomNumberGenerator()}>
        Add Card
      </button>
      <button className='sortCards' onClick={() => sortNumbers()}>
        Sort Cards
      </button>
    </div>
  )
}

export default Header
