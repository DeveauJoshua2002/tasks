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

    //Used Counter.tsx code as a base

    //const [value, setValue] = useState<number>(0);
    //Need to set some values (They both have to be different at first)
    const [left_dice, set_Left] = useState<number>(2);
    const [right_dice, set_Right] = useState<number>(4);

    //Create 2 functions for rolling each dice

    function roll_left(): void {
        set_Left(d6)
    }

    function roll_right(): void {
        set_Right(d6)
    }

    //Creating a basic structure. (None of these are finished yet)
    return (
        //Create Seperate Div just to display answers
        <div>
            {/*Need Die value */}
            <span data-testid="left-die">{left_dice}</span>
            <span data-testid="right-die">{right_dice}</span>
            
            <div>
                {/*Need Roll Button for each */}
                <Button onClick={roll_left}>Roll Left</Button> 
                <Button onClick={roll_right}>Roll Right</Button>
                {left_dice === right_dice && left_dice === 1 && <div>Lose</div>} {/*Snake Eyes, showcase lose on the bottom */}
                {left_dice === right_dice && left_dice !== 1 && <div>Win</div>} {/*Winning condition, showcase win on the bottom */}
            </div>
            
        </div>
    );
}
