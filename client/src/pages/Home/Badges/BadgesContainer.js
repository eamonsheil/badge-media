import BadgesInProgress from "./BadgesInProgress";
import MyBadges from "./MyBadges";
import styled from "styled-components";

const BadgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    max-width: 30%;
    min-width:30%;

    @media (max-width: 1099px) {
        display: none;
    }
`

function BadgesContainer() {
    return ( 
        <BadgeContainer>
            <BadgesInProgress/>
            <MyBadges/>
        </BadgeContainer>
     );
}

export default BadgesContainer;