// Write your Character component here
import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import styled from 'styled-components'
import axios from 'axios'


const Character = props => {

    const {data} = props
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    const StyledText = styled.div`
    color: #0c0c0b;
    text-align:justify;
    background: #e5e4e2;
    margin: 0 auto;
    padding: 2rem;
    `


    return(
    <div>
        <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
        <Collapse isOpen={isOpen}>
        <Card style={{ width: '18rem' }} style={{display: 'flex', flexDirection: 'row'}}>
            <CardBody style={{ width: '18rem' }}>
                <StyledText>
                    <p>`{data.name} has eyes that are {data.eye_color} and was born {data.birth_year}. `</p>
                    <p>Lucas ipsum dolor sit amet vader thrawn han dantooine mace windu luuke antilles mace twi'lek. Padmé solo calamari sebulba. Lars jinn kenobi chewbacca. Solo organa c-3po binks darth solo kit. Moff kashyyyk skywalker chewbacca mon lobot jabba ewok. Qui-gon c-3po hoth yavin skywalker sith boba greedo antilles. Leia dagobah hutt wedge grievous. Lars darth r2-d2 lando calrissian thrawn tatooine wedge skywalker. Hutt leia moff kamino alderaan skywalker. Jango darth ben wedge. Skywalker hutt zabrak skywalker calrissian endor sidious darth moff.</p>
                </StyledText>
            </CardBody>
        </Card>
        </Collapse>
    </div>
    ) 
}

export default Character