import React from 'react'

import './Instructions.css'

function Instructions() {
  return (
    <div className='InstructionContainer'>
      <div className='Instructions'>
        <h1>Instructions:</h1>
        <div>
          Please create a responsive React application (using javascript or
          typescript) that displays a list of cards on a page as shown below.
        </div>
        <ul>
          <li>
            There is a fixed-width pane on the right side of the window that
            remains attached to the right side when the user re-sizes.
          </li>
          <li>
            Inside the pane, please paste a formatted display of these
            instructions.
          </li>
          <li>And if the browser width is small, hide the pane completely.</li>
          <li>
            There is a fixed-height toolbar on the top of the window that has
            buttons.
          </li>
          <li>
            There is a fixed-height footer on the bottom of the window that just
            shows the text "footer".
          </li>
          <li> The main center portion of the window is the card container.</li>
          <li> It should start out with zero cards.</li>
          <li>
            Cards are only added when the user clicks 'add card' in the top
            toolbar.
          </li>
          <li>
            It has a vertical scrollbar which can be used if there are too many
            cards to display at once.
          </li>
          <li> It lays out the cards in rows, wrapping as needed.</li>
          <li>
            In this mockup only 2 cards are shown per row, but if the browser is
            wider, 3 or more cards might fit in a row.
          </li>
          <li>If narrower, maybe only 1 card would be visible.</li>
          <li>
            Each card has a set pixel size, such as 300px by 250px, but you can
            decide what size you wish to use.
          </li>
          <li>
            Upon instantiation, a card should be given a random number between 0
            and 100 and display it in the center of the card.
          </li>
          <li>
            Each card has a button in the top-right corner which can be used to
            delete the card.
          </li>
          <li>
            If the user clicks the 'sort cards' button at the top of the page,
            please sort the cards in order of the number that is shown in the
            center of each card.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Instructions
