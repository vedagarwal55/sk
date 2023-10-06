import React from 'react'
import data from './data'
import img from '../doctors/images/2205.jpg'
import './doctorspage.css'
import { useParams } from 'react-router-dom'

const DoctorsPage = () => {
  const { id } = useParams()

  const doctor = data.find(doctor => doctor.id == id)

  return (
    <>
      <div className='parent'>
        <img src={img} className='img' />
        <div>
          <p className='doctors-name'>{doctor.name}</p>
          <p className='doctors-description'>{doctor.desc}</p>
          <p className='doctors-field'>{doctor.field}</p>
        </div>
        <div>
          <p className='doctors-experience'>{doctor.duration}</p>
        </div>
      </div>


      <div className="main-content">
        <div className="left-part">
          {/* iske aandar aayega 2 part about aur education*/}
          <div className="about">
            <div className="about-text">
              About
            </div>
            <div className="content">
              Dr. Ajay Kaul is listed among the top cardiac surgeons in the country and has a vast surgical experience of over 20,000 cardiac surgeries. He is widely acknowledged for his expertise in treating Total Arterial Coronary Bypass Surgery, Paediatric Cardiac Surgery, Valve Repairs, Structural Heart Disease, and Surgery for Cardiac Failure. Dr. Kaul is an expert in the management of heart failure, which includes - LVAD -Left Ventricular Assist Device (Artificial Heart); Heart Transplant, and Implantation of various devices for heart failure. He has also performed over 5000 Minimally Invasive Cardiac Surgical procedures, Interventions for Structural Heart Disease, Peripheral Vascular and Endovascular Stent placement, Transcatheter Aortic Valve Replacement, Transcatheter Mitral Valve replacement transplants, and Left Ventricular Assist Device. Dr. Kaul completed his MBBS, MS (General Surgery) & M.Ch (Cardiothoracic and Vascular Surgery) from Bombay University and has an overall experience of more than 38 years.
            </div>
          </div>
          <div className="education">
            <div className="heading">Education</div>
            <div className="content">MBBS, MS (General Surgery), M.Ch (Cardiothoracic Surgery), Fellowship in Heart & Lung transplant, Hannover Medical School, Fellowship in Minimally Invasive Cardiac Surgery, Lipzig Heart Centre, Germany</div>
          </div>
        </div>
        <div className="right-part">
          Dr. Ajay Kaul is listed among the top cardiac surgeons in the country and has a vast surgical experience of over 20,000 cardiac surgeries. He is widely acknowledged for his expertise in treating Total Arterial Coronary Bypass Surgery, Paediatric Cardiac Surgery, Valve Repairs, Structural Heart Disease, and Surgery for Cardiac Failure. Dr. Kaul is an expert in the management of heart failure, which includes - LVAD -Left Ventricular Assist Device (Artificial Heart); Heart Transplant, and Implantation of various devices for heart failure. He has also performed over 5000 Minimally Invasive Cardiac Surgical procedures, Interventions for Structural Heart Disease, Peripheral Vascular and Endovascular Stent placement, Transcatheter Aortic Valve Replacement, Transcatheter Mitral Valve replacement transplants, and Left Ventricular Assist Device. Dr. Kaul completed his MBBS, MS (General Surgery) & M.Ch (Cardiothoracic and Vascular Surgery) from Bombay University and has an overall experience of more than 38 years.
        </div>
      </div>
    </>
  )
}

export default DoctorsPage