import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './inputopt.css';


function NewChoices() {

    const choices = []

    return (

        <div className="userChoices">
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Please Add your Options Below: </Form.Label>
                <Form.Control className="textarea" rows={3} />
                <Button id="newOpt" variant='flat'>Add!</Button>
            </Form.Group>

            <span className='tag'>Alex</span>
            <span className='tag'>Alex</span>
            <span className='tag'>Alex</span>
        </div>



    )
};

export default NewChoices;