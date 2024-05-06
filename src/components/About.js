import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function About() {
  return (
    <>
    <div className="accordion" id="accordionExample">
      <h1 className='m-2'>About Us</h1>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <big style={{fontWeight:'600'}}>Our Facilities</big>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>We offer state-of-the-art facilities equipped with the latest fitness equipment, including cardio machines, strength training equipment, and dedicated spaces for group classes. Our facilities are designed to cater to a wide range of fitness activities, ensuring that you have everything you need to achieve your fitness goals.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <big style={{fontWeight:'600'}}>Address</big>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>2nd Floor, Beside Indianoil Petrol Bunk, Kavadiguda, Hyderabad - 500080 (Mainroad CGO Towers Lane)</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <big style={{fontWeight:'600'}}>Owner Details</big>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Name : Srikanth Gatla</strong><br />
        <strong>Contact : 9246607713</strong><br />
        <FaWhatsapp style={{fontSize:'1.5rem',fontWeight:'900'}}/><strong> : 9246607713</strong>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
