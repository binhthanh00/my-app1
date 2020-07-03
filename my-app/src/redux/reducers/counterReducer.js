import {INCREASE, DECREASE, CHANGE_STATUS} from '../constants/ActionType'
const initialStateCounter = {
    counter:{
        value:0,
        status: false,
    }
};
const counterReducer = (state=initialStateCounter,action) =>{
    switch(action.type){
        case INCREASE:
            let value = state.counter.value;
            // if(state.counter.status){
                value++;
            // }
            return {
                counter: {
                    ...state.counter,
                    value ,
                    
                }
            }
        case DECREASE:
            return {
                counter:{
                    ...state.counter,
                    value : state.counter.value -1,
                }
            }
        case CHANGE_STATUS:
            return {
                counter:{
                    ...state.counter,
                    status : !state.counter.status
                }
            }
    
    }
    return state;
};

export {
    counterReducer
}