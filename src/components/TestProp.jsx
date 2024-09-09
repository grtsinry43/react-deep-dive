import React from "react";

export class TestProp extends React.Component {

    clickHandle = () => {
        this.props.changeStateHandler('test');
    }

    render() {
        return (
            <div>
                <h1>{this.props.test}</h1>
                <p>{this.props.msg}</p>
                <button onClick={this.clickHandle}>Test</button>
            </div>
        );
    }
}
