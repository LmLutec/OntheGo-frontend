import React from 'react'
import { withRouter } from 'react-router-dom'
import GetRatings from '../owners/GetRatings'
 


const Truck = props => {
  const t = props.truck  
  const s = props.schedule
  const r = props.ratings
  const i = props.items
  const n = props.notes

  let beverages = []
  let sides = []
  let entrees = []
  let sandwiches = []
  let desserts = []
  let salads = []

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


  function getItems(){
    i.map((item) => {
      item.forEach((food) => {
        switch (food.item_type) {
          case "Beverage":
            beverages.push(food)
            break;
          case "Dessert":
            desserts.push(food) 
            break;
          case "Entree":
            entrees.push(food)
            break;
          case "Salad":
            salads.push(food)
            break;
          case "Sandwich":
            sandwiches.push(food)
            break;
          case "Side":
            sides.push(food)
            break;
        }
      })  
    })
  }

  function getNotes(){
    return n.map((notes) => {
      return notes.map((note, id) => <li key={id}>{note.date}: {note.message}</li>)
    })
  }

  function getBeverages(){
  return beverages.map((drink, id) => <li key={id}>{drink.name}<i>({drink.description})</i>- ${drink.price} </li>)
  }

  function getEntrees(){
  return entrees.map((entree, id) => <li key={id}>{entree.name}<i>({entree.description})</i>- ${entree.price}</li>)
  }

  function getSides(){
  return sides.map((side, id) => <li key={id}>{side.name}<i>({side.description})</i>- ${side.price}</li>)
  }

  function getDesserts(){
  return desserts.map((dessert, id) => <li key={id}>{dessert.name}<i>({dessert.description})</i>- ${dessert.price}</li>)
  }

  function getSalads(){
  return salads.map((salad, id) => <li key={id}>{salad.name}<i>({salad.description})</i>- ${salad.price}</li>)
  }

  function getSandwiches(){
  return sandwiches.map((sandwich, id) => <li key={id}>{sandwich.name}<i>({sandwich.description})- ${sandwich.price}</i></li>)
  }

      if (!s){
        scheduleMessage = "Loading"
      }
      else {
        scheduleMessage = getSchedule()
      }

    return(
      

      <div>
        <section className="truck-details">
          <h2>{t.name}</h2>
          <i>{t.food_type}</i><br/>
          {t.street}<br/>
          {t.city}, {t.state}<br/>
          {t.zip_code}<br/>
          {t.phone_number}
          
        </section>

        <section className="notes" style={{display: n.length > 0 ? 'block' : 'none'}}>
            {getNotes()}
        </section>


         <section className="schedule_info"> 
            {scheduleMessage}
         </section>

         <section className="ratings" style={{display: r.length > 0 ? 'block' : 'none'}}>
          <h2>Ratings</h2>
            <GetRatings ratings={r}/>
         </section>

          <h2>Menu</h2>
            {getItems()}
          <section className="full-menu">
            <div className="beverages" style={{display: beverages.length > 0 ? 'inline-block' : 'none'}}>
              <h3>Beverages:</h3>
              {getBeverages()}
            </div><br/>
            <div className="entrees" style={{display: entrees.length > 0 ? 'inline-block' : 'none'}}>
              <h3>Entrees:</h3>
              {getEntrees()}
            </div><br/>
            <div className="sandwiches" style={{display: sandwiches.length > 0 ? 'inline-block' : 'none'}}>
              <h3>Sandwiches:</h3>
              {getSandwiches()}
            </div><br/>
            <div className="salads" style={{display: salads.length > 0 ? 'inline-block' : 'none'}}>
              <h3>Salads:</h3>
              {getSalads()}
            </div><br/>
            <div className="sides" style={{display: sides.length > 0 ? 'inline-block' : 'none'}}>
              <h3>Sides:</h3>
              {getSides()}
            </div><br/>
            <div className="desserts" style={{display: desserts.length > 0 ? 'inline-block' : 'none'}}>
              <h3>Desserts:</h3>
              {getDesserts()}
            </div>
           
          </section><br/>

          <button onClick={() => {Rate()}}>Rate Foodtruck</button><br/><br/>

          <button onClick={() => {goBack()}}>Back to results</button><br/>

      </div>
    )
}
 
export default withRouter(Truck)