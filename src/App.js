import { Routes, Route } from "react-router-dom";
import AllNewMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
     
      <Routes>
        <Route path="/" element={<AllNewMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
