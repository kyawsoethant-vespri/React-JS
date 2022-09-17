import React from "react";
import ThemeContext from "./ThemeContext";

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
      return(
        <div>
            Button {this.context}
        </div>
      );
    }
  }

export default class ContextDemo extends React.Component
{
    render(){
        return (
            <div>
                 <ThemedButton />
            </div>
        );
    }
}