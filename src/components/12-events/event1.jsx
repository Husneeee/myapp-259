import React from "react";
import { Button, Container } from "react-bootstrap";
export const Event1 = () => {
    const handleClick = () => {
        alert("Button Clicked");
    };
    // Event listener lara handler atarken : onClick={handleClick} seklinde yazilabilir
    // Ancak handler isminin yanina () konulursa,  --> onClick={handleClick()}
    // handler olayi beklemeden dogrudan calisir o
    return (
        <Container className="mt-5">
            <h1>EVENTS</h1>
            <Button id="btn" variant="info" onClick={handleClick}>
                Click Me
            </Button>
        </Container>
    );
};

