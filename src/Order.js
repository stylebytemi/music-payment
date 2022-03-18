import React from 'react'
import './Order.css'
import music from './images/icon-music.svg'

const Order = () => {
  return (
    <div className='Pay'>
         <div className='Summary'>
            <h2 className='HH'>Order Summary</h2>
            <p className='Para'>
                You can now listen to millions of <br></br>
                songs, audiobooks, and podcasts on <br></br>
                any device anywhereyou like!
            </p>
        </div>
        <div className='ParaDiv'>
            <img className='Music' src={music} alt='' />
            <p>
                <span id='Annual'>
                    <b>Annual Plan</b>
                </span>
                <br></br>
                <span id='Year'>$59.99/year</span>
            </p>
            <a className='Change' href=''>Change</a>
        </div>
        <button className='Payment'>Proceed to Payment</button>
        <br></br>
        <a className='Cancel' href=''>Cancel Order</a>
    </div>
  )
}

export default Order
