import { createContext ,useReducer,ChangeEvent, ReactElement, useCallback, useContext, } from "react";


type stateType = {
    count: number,
    text: string;
}

export const intialState: stateType = {count : 0 , text: ''}

const enum REDUCER_ACTION_TYPE{
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type reducerAction  = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}

const reducer = (state: stateType, action: reducerAction): stateType => {
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


//custom hook

const useCounterContext = (intialState: stateType) => {
    
    const [state,dispatch] = useReducer(reducer, intialState);
    const increment = useCallback(() => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT}),[])
    const decrement = useCallback(() => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT}),[])

    //they will be recreated so we wrap them in usecallback since it doesn't cause component re-render
    const handleTextInput = useCallback((e:ChangeEvent<HTMLInputElement>) => 
    {
        dispatch({type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value})
    },[])

    return {state,increment,decrement,handleTextInput}
}


type useCounterContextType = ReturnType<typeof useCounterContext>

const intialContextState : useCounterContextType = {
    state: intialState,
    increment: () => { },
    decrement: () => { },
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { },
}

export const counterContext = createContext<useCounterContextType>(intialContextState)
type childrenType = {
    children?: ReactElement | undefined;
}

export const CounterProvider = ({
    children,...intialState
}: childrenType & stateType): ReactElement => {
    return (
        <counterContext.Provider value={useCounterContext(intialState)}>
            {children}
        </counterContext.Provider>
    )
}

type useCounterHookType = {
    count: number,
    increment: ()=> void,
    decrement: () => void,
}

export const useCounter = ():useCounterHookType => {
    const { state : {count},increment ,decrement} = useContext(counterContext)
    return {count,increment,decrement}
}

type useCounterTextHookType = {
    text: string,
    handleTextInput: (e: ChangeEvent<HTMLInputElement>)
    => void,
}

export const usecCounterText = () : useCounterTextHookType => {
    const {state : {text} , handleTextInput} = useContext(counterContext)

    return {text, handleTextInput}
}