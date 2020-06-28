import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props)
        console.log(" Child contructing....")
        this.state = {
            counter: props.counter,
            
        }
    
    }
    static getDerivedStateFromProps(props, state){
        console.log(" Child: Get Derived State From Props")
        return props
    }

    shouldComponentUpdate (nextProps, nextState){
        console.log(" Child Should Component Update")
        if(this.props.counter === nextProps.counter){
            return false
        }
        return true
    }
    componentDidMount(){
        console.log("Child : componentDidMount")
        this.neverDie = setInterval(() =>{
            console.log("I am a never die")
        },1000)
    }

    componentDidUpdate(){
        console.log("Component DidUpdate")
    }
    componentWillUnmount(){
        console.log("component will unmount")
        clearInterval(this.neverDie)
    }
    render() {
        console.log("Child rendering")
        return (
            <div>
                Child: counter {this.state.counter} 
                <br />
                props counter {this.props.counter}
            </div>
        );
        }
}

export default Child;