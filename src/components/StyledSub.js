import React, { useState, Component } from 'react';
import styled from 'styled-components';
import TickButton from './TickButton';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const StyledSubDiv = styled.div`
border: 1px solid black;
min-width: 15vw;
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

const StyledEditingDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: pink;
`;


const SubDone = ({ sub, _id, ind, remove, tick, edit, editing, setEditing }) => (
    <StyledSubDiv>
    <StyledTitleDiv>
        <p>{sub.body}</p>
    </StyledTitleDiv>
    <StyledUtilsDiv>
        <TickButton _id={_id} ind={ind} ticked={sub.ticked} onClick={tick}></TickButton>
        <DeleteButton _id={_id} ind={ind} onClick={remove}></DeleteButton>
        <EditButton _id={_id} ind={ind} editing={editing} setEdit={setEditing}></EditButton>
    </StyledUtilsDiv>
    </StyledSubDiv>
)

const SubEditing = ({ _id, ind, editing, setEditing }) => (
    <StyledSubDiv>
        <StyledEditingDiv>
        </StyledEditingDiv>
        <StyledUtilsDiv>
                <EditButton _id={_id} ind={ind} editing={editing} setEdit={setEditing} />
        </StyledUtilsDiv>
    </StyledSubDiv>
)



const StyledSub = ({ sub, _id, ind, remove, tick, edit }) => {
    const [editing, setEditing] = useState(false)
    
    return (
        <div>
            {!editing && <SubDone sub={sub} _id={_id} ind={ind} remove={remove} tick={tick} editing={editing} setEditing={setEditing} />}
            {editing && <SubEditing _id={_id} ind={ind} editing={editing} setEditing={setEditing} />}
        </div>
     )
}

export default StyledSub;
