import './Card.css'
import image from "./images/2205.jpg";
import rupee from "./images/rupee.svg"
import date from "./images/date.svg"

const Card = (props) => {
   return (
      <>
            <div className='single-card'>
               <div className='main-content'>
                  <img src={image} className='img'></img>
                  <div className='info'>
                     <h2 className='name'>{props.name}</h2>
                     <p className='desc'>{props.desc}</p>
                     <p className='field'>{props.field}</p>
                     <div className='duration-amount'>
                        <div className='exp'>
                           <img src={date} />
                           <span className='data'>{props.duration}</span>
                        </div>
                        <span className='data'>₹ {props.amount}</span>
                     </div>
                  </div>
                  {/* <p>{props.location}</p> */}
               </div>
               <div className='btn'>
                  <button className='btn-profile'>
                     View Full Profile
                  </button>
                  <button className='btn-appointment'>
                     Book An Appointment
                  </button>
               </div>
            </div>
      </>
   )
}
export default Card;