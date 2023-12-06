import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Ellipse from '../src/assets/Ellipse.svg';
import './Events.css';
import Line1 from '../src/assets/Line1.svg';
import Arrow from '../src/assets/Arrow 1.svg'
import Comp2 from './Comp2';
import Line2 from '../src/assets/Line 11.svg';
import Line3 from '../src/assets/Line 9.svg';
function Events() {
  return (

    <div className='main1'>
     
        <h3 className='ecficio'>ECFICIO 6.0H</h3>
        <div>
          <img src={Ellipse} className='col-8 col-sm-8 col-md-8  col-lg-8 float-start' />
        </div>
        <div>
          <img src={Line1} className='col-6 col-sm-6 col-md-6  col-lg-6 line1' />
          <img src={Line2} className='col-5 col-sm-5 col-md-5  col-lg-5   line2' />
          <img src={Line3} className='col-4 col-sm-4 col-md-4  col-lg-4   line3' />
          <img src={Arrow} href='/' className='col-1 col-sm-1 col-md-1 col-lg-1   arrow'/>
        </div>
        <button className='button '>REGISTER NOW</button>
     


      <div className='box1'>
        <div className='row headings'>
          <div className='col float-start'>MY BIG IDEA</div>
          <div className='col float-end'>14 DEC 2023</div>

        </div>


        <div className='contents mt-5'>
          <a href='/' className='text-dark'>SUBMISSION LINK</a>
        </div>
      </div>
      <div className='note'>
        NOTE:
        <br></br>
      ONE MUST SUBMIT THEIR IDEA IN MY BIG IDEA COMPETITION 
      TO SHORTLIST FOR BELOW TWO COMPETITIONS
      </div>


      <div className='box2'>
                <div className='row headings'>
                    <div className='col float-start'>PARISHKAR</div>
                    <div className='col float-end'>DATE</div>

                </div>
                    <br></br>
                <div className='links'>
                <a href='/' className='text-dark'>SUBMISSION LINK</a>
                </div>
            </div>
          <div className='box2'>
                <div className='row headings'>
                    <div className=''>START UP IDEA COMPETITION </div>
                   

                </div>
                    <br></br>
                <div className=' links'>
                <a href='/' className='text-dark'>SUBMISSION LINK</a>
                </div>
          </div>


    </div>




  )
}

export default Events