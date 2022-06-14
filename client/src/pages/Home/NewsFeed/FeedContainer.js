import CreatePostContainer from "./CreatePost/CreatePostContainer";
import styled from "styled-components";

const FeedOutline = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    max-width: 100%;
    min-width: 40%;

`

function FeedContainer() {
    
    
    return ( 
        <FeedOutline>
            <h1>Feed Container</h1>
            <CreatePostContainer/>
            
        </FeedOutline>
     );
}

export default FeedContainer;