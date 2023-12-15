
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetupList";



function FavoritesPage() {

  const favoritesCtx = useContext(FavoritesContext);

   let content;

   if (favoritesCtx.totalFavorites === 0) {
    content = <h2>No favorite meetups yet.</h2>;
   }
   else {
    content = <MeetUpList meetups = {favoritesCtx.favorites}/>
   }



  return <section>
    <h1>Your favorite places</h1>
     {content}
  </section>
}

export default FavoritesPage;
