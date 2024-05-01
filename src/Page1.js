import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Page1() {
    const storeObj = useSelector((store) => {
        console.log('inside page1 selector:', store)
        return store.addSubRedFunc
    })
    let dispatch = useDispatch();
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Page1</h1>
                <h1>{storeObj.fname}</h1>
                <h1>{storeObj.value}</h1>
                <button onClick={() => { dispatch({ type: "ADD", payload: 1 }) }}>+</button>
                <button onClick={() => { dispatch({ type: "RESET", payload: 0 }) }}>Reset</button>
                <button onClick={() => { dispatch({ type: 'SUB', payload: 1 }) }}>-</button>
            </div>
        </>
    );
}
