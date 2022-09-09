import React from "react";

export default class Counter extends React.Component{

    constructor(props){ //for property
        super(props);

        this.state = {
            counter : this.props.initialValue
        }
    }

    // constructor(){ //for State
    //     super();

    //     this.state = {
    //         counter : 0
    //     }
    // }

    increment()
    {
        this.setState(
            {counter : this.state.counter + 1}
        )
    }

    decrement()
    {
        this.setState(
            {counter : this.state.counter - 1}
        )
    }

    render(){

        return(
            <div>
                Counter &nbsp;

                <button type="btn" onClick={() => this.increment()}> + </button>

                    &nbsp; {this.state.counter} &nbsp;

                <button type="btn" onClick={() => this.decrement()}> - </button>
            </div>
        )
    }
}