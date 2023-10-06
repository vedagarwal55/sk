import React from 'react'
import { topPicks } from '../dataForAll/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './topNews.css'
export const TopNews = () => {
  return (
  <>
  <section>
  <h1 className='text-red-400  font-bold text-2xl text-center py-2'>Latest News</h1>

  <div className='hidden lg:flex m-auto py-2 px-2'>
    <Splide options={{perPage : 4, gap: "0.5rem", grag :'free', arrows : false}}>
    {
      topPicks.map((item)=>{
        return(
          <SplideSlide key={item.id}>
          <div className ='rounded-3xl relative' >
            <div className='absolute w-full h-full bg-black/50 rounded-3xl'>
              <p className='px-2 pt-4 font-bold text-2xl text-white'>{item.title}</p>
              <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>View More</button>
            </div>
            <img className='h-[250px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
            src={item.img}
            alt={item.title}
            />
          </div>
          </SplideSlide>
        )
      })
    }
    </Splide>
  </div>
  </section>
  <section className='contact_info'>   
  <h1 className='text-red-400  font-bold text-4xl py-2 pl-5'>Feel Free to ask us</h1>
  <div className='contact_right'>
   <div className ='card-container rounded-3xl relative' >
        <img src='https://picsum.photos/300/200' alt='Card Image' className='card-img'/>
        
        <input className='card-title' placeholder='Ask your question'
            type="text"
           // value={this.state.value}
           // onChange={this.handleChange}
         />
        
        <a href='cardPage' className='card-btn'>Learn More</a>
   </div>
   <div class = "contact_left">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9302.828540972028!2d83.3590140610842!3d21.92762778614647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27253e9ec65f9b%3A0xbe3ad0e050e54f7d!2sFortis%20OP%20Jindal%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1692704338551!5m2!1sen!2sin" width="1200" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
   </section>
  </>

  )
}
