'use client';
import React, { useState } from 'react'
import '../assets/css/counter-page.css'

const CounterComponent = () => {

    const [count, setCount] = useState(0)
    return (
        <div className="counter">
            <h1> From Counter Page </h1>
            <div className="counter-content">
                <h3> Count is {count} </h3>
                <button onClick={() => setCount(count + 1)}> +</button>
                <button onClick={() => setCount(count - 1)}> - </button>
            </div>
        </div>
    )
}

export default CounterComponent
