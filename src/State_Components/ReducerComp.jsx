import { useReducer } from 'react';
import  card from "./object";
import reducer from './reducer';
import context from './context';

const ReducerComp = (props)=>{
    const [details,setDetails] = useReducer(reducer,card);
    return(<>
    <context.Provider value={{details,setDetails}}>
        {props.children}
    </context.Provider>
    </>)
}


export default ReducerComp;