import React from 'react';
export default class FocusDemo extends React.Component
{  
     constructor(props){
            super(props);
            this.textInput = React.createRef();
        }

    focus() {
            this.textInput.current.focus();
        }

    show() {
        console.log('Show : ',this.textInput.current.value);
    }

    render(){

        return(

            <div>
                Focus Demo &nbsp;

                <input
                    type="text"
                    ref={this.textInput}
                />

                &nbsp;&nbsp;

                <button type='button' onClick={() => this.focus()} className={"btn btn-primary"}> Focus </button> &nbsp;

                <button type='button' onClick={ () => this.show()} className={"btn btn-primary"}> Show </button>

            </div>

        );
    }
}