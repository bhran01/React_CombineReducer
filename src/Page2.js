import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page2() {
  let store = useSelector((storeObj) => {
    console.log('inside page2 selector:', storeObj)
    return storeObj.MulDivRedFunc
  })

  let dispatch = useDispatch()
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Page2</h1>
        <h1>{store.value}</h1>
        <button onClick={() => { dispatch({ type: "MULBY2", payload: 2 }) }}>*2</button>
        <button onClick={() => { dispatch({ type: "MULBY5", payload: 5 }) }}>*5</button>
        <button onClick={() => { dispatch({ type: "RESET", payload: 1 }) }}>Reset</button>
        <button onClick={() => { dispatch({ type: "DIVBY2", payload: 2 }) }}>/2</button>
        <button onClick={() => { dispatch({ type: "DIVBY5", payload: 5 }) }}>/5</button>
      </div>
    </>
  )
}
