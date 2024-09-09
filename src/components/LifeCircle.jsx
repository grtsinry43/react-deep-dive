import React from "react";

class LifeCircle extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        this.inputRef.current.blur();
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <input ref={this.inputRef} />
        );
    }
}

export default LifeCircle;
