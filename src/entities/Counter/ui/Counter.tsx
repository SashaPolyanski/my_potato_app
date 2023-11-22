import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'

type CounterProps = {}

export const Counter: FC<CounterProps> = ({}) => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)
  const incHandler = () => {
    dispatch(counterActions.increment())
  }
  const decHandler = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <>
      <h1>Count: {value}</h1>
      <button onClick={incHandler}>inc</button>
      <button onClick={decHandler}>dec</button>
    </>
  )
}
