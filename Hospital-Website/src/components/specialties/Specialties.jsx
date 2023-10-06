import './specialties.css'
import { data } from './data'
import SpecialCard from "./SpecialCard"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Specialties = () => {
  return(
    <>
    <br></br>
    <h1 className='text-red-400  font-bold text-2xl text-center py-2'>Top Specialties</h1>
      <div className='wrap'>
      <Splide options={{perPage : 4, gap: "0.5rem", grag :'free', arrows : false}}>
        {
            data.map((d)=>{
              return(
                <SplideSlide key={d.id}>
                <SpecialCard image={d.image} special={d.special}/>
                </SplideSlide>  
              )
            })
        }
        </Splide>
      </div>
    </>
  )
}

export default Specialties 