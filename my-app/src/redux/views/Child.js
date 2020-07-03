import react, { Component } from 'react';
import { connect } from 'react-redux';

class Child extends PureComponent {
    constructor() {
        super();
    }
    render() {
        return (
            
        )
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}
export default connect(mapStateToProps)(Child);