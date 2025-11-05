import React, { useState } from "react";
import { Button } from "react-bootstrap";
//Removed doublehalfstate

//create interface
//This prevents having to repeat the same interface again and again

interface DoubleHalfProperties {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}

//Update function to accept the properties
function Doubler({dhValue, setDhValue}: DoubleHalfProperties): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

//Same for this function
function Halver({dhValue, setDhValue}: DoubleHalfProperties): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element { //This is the parent

    //Inital value must be 10
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/*These are the childs aka child of doublehalf */}
            {/*Pass the state and the setter down to the children */}
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
