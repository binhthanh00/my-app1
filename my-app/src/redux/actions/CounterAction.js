import {INCREASE, DECREASE, CHANGE_STATUS} from '../constants/ActionType'
import fetchCounter from '../constants/ActionType'
const increasing =() =>({
    type: INCREASE
})

const increase = () => (dispatch) =>{
    return dispatch(increasing())

}

const decreasing = () =>({
    type: DECREASE
})

const decrease = () => (dispatch) =>{
    return dispatch(decreasing())

}

const changeStatusing = () =>({
    type: CHANGE_STATUS
})

const changeStatus = () => (dispatch) =>{
    return dispatch(changeStatusing())

}
export {
    increase,
    decrease,
    changeStatus
}