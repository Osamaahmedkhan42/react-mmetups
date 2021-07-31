import Newmeetupform from "../components/meetups/Newmeetupform";
import  {useHistory} from 'react-router-dom'

function NewMeetups(){

    const history = useHistory()

    function addMeetUpHnadler(meetupData){

        fetch('https://react-db-e335f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',{
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then( ()=>{
            history.replace('/')
        })
        
        

    }

    return <section>
        <h1> Add New Meetups</h1> 
         <Newmeetupform onAddMeetup={addMeetUpHnadler} />
    </section>
}
export default NewMeetups;