import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ItemCard } from '../ItemCard'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Instructions } from '../Instructions'

import './Home.css'

function Home() {
  const numbers = useSelector((state) => state.card.numbers)
  const [width, updateWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', updateMyWidth)
    return () => window.removeEventListener('resize', updateMyWidth)
  })

  function updateMyWidth() {
    updateWidth(window.innerWidth)
  }

  let InstructionsRender =
    width > 1000 ? (
      <div className='InstructionsPanel'>
        <Instructions />
      </div>
    ) : null

  return (
    <div className='AppContainer'>
      <div className='MainContentContainer'>
        <Header />
        <div className='HomeContainer'>
          <div className='itemCards'>
            {numbers.map((number, index) => {
              return <ItemCard number={number} />
            })}
          </div>
        </div>
        <Footer />
      </div>
      {InstructionsRender}
    </div>
  )
}

export default Home
