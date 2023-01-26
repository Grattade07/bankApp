import './App.css';
/* importing functions to get the required slices of state */
import { useSelector, useDispatch } from 'react-redux';
/* importing the action creators from the balance reducer */
import { depositByAmount, withdrawByAmount, addInterest, takeCharges } from './store/balance';
import { useState } from 'react';

function App() {

  /* set "balance" to the current state of balanceSlice*/
  const balance = useSelector((state) => state.balance.value)

  /* sets "dispatch" to "useDispatch" */
  const dispatch = useDispatch()

  /* sets state of "userInput" to be used in input with React hook */
  const [userInput, setUserInput] = useState(0)

  return (
    <div className="App">
      {/* displays the current state value */}
      <h1>Balance: £{balance}</h1>

      <form id='balance'>
        <label>
          Amount:
          <input 
            type="text"
            name="value"
            onChange={(e) => setUserInput(e.target.value)}
            value = {userInput}
          />
        </label>
        {/* button will add the input vale to the state value */}
        <button onClick={(e) => 
          dispatch(depositByAmount(Number(userInput)),
          e.preventDefault(),
          setUserInput(0)
          )} >Deposit</button>
          {/* button will subract the input value from the state value */}
        <button onClick={(e) => 
          dispatch(withdrawByAmount(Number(userInput)),
          e.preventDefault(),
          setUserInput(0)
        )}>Withdraw</button>
      </form>
      {/* button adds 5% interest to state value */}
      <button onClick={() => dispatch(addInterest())} className='button'>Add Interest</button>
      {/* button takes a 15% charge from state value */}
      <button onClick={() => dispatch(takeCharges())} className='button'>Take Charges</button>
    </div>
  );
}

export default App;
