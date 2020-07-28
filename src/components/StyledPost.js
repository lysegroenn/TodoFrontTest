import React, { useState } from 'react';
import styled from 'styled-components';
import StyledSub from './StyledSub';
import AddSubPop from './AddSubPop';

const StyledPostDiv = styled.div`
    background-color: grey;
    margin-bottom: 20px;
    border: solid 1px black;
    color: rgb(29, 29, 238);
    text-align: center;
    position: relative;
`;

const StyledItemsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 15px;
`;


const StyledPost = ({ post, tick, removePost, addSub, removeSub, editSub, editBodySub }) => {
    const [addingSub, setAddingSub] = React.useState(false);
    return (
        <StyledPostDiv>
            <h1 style={{marginBottom: '20px'}}>{post.title}</h1>
            <StyledItemsDiv>
                {post.items ? post.items.map((p, i) => <StyledSub _id={post._id} ind={i} sub={p} tick={tick} remove={removeSub} edit={editSub} editBodySub={editBodySub} />) : null }
            </StyledItemsDiv>
            <button onClick={() => removePost(post._id)}>Remove Post</button>
            <button onClick={() => setAddingSub(true)} >Add Sub</button>
            {/*<button onClick={() => addSub(post._id)}>Add Sub</button>*/}
            {addingSub && <AddSubPop setAddingSub={setAddingSub} />}
        </StyledPostDiv>
    )
};

export default StyledPost;
