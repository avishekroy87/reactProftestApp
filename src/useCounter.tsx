import { useState } from 'react'

const useCounter = (initialstate: number) => {
    const [count, setCount] = useState(initialstate)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(initialstate)
    }

    return { count, increment, decrement, reset }
}

export default useCounter