import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useCallback, useMemo } from "react";
import "./index.css";


function ParentComponent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);
    return <ChildComponent onClick={handleClick} count={count} />
}

const ChildComponent = React.memo(({ onClick, count }) => {
    console.log('Child rendered: ' + count);
    return <button onClick={onClick}>Count: {count}</button>
});

export function App() {
    return (
        <div>
            <h1 className="heading">Hello, From Namaste ReactJs</h1>
            <ParentComponent />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);