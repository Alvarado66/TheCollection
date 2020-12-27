import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import './StartButton.css'

class StartBtn extends Component {
    state = {
        visible: true
    };

    render() {
        if (!this.state.visible) {
            return <div></div>;
        }

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
                            Just click the button below and let's get started!
                        </p>

                        <Button className="letsGo" variant="flat" onClick={() => { this.setState({ visible: false }) }}>Let's Go!</Button>
                    </Container>
                </Jumbotron>
            </div>

        );
    }
};

export default StartBtn;