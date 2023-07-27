import styled from 'styled-components';
import React, {memo} from 'react';

const GreenButton = styled.button`
    background-color: blue;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 70px;

    @media (min-width: 600px) {
         background-color: red;
         font-size: 10px;
    }

    @media (min-width: 768px) {
        background-color: black;
        font-size: 30px;
    }

    @media (min-width: 992px) {
        background-color: yellow;
        font-size: 40px;
    }
`;

export default memo(GreenButton);