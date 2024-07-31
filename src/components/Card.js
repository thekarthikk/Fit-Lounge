import React from 'react'

export default function Card() {
  return (
    <>
    <h1 className='program'>Programs</h1>
   <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly', flexWrap:'wrap'}}>
   <div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Weight Training</h5>
    <p className="card-text">Build strength, endurance, and confidence with our tailored weight training programs. Expert guidance, state-of-the-art equipment, and personalized plans for your fitness goals. Join us <b>Now !</b> </p>
    <div class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Just @999/Monthly
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" >Just @2499/Quarterly</a></li>
    <li><a class="dropdown-item" >Just @4499/Biannually</a></li>
    <li><a class="dropdown-item" >Just @5999/Annually</a></li>
  </ul>
</div>
  </div>
</div>
<div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Fat-Loss Training</h5>
    <p className="card-text">Transform your body and shed excess weight with our specialized fat loss programs. Personalized plans, expert guidance, and effective workouts for achieving your fitness goals.</p>
    {/* <a href="#" className="btn btn-success">Just @1299/per month</a> */}
    <div class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Just @1299/Monthly
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" >Just @2499/Quarterly</a></li>
    <li><a class="dropdown-item" >Just @5499/Biannually</a></li>
    <li><a class="dropdown-item" >Just @6999/Annually</a></li>
  </ul>
</div>
  </div>
</div>
<div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1608138404239-d2f557515ecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Cardio</h5>
    <p className="card-text">Boost your cardiovascular health and endurance with our dynamic cardio programs. Personalized workouts, expert guidance, and state-of-the-art equipment for reaching your fitness goals.</p>
    {/* <a href="#" className="btn btn-success">Just @1399/per month</a> */}
    <div class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Just @1299/Monthly
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" >Just @2499/Quarterly</a></li>
    <li><a class="dropdown-item" >Just @5499/Biannually</a></li>
    <li><a class="dropdown-item" >Just @6999/Annually</a></li>
  </ul>
</div>
  </div>
</div>
<div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Personal Training</h5>
    <p className="card-text">Experience personalized training tailored to your goals with our expert trainers. Customized plans, one-on-one guidance, and state-of-the-art facilities for maximizing your fitness journey.</p>
    <a className="btn btn-dark">Just @4999/per month</a>
  </div>
</div>
   </div>
    </>
  )
}
