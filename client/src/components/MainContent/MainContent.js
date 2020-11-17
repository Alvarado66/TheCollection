import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import './MainContent.css'


function JustPick() {
    return (
        <div className="mainJumbo">
            <Jumbotron fluid className="jumboBack">
                <Container className="mainContainer">
                    <h1>Instructions</h1>
                    <p>
                        Need help deciding where to eat?
                        Or What to do?
                    </p>
                    <p>
                        Fill in your ideas down below and let's get started!
                    </p>
                    <Button className ="letsGo" variant="flat">Let's Go!</Button>
                </Container>
            </Jumbotron>
        </div>

    );
}

export default JustPick;