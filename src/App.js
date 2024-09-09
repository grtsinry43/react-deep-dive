import Money from "./components/Money";
import React from "react";
import State from "./components/State";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.inputFile = React.createRef();
    }

    state = {
        dollar: 0,
        cny: 0,
        numText: "",
        checkBox: [
            {id: 1, value: "apple", isChecked: false},
            {id: 2, value: "banana", isChecked: false},
            {id: 3, value: "cherry", isChecked: false},
            {id: 4, value: "date", isChecked: false},
            {id: 5, value: "elderberry", isChecked: false},
        ]
    }

    convertToUSD = (e) => {
        const value = e.target.value.replace(/[^\d.]/g, "");
        const numericValue = parseFloat(value) || 0;
        this.setState({
            cny: value,
            dollar: numericValue * 0.14066175
        });
    }

    convertToCNY = (e) => {
        const value = e.target.value.replace(/[^\d.]/g, "");
        const numericValue = parseFloat(value) || 0;
        this.setState({
            dollar: value,
            cny: numericValue * 7.10925,
            numText: "",
        });
    }

    inputNumHandler = (e) => {
        const str = e.target.value.split("").map(char => {
            if (!isNaN(char)) {
                return char;
            }
            return "";
        }).join("");

        this.setState({
            numText: str
        });
    }

    checkHandle = (index) => {
        const arr = [...this.state.checkBox];
        arr[index].isChecked = !arr[index].isChecked;
        this.setState({
            checkBox: arr
        });
    }

    uploadHandler = (file) => {
        if (!file) {
            return;
        }
        console.log(file);
    }

    render() {
        return (
            <>
                <Money text={"人民币"} value={this.state.cny} handleChange={this.convertToUSD}/>
                <Money text={"美元"} value={this.state.dollar} handleChange={this.convertToCNY}/>
                <input value={this.state.numText} placeholder={"只能输入数字"} onChange={this.inputNumHandler}/>
                {/*多选框：*/}
                {
                    this.state.checkBox.map((item, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" checked={item.isChecked}
                                       onChange={() => this.checkHandle(index)}/>
                                <span>{item.value}</span>
                            </div>
                        );
                    })
                }
                {/*单选框：*/}
                {
                    this.state.checkBox.map((item, index) => {
                        return (
                            <div key={index}>
                                <input type="radio" name={"fruit"} checked={item.isChecked} onChange={() => {
                                    const checkBox = this.state.checkBox.map((item2) => {
                                        if (item2.id === item.id) {
                                            item2.isChecked = !item2.isChecked;
                                        } else {
                                            item2.isChecked = false;
                                        }
                                        return item2;
                                    });
                                    this.setState({checkBox});
                                }}/>
                                <span>{item.value}</span>
                            </div>
                        );
                    })
                }
                <select>
                    {
                        this.state.checkBox.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>{item.value}</option>
                            );
                        })
                    }
                </select>
                <input type="file" ref={this.inputFile}/>
                <button onClick={() => {
                    this.uploadHandler(this.inputFile.current.files[0]);
                }}>上传文件
                </button>

                <State/>
            </>
        );
    }
}

export default App;
