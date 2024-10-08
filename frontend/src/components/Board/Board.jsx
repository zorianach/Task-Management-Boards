import React from 'react'
import Column from '../Column/Column'
import Card from '../Card/Card.jsx'

const Board = ({boardData}) => {
    console.log('boardData', boardData)
  return (
    <div>BoardData
        <Column/>
        <Card/>
    </div>
  )
}

export default Board