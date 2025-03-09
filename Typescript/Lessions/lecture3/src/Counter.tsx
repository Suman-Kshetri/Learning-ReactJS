import { ReactNode, useState, useReducer, ReducerState, ChangeEvent } from 'react'

const intialState = {count : 0 , text: ''}

const enum REDUCER_ACTION_TYPE{
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type reducerAction  = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}

const reducer = (state: typeof intialState, action: reducerAction): typeof intialState => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state , count: state.count + 1}
        case REDUCER_ACTION_TYPE.DECREMENT:
            return {...state , count: state.count - 1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return {...state , text: action.payload ?? ''}
        default: 
            throw new Error()
    }
}


type ChildrenType = {
    children: (num: number) => ReactNode;
  }


const Counter = ({children}:ChildrenType) => {
    // const [count, setCount] = useState<number>(1)

    const [state,dispatch] = useReducer(reducer, intialState);
    const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT});
    const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT});

    const handleTextInput = (e:ChangeEvent<HTMLInputElement>) => 
    {
        dispatch({type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value})
    }
  return (
    <>
    <h1>{children(state.count)}</h1>
    <div className='Btn'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
        <br/><br/>
    <input type="text" onChange={handleTextInput} />
    <h2>{state.text}</h2>
    </>
  )
}

export default Counter
  
  