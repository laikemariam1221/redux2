import { useSelector ,useDispatch} from 'react-redux';
import {counterActions} from '../Store/index.js';
import classes from './Counter.module.css';
const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  const show=useSelector(state=>state.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.taggle())
  };
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const increaeHandler=()=>{
    dispatch(counterActions.increse(10))
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}> Increment</button>
        <button onClick={increaeHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
