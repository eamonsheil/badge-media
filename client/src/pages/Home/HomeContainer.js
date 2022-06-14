import FeedContainer from "./NewsFeed/FeedContainer";
import ChatsContainer from "./Chats/ChatsContainer";
import BadgesContainer from "./Badges/BadgesContainer";
import styled from "styled-components";
import { Container } from "../../Styles/Container.styled";

const HomeGrid = styled.div`
    display: flex;
    /* column-gap: 1em; */
    /* grid-template-columns: 30% 40% 30%; */
    justify-content: space-between;
    width: 100%;
    border: 1px solid red;
    height: 100vh;
    /* padding: 10em; */
    @media (max-width: 899px) {
        justify-content: center;
        width: 80%;
    }
`

function HomeContainer() {
    return ( 
        <Container>
        <HomeGrid>
           
            <BadgesContainer/>
            <FeedContainer/>
            <ChatsContainer/>
            

        </HomeGrid>
        </Container>
     );
}

export default HomeContainer;