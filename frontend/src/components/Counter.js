import React from "react";

export default class Counter extends React.Component{

    constructor(props){ //for property
        super(props);

        this.state = {
            counter : this.props.initialValue
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // constructor(){
    //     super();

    //     this.state = {
    //         counter : 0
    //     }
    // }
        
    // increment()
    // {
    //     this.setState(
    //         { counter : this.state.counter + 1}
    //     )
    // }

    increment()
    {
        this.setState((state,props) => (
            { counter : this.state.counter + this.props.incValue }
            ))
    }

    decrement()
    {
        this.setState(
            { counter : this.state.counter - 1 }
        )
    }

    render(){

        return(
            <div>
                Counter &nbsp;

                <button type="btn" className="btn btn-primary" onClick={ this.increment }> + </button>

                    &nbsp; {this.state.counter} &nbsp;

                <button type="btn" className="btn btn-primary" onClick={ this.decrement }> - </button>
            </div>
        )
    }
}