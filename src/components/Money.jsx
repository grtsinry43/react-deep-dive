import React from "react";

function Money(props) {
    return (
        <div>
            <fieldset>
                <legend>{props.text}</legend>
                <input type="text" value={props.value} onChange={props.handleChange}/>
            </fieldset>
        </div>
    );
}

export default Money;
