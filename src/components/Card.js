import React from 'react'

export default function Card() {
  return (
    <>
    <h1 className='program'>Programs</h1>
   <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly', marginTop:'.8rem', flexWrap:'wrap'}}>
   <div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Weight Training</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Just @999</a>
  </div>
</div>
<div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Fat-Loss Training</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Just @1299</a>
  </div>
</div>
<div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1608138404239-d2f557515ecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Cardio</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Just @1399</a>
  </div>
</div>
<div className="card" style={{width: '22rem',margin:'.8%'}}  >
  <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="GYm image"/>
  <div className="card-body" >
    <h5 className="card-title">Personal Training</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Just @6000</a>
  </div>
</div>
   </div>
    </>
  )
}
