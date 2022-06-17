import React from 'react';
import './Middleline.css'
import one from './images/Line 1.svg'
import two from './images/Line 2.svg'
import three from './images/Line 3.svg'
import four from './images/Line 4.svg'
import five from './images/Line 5.svg'
import six from './images/Line 6.svg'

function Middleline() {
  return (
	<>
		<img src={one} alt="" className='one'/>
		<img src={two} alt="" className='two'/>
		<img src={three} alt="" className='three'/>
		<img src={four} alt="" className='four'/>
		<img src={five} alt="" className='five'/>
		<img src={six} alt="" className='six'/>
		
	</>

  )
}

export default Middleline