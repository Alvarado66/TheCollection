import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
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
                </Container>
            </Jumbotron>
        </div>

    );
}

export default JustPick;