import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false); //Initially set to false (hidden)

    function flipVisibility(): void { //Used from chapter 4
        setVisible(!visible); // Controller that will flip the state
  }
    
    //Need button click code and to showcase 42 only when pressed
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button> {/*When button is clicked activate the controller*/}
            {visible && <div>42</div>} {/*Display 42 when clickedR*/}
        </div>
    )
}
