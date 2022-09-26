import React from 'react';

const ComponentOne = ( ) => {
    return ( 
            <div>
                <h1> Component one </h1>
            </div>
    )
};

const ComponentTwo = ( ) => {
    return ( 
            <div>
                <h1> Component two </h1>
            </div>
    )
};

const components = {
    "one" : ComponentOne,
    "two" : ComponentTwo,
};

const RunTimeTypeDemo = ( ) => {
    
    let key = "one";
    let Component = components [key];

    return(
        <div>
            <Component/>
        </div>
    )
}

export default RunTimeTypeDemo;