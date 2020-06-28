import React, { Component } from 'react';

export default class MyComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                data: {
                    counter: 0,
                },
            };
        }
        increase = () =>{
            this.setState({
                data:{
                    counter: this.state.data.counter + 1,
                }
            })
        }
        changeNothing = () =>{
            this.setState({
                // counter: this.state.data.counter,
                data: this.state.data
            })
        }
        render() {
          
            // const (data) = this.props
        return (
            <div>
                <Counter data = {this.state.data} />
                <CounterFuc data={this.state.data} />
                <button onClick={this.increase}> Increase</button>
                <button onClick={this.changeNothing}>ChangeNothing</button>
            </div>
        );
    }
}

class Counter extends React.PureComponent{
    render(){
        console.log("Class counter redndering....")
        const {data} = this.props;
        return <div>Counter : {data.counter}</div>;
    }
}
const CounterFuc = React.memo(({data}) =>{
    console.log("Class changenothing redndering....")
    return <div>Counter: {data.counter}</div>;
})