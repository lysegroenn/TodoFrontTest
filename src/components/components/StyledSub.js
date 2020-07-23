import React, { Component } from 'react';
import styled from 'styled-components';
import TickButton from './TickButton';
import DeleteButton from './DeleteButton';

const StyledSubDiv = styled.div`
border: 1px solid black;
max-width: 20vw;
height: 25vh;
display: grid;
grid-template-columns: auto auto 7vh;
grid-template-rows: 6vh auto;
grid-template-areas: 
"title title title"
"body body util"

`;

const StyledTitleDiv = styled.div`
    grid-area: title;
    min-width: 15vw;
    text-align: center;
`;

const StyledUtilsDiv = styled.div`
    grid-area: util;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


const StyledSub = ({ sub, _id, ind, remove, tick }) => (
    <StyledSubDiv>
        <StyledTitleDiv>
            <p>{sub.body}</p>
        </StyledTitleDiv>
        <StyledUtilsDiv>
            <TickButton _id={_id} ind={ind} ticked={sub.ticked} onClick={tick}></TickButton>
            <DeleteButton _id={_id} ind={ind} onClick={remove}></DeleteButton>
        </StyledUtilsDiv>
    </StyledSubDiv>
)

export default StyledSub;
