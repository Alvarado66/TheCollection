import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import './StartButton.css'
import NewChoices from '../InputOptions/inputopt';

class StartBtn extends Component {
    state = {
        visible: true
    };

    render() {
        const optionsTable = this.state.visible ? "hide" : "show";
        if (!this.state.visible) {
            return <NewChoices />;
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
                        
                        <Button className="letsGo" variant="flat" onClick={() => { 
                            this.setState({ visible: !this.state.visible }) }}>Let's Go!
                        {optionsTable}    
                        </Button>
                    </Container>
                </Jumbotron>
            </div>

        );
    }
};

export default StartBtn;