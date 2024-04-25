import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";


export default function About(props) {
  return (
    <>
    <div className="about-us">
      <h2>About Us</h2>
      <p>Welcome to Fit Lounge Fitness Center, your ultimate destination for fitness and wellness! We believe that a healthy lifestyle is key to living your best life, and we're here to support you on your journey.</p>

      <h3>Our Facilities</h3>
      <p>We offer state-of-the-art facilities equipped with the latest fitness equipment, including cardio machines, strength training equipment, and dedicated spaces for group classes. Our facilities are designed to cater to a wide range of fitness activities, ensuring that you have everything you need to achieve your fitness goals.</p>

      <h3>Our Team</h3>
      <p>Our team of experienced fitness professionals is here to guide and inspire you every step of the way. From personalized training programs to group fitness classes led by certified instructors, we're committed to helping you stay motivated and engaged in your fitness journey.</p>

      <h3>Contact Us</h3>
      <p>Ready to get started? Contact us today to learn more about our membership options, class schedules, and special offers. We can't wait to welcome you to our family!</p>

      <h3>Address</h3>
      <p>2nd Floor, Beside Indianoil Petrol Bunk, Kavadiguda, Hyderabad - 500080 (Mainroad CGO Towers Lane)</p>

      <h3>Owner Details</h3>
      <p><b>Name : {props.name} </b></p>
      <p><b>Contact Number : {props.contact}</b></p>
      <div className="whatsapp"><FaWhatsappSquare /> : {props.contact}</div>
      {/* <div className="dropdown">
  <a className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Payment Mode
  </a>
  <ul className="dropdown-menu">
    <li><b className="dropdown-item" href="#">Cash</b></li>
    <li><b className="dropdown-item" href="#">Google Pay</b></li>
    <li><b className="dropdown-item" href="#">Phone Pay</b></li>
  </ul>
</div> */}
    </div>
    </>
  )
}
