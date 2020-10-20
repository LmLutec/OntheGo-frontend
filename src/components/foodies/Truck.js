import React from 'react'
import { withRouter } from 'react-router-dom'
 
const Truck = props => {
  const t = props.truck  
console.log(t.menu.items)
// debugger
  function Rate(){
    props.history.push("/new/rating")
  }

  function goBack(){
    window.history.back()
  }

  // const renderItems = () => {
  //   return t.menu.items.map((items) => {
  //     console.log(items)
      //  return items.map((i, id) => <li>{i}</li>)
    // })
// }   
 

  return (
    <div>
        <section>
            <h2>{t.name}</h2>
            Food type:{t.food_type}<br/>
            Phone number:{t.phone_number}<br/>
            Street: {t.street}<br/>
            City:{t.city}<br/>
            State:{t.state}<br/>
            Zip code: {t.zip_code}<br/>
        </section>

        <section>
            <h4>Notes from Truck Owner</h4>
        </section>


        <section>
            <h2>Schedule</h2>
            {/* Monday: {t.schedule.mon_start} to {t.schedule.mon_end}<br/>
            Tuesday: {t.schedule.tues_start} to {t.schedule.tues_end} <br/>
            Wednesday: {t.schedule.wed_start} to {t.schedule.wed_end} <br/>
            Thursday: {t.schedule.thurs_start} to {t.schedule.thurs_end} <br/>
            Friday: {t.schedule.fri_start} to {t.schedule.fri_end} <br/>
            Saturday: {t.schedule.sat_start} to {t.schedule.sat_end} <br/>
            Sunday: {t.schedule.sun_start} to {t.schedule.sun_end} <br/> */}
        </section>

        <section>
            <h2>Menu</h2>
            
        </section>

        <button onClick={() => {goBack()}}>Back to results</button><br/>
        <button onClick={() => {Rate()}}>Rate Foodtruck</button>

    </div>
  )
}
 
export default withRouter(Truck)