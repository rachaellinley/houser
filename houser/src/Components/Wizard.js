import React, { Component } from 'react'
import { Link } from "react-router-dom";
//Write a method in Wizard that sends an axios request to the endpoint you just wrote.
//The axios request should take all the values from state and put them in the body of the request.


export default class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address:'',
            city:'',
            state:'',
            zipcode: ''
          }

    }

    handleNameInput = (val) => {
        this.setState({name: val})
    }

    handleAddressInput = (val) => {
        this.setState({address: val})
    }
    handleCityInput = (val) => {
        this.setState({city: val})
    }

    handleStateInput = (val) => {
        this.setState({state: val})
    }
    handleZipcodeInput = (val) => {
        this.setState({zipcode: val})
    }


    render() {

        return (
            <div>
                <h1>Wizard Component</h1>
                <Link to="/Dashboard">
                    <input name='name' onChange={e=>this.handleNameInput(e.target.value)}/>
                    <input name='address' onChange={e=>this.handleAddressInput(e.target.value)}/>
                    <input name='city' onChange={e=>this.handleCityInput(e.target.value)}/>
                    <input name='state' onChange={e=>this.handleStateInput(e.target.value)}/>
                    <input name='zipcode' onChange={e=>this.handleZipcodeInput(e.target.value)}/>

          <button>Cancel</button>

                    </Link>

            </div>
        );
    }
}

// Set up initial state in Wizard for name, address, city, state, and zipcode.
// Create a corresponding input box in the JSX for each property in state.
// Set up the input boxes to update the correct piece of state on change.


export default Wizard 