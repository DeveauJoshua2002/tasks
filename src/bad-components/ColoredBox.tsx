import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

//Define properties for change colors. (Just like with doublehalf)
interface ChangeColorProps {
    colorIndex: number;
    setColorIndex: (newIndex: number) => void;
}

//Update funtion
function ChangeColor({colorIndex, setColorIndex}: ChangeColorProps): React.JSX.Element {
    //Delete the useState here, it's moved to the parent function
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

//I just decided to make another interface
//ColorPreview just displays the color, it doesn't need to change it

//So ColorPreview does not need setColorIndex for any reason
interface ColorPreviewProps {
    colorIndex: number;
}

function ColorPreview({colorIndex}: ColorPreviewProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element { //Parent
    //Move to the Parent component
    //Default color index should only be called here
    //Everywhere else needs to be replaced with colorIndex
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                {/*Set the values for the children. (Just like doublehalf) */}
                <ChangeColor colorIndex={colorIndex} setColorIndex={setColorIndex}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
