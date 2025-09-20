import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            
            <h1>This is a header</h1>

            <img src="" />
            
            <ul>
                <li>First list</li>
                <li>Second list</li>
                <li>Third list</li>
            </ul>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World. This is Joshua Deveau
            </p>
        </div>
    );
}

export default App;
