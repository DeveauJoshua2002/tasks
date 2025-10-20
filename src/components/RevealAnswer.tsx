import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false); //Taken from chapter 4 but set to false
    
    //Need button click code and to showcase 42 only when pressed
    return (
        <div>
            <Button onClick={() => { console.log("Hello World!")}}>Log Hello World</Button> {/*Code copied from earlier App.tsx */}
            {visible && <div>42</div>} {/*Display 42 when clicked*/}
        </div>
    )
}
