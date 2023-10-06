import './home.css'
// import { Navbar } from '../../components/Navbar'
import { Carousel } from "../../components/Carousel";
import { slides } from "../../dataForAll/data.js";
import { TopNews } from '../../components/TopNews'
import { Doctors } from "../../components/doctors/Doctors";
import  Specialties  from "../../components/specialties/Specialties";
import { Navbar } from './../../components/Navbar';
import { Footer } from 'antd/es/layout/layout';


const Home = () => {
  return (
    <> 
    {/* <Navbar /> */}
    <Navbar/>
    <Carousel data={slides} />
    <Doctors />
    <Specialties />
    <TopNews />
    <Footer/>
    </>
  )
}

export default Home 