import React from "react";

export default class FormDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {name : '', gender : 'Male'};
    
        //this.handleChange = this.handleChange.bind(this);
        //this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleInputChange(event) { //generate input handle
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }

    //   handleGenderChange(event){
    //     console.log('Gender ',event);
    //     this.setState({gender : event.target.value});
    //   }
    
      handleSubmit(event) {
        console.log ('A name was submitted: ', this.state);
        event.preventDefault();
      }

      
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>
                            Name &nbsp;
                            <input type="text" name="name" className={"form-control"} value={this.state.value} onChange={this.handleInputChange} />
                        </label>
                    </div> &nbsp;

                    <div>
                        <label>
                            Gender &nbsp;
                            <select name={'gender'} value={this.state.gender} onChange={this.handleInputChange}>
                                <option> Male </option>
                                <option> Female </option>
                            </select>
                        </label>
                    </div> &nbsp;
                 
                    
                    &nbsp; <input type="submit" value="Submit" className={"btn btn-primary"} />
                </form>
            </div>
        )
    }
    
}