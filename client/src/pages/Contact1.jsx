import React from 'react';
import styled from "styled-components";
import img from "../assets/contact.png";

const Contact1 = () => {
    return (
        <Container>
            <img src={img} />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    
    img {
        width: 100%;
    }
`;

export default Contact1;