import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './inputopt.css';


function NewChoices() {
    return (

        <div className="userChoices">
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Please Add your Options Below: </Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Button className='newOpt' variant='flat'>Add!</Button>
            </Form.Group>
        </div>



    )
};

export default NewChoices;