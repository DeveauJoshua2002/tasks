import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    //Forgot I needed to change function to allow newMember
    function chooseMember(newMember: string) {
        
        if (!team.includes(newMember)) {
            //Ok this seems to be the problem the .push
            //team.push(newMember);

            //instead (from the texbook) we need to update the state's immutability
            setTeam([...team, newMember]);
        }
        
    }

    function clearTeam() {
        //Now when this function is called, it should just set the state to an empty array
        setTeam([]);
        
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            {/*I was getting errors, forgot now I needed to
                            Pass the 'option' (aka name) to chooseMember
                            Previously it was doing the default mouse click which was giving me errors */}
                            <Button onClick={() => chooseMember(option)} size="sm">
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
