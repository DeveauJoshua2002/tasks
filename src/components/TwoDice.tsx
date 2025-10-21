import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {

    //Creating a basic structure. (None of these are finished yet)
    return (
        <div>
            {/*Need Die value */}
            <span data-testid="left-die">{}</span>
            <span data-testid="right-die">{}</span>
            {/*Need Roll x Button for each */}
            <Button onClick={TwoDice}>Roll Left</Button> 
            <Button onClick={TwoDice}>Roll Right</Button>
        </div>
    );
}
