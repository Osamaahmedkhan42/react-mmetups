import Meetuplist from "../components/meetups/Meetuplist";
import  {useState} from 'react';
import  {useEffect} from 'react';



function AllMeetups() { 

    const [isLoading,setIsLoading]=useState(true);
    //another state for handling the loaded data

    const [loadedMeetups,setLoadedMeetups] =useState([]);

    useEffect( ()=> {

        setIsLoading(true);
        fetch('https://react-db-e335f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json').then(response=> {
        return response.json();
    }).then(data=> {

        const meetups=[];
        for  (const key in data) {
            const meetup = {

                id : key,
                ...data[key]

            };
            meetups.push(meetup);
        }


        setIsLoading(false);
        setLoadedMeetups(meetups);
        
    })

    },[])
    
    

    if (isLoading) {
        return <section>
            <p>component is loading...</p>
        </section>
    }


    return (
        <section>
          <h1>All Meetups</h1>
          <Meetuplist meetups={loadedMeetups} />
        </section>
      );
}
export default AllMeetups;