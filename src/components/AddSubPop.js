import React, { useState } from 'react';
import styled from 'styled-components';


const StyledAddSubPop = styled.div`

    background-color: pink;
    position: absolute;
    top: 5%;
    bottom: 5%;
    right: 10%;
    left 10%;
`;


const AddSubPop =({setAddingSub}) => (
    <StyledAddSubPop>
        <button onClick={() => setAddingSub(false)} >X</button>
    </StyledAddSubPop>
)

export default AddSubPop;