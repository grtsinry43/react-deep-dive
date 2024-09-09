import React from "react";

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            value2: ""
        };
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    handleUpperChange = e => {
        // 禁止输入数字
        if (e.target.value.match(/\d/)) {
            return
        }
        this.setState({
            value2: e.target.value.toUpperCase()
        });
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    value={this.state.value2}
                    onChange={this.handleUpperChange}
                />
            </>
        );
    }
}
