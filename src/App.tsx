import React from "react";
import "./App.css";

import { Button, Container, Row, Col } from "react-bootstrap";

{/*Create a variable called local image. Have it point to the Image folder*/}
import localImage from "./Images/Dog_PNG_Clip_Art_Image.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            
            <h1>This is a header</h1>
            {/*Add Image give it Alt text*/}
            <img src={localImage} alt="A picture of a dog" />
            
            <ul>
                <li>First list</li>
                <li>Second list</li>
                <li>Third list</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>Log Hello World</Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>

            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World. This is Joshua Deveau
            </p>
        </div>
    );
}

export default App;
