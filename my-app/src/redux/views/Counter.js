import React, { Component } from 'react';
import store from '../store/store';
// import {INCREASE, DECREASE, CHANGE_STATUS} from '../constants/ActionType'
import {connect} from 'react-redux'
import {increase,decrease,changeStatus} from '../actions/CounterAction'


 class Counter extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     counter: store.getState().counter
        // }

    }

    increase = () =>{
      this.props.increase()
    };
    decrease = () =>{
      this.props.decrease()
    }
    changeStatusCounter =() =>{
        this.props.changeStatus()
    }
    render() {
        console.log("Counter:",this.props)
        return (
            <div>
                <br/>
                Countainer : {this.props.counter && this.props.counter.value}
                <button onClick={this.increase}> Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.changeStatusCounter}>
                    Change Status ({this.props.counter && this.props.counter.status ? "ON" :"OFF"})
                    </button>
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        counter: state.counter
    }
}
 function mapDispatchToProps(){
    return{
        increase,
        decrease,
        changeStatus
        
    }
 }
export default connect(mapStateToProps,mapDispatchToProps())(Counter)


