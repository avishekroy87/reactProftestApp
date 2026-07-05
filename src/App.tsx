
import { Fragment } from 'react/jsx-runtime'
import useCounter from './useCounter'
import './App.css'

function App() {
  const { count, increment, decrement, reset } = useCounter(10);
  return (
    <Fragment>
       <h1>{count}</h1>

      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>

      <button onClick={reset}>Reset</button>
    </Fragment>  )
}

export default App
