import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {

    //So the type has to initally be 'short_asnwer_question'
    //Also for useState it needs to be 'QuestionType' not string
    const[type, SetType] = useState<QuestionType>("short_answer_question");

    function TypeToggle(): void { //Created controller function
        SetType(type); //In progress
    }

    return (
        <div>
            <Button onClick={TypeToggle}>Change Type</Button> {/*Need button labeled 'Change Type' */}
        </div>    
    )
}
