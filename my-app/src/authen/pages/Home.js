import React, { Component } from 'react';
import {fetchStatistic } from  '../api/index'
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount(){
        fetchStatistic().then((resp) =>{
            this.State({
                data: resp.data,
            });
           
        }).catch((err) =>{
            console.log(err)
        });
    }

    render() {
        const{data} = this.state;
        return (
            <div>
                HomePage: <br/>
                NumberCustomer: {data.numberCustomer} <br/>
                NumberMedicine: {data.numberMedicine}<br/>
                NumberMedicineOutStock: {data.numberMedicineOutStock} <br/>
                <button onClick={
                    ()=> {
                        localStorage.removeItem("token")
                    }
                }>Logout</button>
            </div>
        );
    }
}

export default Home;