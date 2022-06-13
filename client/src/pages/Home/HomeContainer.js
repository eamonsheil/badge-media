import FeedContainer from "./NewsFeed/FeedContainer";
import ChatsContainer from "./Chats/ChatsContainer";
import BadgesContainer from "./Badges/BadgesContainer";



function HomeContainer() {
    return ( 
        <div>
            <h1>Home Container</h1>
            <BadgesContainer/>
            <FeedContainer/>
            <ChatsContainer/>
            

        </div>
     );
}

export default HomeContainer;