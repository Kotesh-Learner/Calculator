import './App.css'
import React from 'react';
import {useReducer} from 'react';
import DigitButton from './DigitButons';
import OperationButton from './Opearations';
import {ACTIONS}  from './Actions';
import reducer  from './Switch'
import formatOperand  from './Integer_Formatter'


function App() {

  // #Initalising useReducer Hook

   const [{firstOperand,currentOperand,operator}, dispatch] = useReducer(reducer,{})

  return (
    <div className='grid-Container'>
      <div className='ouput'>
        {/* FirstOperand And Opearator */}
        <div className='first-Operand'>{formatOperand(firstOperand)}{operator}</div>
        {/* SecondOperand */}
        <div className='second-Operand'>{formatOperand(currentOperand)}</div>
      </div>
      {/* Initalising Buttons */}
      <button className='span-Two' onClick={() => dispatch({type:ACTIONS.ALL_CLEAR})}>AC</button>
      <button onClick={() => dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperationButton operator='/' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <OperationButton operator='*' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <OperationButton operator='-' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <OperationButton operator='+' dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className='span-Two' onClick={() => dispatch({type:ACTIONS.EVALUATE})}>=</button>
    </div>
  )  
}

export default App;