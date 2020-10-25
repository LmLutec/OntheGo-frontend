import React from 'react'
import { withRouter } from 'react-router-dom'
import GetRatings from '../owners/GetRatings'
 
const Truck = props => {
  const t = props.truck  
  const s = props.schedule
  const r = props.ratings
  const i = props.items

  let scheduleMessage = ""

  function Rate(){
    props.history.push("/new/rating")
  }

  function goBack(){
    window.history.back()
  }

  function getSchedule(){
    return <div>
            <h2>Schedule</h2>
             Monday: {s.mon_start} to {s.mon_end}<br/> 
             Tuesday: {s.tues_start} to {s.tues_end} <br/>
             Wednesday: {s.wed_start} to {s.wed_end} <br/>
             Thursday: {s.thurs_start} to {s.thurs_end} <br/>
             Friday: {s.fri_start} to {s.fri_end} <br/>
             Saturday: {s.sat_start} to {s.sat_end} <br/>
             Sunday: {s.sun_start} to {s.sun_end} <br/> 
        </div>
  }

  function getRatings(){
    return <div>


          </div>
  }

  function getItems(){

  }


      if (!s){
        scheduleMessage = "Loading"
      }
      else {
        scheduleMessage = getSchedule()
      }

      // if (!r){
      //   message = "Loading"
      // }
      // else {
      //   message = getRatings()
      // }

      // if (!i){
      //   message = "Loading"
      // }
      // else {
      //   message = getItems()
      // }

    return(
      
      <div>

         <section className="schedule_info"> 
            {scheduleMessage}
         </section>

         <h4>Ratings</h4>
         <section className="ratings" style={{display: props.ratings.length > 0 ? 'block' : 'none'}}>
            <GetRatings ratings={r}/>
         </section>
          <button onClick={() => {Rate()}}>Rate Foodtruck</button><br/><br/>

          <button onClick={() => {goBack()}}>Back to results</button><br/>

      </div>
    )
}



  // const renderItems = () => {
  //   return t.menu.items.map((items) => {
  //     console.log(items)
      //  return items.map((i, id) => <li>{i}</li>)
    // })
// }   
 

//   return (
//     <div>
//         <section>
//             <h2>{t.name}</h2>
//             Food type:{t.food_type}<br/>
//             Phone number:{t.phone_number}<br/>
//             Street: {t.street}<br/>
//             City:{t.city}<br/>
//             State:{t.state}<br/>
//             Zip code: {t.zip_code}<br/>
//         </section>

//         <section>
//             <h4>Notes from Truck Owner</h4>
//         </section>


//         <section>
//             <h2>Schedule</h2>
//             Monday: {s.schedule.mon_start} to {s.schedule.mon_end}<br/> 
//             Tuesday: {t.schedule.tues_start} to {t.schedule.tues_end} <br/>
//             Wednesday: {t.schedule.wed_start} to {t.schedule.wed_end} <br/>
//             Thursday: {t.schedule.thurs_start} to {t.schedule.thurs_end} <br/>
//             Friday: {t.schedule.fri_start} to {t.schedule.fri_end} <br/>
//             Saturday: {t.schedule.sat_start} to {t.schedule.sat_end} <br/>
//             Sunday: {t.schedule.sun_start} to {t.schedule.sun_end} <br/>
//         </section>

//         <section>
//             <h2>Menu</h2>
            
//         </section>

//         <button onClick={() => {goBack()}}>Back to results</button><br/>
//         <button onClick={() => {Rate()}}>Rate Foodtruck</button>

//     </div>
//   )
// }
 
export default withRouter(Truck)