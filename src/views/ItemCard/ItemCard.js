import React from 'react'
import { useDispatch } from 'react-redux'

import * as CardAction from '../../store/card/CardAction'

import './ItemCard.css'

function ItemCard(props) {
  let dispatch = useDispatch()

  function deleteCard(number) {
    dispatch(CardAction.deleteCard(number))
  }

  return (
    <div className='itemCard'>
      <div className='buttonContainer'>
        <button
          className='deleteButton'
          onClick={() => deleteCard(props.number)}
        >
          X
        </button>
      </div>
      <div className='itemContent'>
        <div className='number'>{props.number}</div>
      </div>
    </div>
  )
}

export default ItemCard
