import React from "react";
import MouseTracker from "./MouseTracker";
import MouseWithCat from "./MouseWithCat";

export default class RenderProperty  extends React.Component
{
    render( ){
        return( <div>

            {/* <MouseTracker /> */}
            <MouseWithCat/>

        </div> );
    }
}