import React, { Component, Profiler } from "react";

export default class Avatar extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        let profile = this.props.profile;

        return(

            <div>
                Avatar {profile.name}
            </div>
        );

       

    }
}