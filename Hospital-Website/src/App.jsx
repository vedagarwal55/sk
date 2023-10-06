import Home from './pages/home/Home'
import AboutUs from './pages/about us/AboutUs'
import Achievement from './pages/achievement/Achievement'
import Careers from './pages/careers/Careers'
// import Doctors from './pages/doctors/Doctors'
// import Specialties from './pages/specialties/Specialties'
import ContactUs from './pages/contact us/ContactUs'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import Spinner from './components/Spinner'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import {HomePage} from './pages/dashboard/HomePage';
import { ApplyDoctor } from './pages/ApplyDoctor/ApplyDoctor'
import DoctorsPage from './components/DoctorsPage/DoctorsPage'
import doctorsList from './components/doctorsList/doctorsList';

const App = () => {
  const{loading} = useSelector(state => state.alerts)
  return (
    <BrowserRouter>
      
      {loading ? <Spinner/> :
      <Routes>
       <Route path="/dashboard" element={
       <ProtectedRoute>
        <HomePage/>
        </ProtectedRoute>
      }/>

       <Route path="/apply-doctor" element={
       <ProtectedRoute>
        <ApplyDoctor/>
        </ProtectedRoute>
      }/>


      <Route path="/" element={<Home />}  />
      {/* <Route path="/doctors" element={<Doctors />} /> */}
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/Doctorspage" element={<DoctorsPage/>}/>
      <Route path="/DoctorList" element ={<doctorsList/>}/>
     
      <Route path="/login" element={
      <PublicRoute>
      <Login />
      </PublicRoute>
    }/>
      <Route path="/register" element={
      <PublicRoute>
        <Register />
        </PublicRoute>
      } />
      
      {/* <Route path="/specialties" element={<Specialties />} /> */}
  </Routes>
      
      }
      
     
    </BrowserRouter>
  )
}

export default App