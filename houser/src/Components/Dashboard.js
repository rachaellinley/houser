import React, { Component } from 'react'
import House from "./Components/House";
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
            //Map over the list in your render method, returning the House component for each house
        // (this won't display anything until we get the list from the backend).
    }

    componentDidMount(){
        axios.get("/api/houses/").then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(err => {
          console.log(err);
          //if the axios comes back with a bad status comes back, it allows you to run some code
        });

        deleteHouse = (id) => {
            axios.delete(`/api/houses/:${id}`).then(response => {
                this.setState({
                    houses: response.data
                })
            })
          
          }

    render() {
        let housesMapped = this.state.houses.map(houses => {
            return (
                <House 
                id={houses.id}
                name={houses.name}
                address={houses.address}
                city={houses.city}
                state={houses.state}
                zipcode={houses.zipcode}
                />
            )
        }

        )
        return (

            <div>
                <h1>Dashboard Component</h1>
               
                <Link to="/Wizard">
                {housesMapped}
          <button>Add New Property</button>
                    </Link>

            </div>
        )
    }
}

export default Dashboard