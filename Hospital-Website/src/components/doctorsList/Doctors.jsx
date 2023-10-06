import './doctors.css'
import data from "./data";
import Card from "./Card";

 const Doctors = () => {
  return (
    <>
    <br></br>
    <h1 className='text-red-400  font-bold text-2xl text-center py-2'>Our Team of Experts</h1>
    <div className='wrap'>
    
       
        {
          data.map((d) => {
            return (
                <Card name={d.name} desc={d.desc} field={d.field} duration={d.duration}  location={d.location} />
            )
          })
        }
    </div>
    </>
  )
}
export default Doctors;