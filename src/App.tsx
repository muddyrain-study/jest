import './App.css';
import useCounter from './hooks/useCounter';
function App() {
  const [current, { inc, dec, set, reset }] = useCounter(5, {
    min: 0,
    max: 10,
  });
  return (
    <div className='App'>
      <div>{current}</div>
      <button onClick={() => dec(1)}>-</button>
      <button onClick={() => inc(1)}>+</button>
      <button onClick={() => set(100)}>set</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default App;
