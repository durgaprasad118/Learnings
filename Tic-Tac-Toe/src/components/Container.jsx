import React, { useState } from 'react'
import Button from './Button'

const Container = () => {
  const winChances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const [values, setvalues] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(true)
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  function checkWinner() {
    for (let i = 0; i < winChances.length; i++) {
      const [a, b, c] = winChances[i]
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        return values[a]
      }
    }
    return null
  }
  const winner = checkWinner()
  function handleChange(i) {
    if (checkWinner() || values[i]) {
      return
    }
    const nextValues = values.slice()
    if (turn) {
      nextValues[i] = 'X'
    } else {
      nextValues[i] = 'O'
    }
    setvalues(nextValues)
    setTurn(!turn)
  }
  return (
    <>
      <h1>{winner && ' Winner is ' + winner}</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[400px] w-[400px]">
        {items.map((x) => {
          return (
            <Button
              key={x}
              setChild={() => handleChange(x)}
            >
              {values[x]}
            </Button>
          )
        })}
      </div>
      <button
        onClick={() => {
          setvalues(Array(9).fill(null))
        }}
        className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700 border-none mt-2"
      >
        reset
      </button>
    </>
  )
}

export default Container
