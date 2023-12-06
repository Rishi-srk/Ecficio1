import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Ellipse from '../src/assets/Ellipse.svg';
import './Comp.css';
import Line1 from '../src/assets/Line1.svg';
import Line2 from '../src/assets/Line 11.svg';



function Comp() {
    return (
        <div className='main'>
            <div>
                <h3 className='ecficio'>ECFICIO 6.0H</h3>
                <div>
                    <img src={Ellipse} className='col-8 col-sm-8 col-md-8  col-lg-8 float-start' />
                </div>
                <div>
                    <img src={Line1} className='col-6 col-sm-6 col-md-6  col-lg-6 line1' />
                    <img src={Line1} className='col-5 col-sm-5 col-md-5  col-lg-5   line2' />
                    <img src={Line1} className='col-4 col-sm-4 col-md-4  col-lg-4   line3' />

                </div>
                <button className='button '>REGISTER NOW</button>

            </div>

            <div className='box'>
                <div className='row headings'>
                    <div className='col float-start'>EVENT NAME</div>
                    <div className='col float-end'>EVENT DATE</div>

                </div>
                    <br></br>
                <div className='contents'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </div>
            </div>

            <div className='box'>
                <div className='row headings'>
                    <div className='col float-start'>EVENT NAME</div>
                    <div className='col float-end'>EVENT DATE</div>

                </div>
                    <br></br>
                <div className='contents'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </div>
            </div>
            <div className='box'>
                <div className='row headings'>
                    <div className='col float-start'>EVENT NAME</div>
                    <div className='col float-end'>EVENT DATE</div>

                </div>
                    <br></br>
                <div className='contents'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </div>
            </div>

        </div>
    )
}

export default Comp