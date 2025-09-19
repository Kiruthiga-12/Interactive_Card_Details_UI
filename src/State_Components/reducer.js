import card from "./object"

const reducer = (cstate=card,action)=>{
    switch(action.type){
        case 'ENTER_NAME':{ return {...cstate,name:action.value}}
        case 'ENTER_NUMBER':{ return {...cstate,number:action.value}}
         case 'ENTER_MONTH':{ return {...cstate,month:action.value}}
          case 'ENTER_YEAR':{ return {...cstate,year:action.value}}
        default: return cstate;
    }
}

export default reducer;