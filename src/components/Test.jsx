import React from 'react';
import {TestProp} from "./TestProp";

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'test11111',
            msg: 'msg'
        };
    }

    clickHandler = (e, msg) => {
        console.log(e);
        console.log(msg ? msg : 'no msg');
        this.setState({test: 'test4234324234234234234'});
        (() => {
            console.log('没有');
        })();
    }

    render() {
        return (
            <div>
                <h1>{this.state.test}</h1>
                <p>{this.state.msg}</p>
                <button onClick={() => this.setState({test: 'test'})}>Test</button>
                <button onClick={this.clickHandler}>Test</button>
                <button onClick={(e) => this.clickHandler(e, "78788")}>Test</button>
                <TestProp test={this.state.test} msg={this.state.msg}
                          changeStateHandler={(msg) => this.setState({msg})}/>
            </div>
        );
    }
}

Test.defaultProps = {
    test: 'test'
}
