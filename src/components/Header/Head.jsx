import React from 'react'
import { images } from '../../constants';
import './Head.css';

const Head = () => {
  return (
    <div>
         <>
      <section className='head'>
        <div className='container flexSB'>
        <div className='item'>
        <div className='callButton'>
          <img src={images.phone} alt="" width="32" height="32" />
        </div>
        <div className='texts'>
          <div className='text'>CALL NOW</div>
          <div className='text'>111 222 333</div>
        </div>
      </div>

      <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
    </div>
  )
}

export default Head