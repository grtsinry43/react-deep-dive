import React, {useEffect} from "react";

function State() {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return () => {
            document.title = "React App";
        };
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default State;
