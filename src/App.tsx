import { useState } from 'react'
import './App.css'
import type Equation from './model/Equation';
import KeypadView from './components/KeypadView';
import { parse, type MathNode } from 'mathjs';

const MAX_NUM_HIST_EQS = 10;

function App() { 
  const [equations, setEquations] = useState<Array<Equation>>([]); 
  const [currentExpression, setCurrentExpression] = useState<Array<string>>([]); 
  const [error, setError] = useState<string | null>(null); 

  const calculate = () => { 
    try { 
      const expr = currentExpression.map(
        (e: string) => { 
          if (e === 'mod') return '%';
          else if (e === 'x') return '*';
          else if (e === 'π') return 'pi';
          else return e;
        }) 
        
      const mjsExpr: MathNode = parse(expr.join(' ')); 
      const res = mjsExpr.evaluate(); 
      setCurrentExpression([String(res)]); 
      if (equations.length === MAX_NUM_HIST_EQS) { 
        setEquations([...equations.slice(1), { expression: currentExpression, result: res }]); 
      } 
      else { setEquations([...equations, { expression: currentExpression, result: res }]); 
      } setError(null); 
    } catch (e: any) { 
      if ('message' in e) { 
        setError(e.message); 
      } else { 
        setError(String(e)); 
      } 
      console.error(e); 
    } 
  } 
  
  const updateCurrentExpression = (newV: string[]) => { 
    setError(null); setCurrentExpression(newV); 
  } 
  
  return (
    <> 
      <h4 className='mb-4 w-100 text-center'>React Calculator</h4> 
      <div className='dropdown mb-2'> 
        <button className='btn btn-warning dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'> 
          Equation History 
        </button> 
        
        <ul className='dropdown-menu bg-light'> 
          {equations.length > 0 ? equations.map((e: Equation) => 
            <li> 
              <div className='d-flex flex-row align-text-bottom'> 
                <button type='button' className='btn btn-sm btn-light text-truncate mw-75 w-75 text-start' onClick={() => setCurrentExpression(e.expression)}> 
                  ({e.expression.join(' ')}) 
                </button> 
                = 
                <button type='button' className='btn btn-sm btn-light text-truncate text-start flex-shrink-1 w-23 mw-25' onClick={() => setCurrentExpression([e.result])}>
                  {e.result} 
                </button> 
              </div> 
            </li>) 
              : 
            <li className='mx-2 text-dark'> 
              <i className='dropdown-item-text'> No equations yet </i> 
            </li>
          } 
        </ul> 
      </div> 
      <div className='mb-2'> 
        <input type="text" value={currentExpression.join("")} readOnly={true} /> {error ? 
        
        <div className='alert alert-danger' role='alert'> {error} </div> : null} 
      </div> 
      
      <KeypadView currentExpression={currentExpression} updateCurrentExpression={updateCurrentExpression} calculate={calculate} /> 
      
      <div className='fs-6 bg-body-secondary mt-4 text-center'>by Roberto Laiton</div> 
    
    </>
  ) 
} 

export default App