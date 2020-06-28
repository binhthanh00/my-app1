import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props){
       super(props)
        console.log("Contructing....")
        this.state = {
            counter: 0 ,
            counter2: 0,
            showCounter1: true
            
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log("Get Derived State From Props")
        return null;
    }
    // shouldComponentUpdate (nextProps, nextState){
    //     console.log("this:", this.state, this.props)
    //     console.log("next:", nextState, nextProps)
    //     console.log("Should Component Update")
    //     if(this.state.counter === nextState.counter){
    //         return false
    //     }
    //     return true
    // }
    componentDidMount(){
        console.log("Component DidMount")
    }
    increaseCounter = (whichCounter) =>{
        if(whichCounter === 1){
            console.log("increasing Counter")
            this.setState({
                counter: this.state.counter + 1  
            })
          }  else{
            console.log("increasing Counter")
            this.setState({
                counter2: this.state.counter2 + 1
            })
        }
       
    
    }
    changeNothing = () =>{
        this.setState({
            counter: this.state.counter
        })
    }
    removeCount1 = () =>{
        this.setState({
            showCounter1: false
        })
    }
    render() {
        console.log("Rendering...")
        return (
            <div>
                {this.state.showCounter1 && <Child counter = {this.state.counter } />}
                {/* <Child counter = {this.state.counter2} /> */}
                <button onClick={() => {this.increaseCounter(1)}}>Increase Counter 1</button>
                <button onClick={() =>{this.increaseCounter(2)}}>Increase Counter 2</button>
                <button onClick={this.changeNothing}> Change nothing</button>
                <button onClick={this.removeCount1}>Remove Counter</button>
                Parent : counter{this.state.counter }
            </div>
        );
    }
   

       
    
}

export default Parent;