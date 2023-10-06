import './doctors.css'
import data from "./data";
import Card from "./Card";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Doctors = () => {
  return (
    <>
    <br></br>
    <h1 className='text-red-400  font-bold text-2xl text-center py-2'>Our Team of Experts</h1>
    <div className='wrap'>
    
       <Splide options={{perPage : 4, grag :'free', arrows : false}}>
        {
          data.map((d) => {
            return (
                <SplideSlide key={d.id}>
                <Card name={d.name} desc={d.desc} field={d.field} duration={d.duration} amount={d.amount} location={d.location} />
                </SplideSlide>
            )
          })
        }
      </Splide>
    </div>
    </>
  )
}
// export default Doctors;