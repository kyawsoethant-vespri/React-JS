import React, {useId} from "react";

export default function UseIdDemo(props)
{
    const id = useId();
    return (
        <>
            <label htmlFor={id}>Do you like React?</label>
            <input id={id} type="checkbox" name="react"/>
        </>
    );
}