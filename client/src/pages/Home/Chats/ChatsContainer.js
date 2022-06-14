import styled from "styled-components";

const ChatsOutline = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    width: 30%;
    /* max-width: ; */

    @media (max-width: 899px) {
        display: none;
    }

`

function ChatsContainer() {
    return ( 
        <ChatsOutline>
            <h1>Chats Container</h1>

        </ChatsOutline>
     );
}

export default ChatsContainer;