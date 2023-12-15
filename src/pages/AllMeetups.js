import MeetUpList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllNewMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-21c8f-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...... Please Wait .... Reterving Data .... </p>
      </section>
    );
  }
  // Parse the JSON data

  return (
    <section>
      <h1>All New Meetups</h1>
      <MeetUpList meetups={loadedMeetups} />
    </section>
  );
}

export default AllNewMeetupsPage;
