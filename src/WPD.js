import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Ellipse from '../src/assets/Ellipse.svg';
import './WPD.css';
import Line1 from '../src/assets/Line1.svg';
import Arrow from '../src/assets/Arrow 1.svg'
import Comp2 from './Comp2';
import Line2 from '../src/assets/Line 11.svg';
import Line3 from '../src/assets/Line 9.svg';
import Ellipse2 from '../src/assets/Ellipse 13 (2).svg'; 
import Img from '../src/assets/img_avatar.png';
import Ellipse3 from '../src/assets/Ellipse 13 (3).svg';
import GDSC from '../src/assets/GDSC.png';
import A from '../src/assets/1.jpeg';


function WPD() {
  return (
    <div className='main3'>   
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

        <div className='gdsc'>
          GDSC PANEL DISCUSSION
        </div>
        <img src={GDSC} className='gdscimg' />
        
        <img src={Ellipse2} className='col-8 col-sm-8 col-md-8  col-lg-8 ellipse2 '/>
        <div className='panelcontent'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
        
        <div className='row profilecard'>
          <div className='col'>
          <img src={A} className='profileimage'/>
          <div className=''>
          Mr. Jignesh Talasila Co-Founder & C.E.O of PerspectAI. 
          </div>
          </div>
          <div className='col profilecardcontent'>
          At PerspectAI, the mission is to leverage psychometrics and new-age technologies to understand an individual's True Potential 
          and bridge the gap between jobs and job seekers.
          </div>
        </div>

        <div className='row profilecard2'>
          <div className='col'>
          <img src={Img} className='profileimage'/>
          <div className=''>
          Mr. Madhu Vadlamani
 GDC
          </div>
          </div>
          <div className='col profilecardcontent'>
          Employee with an entrepreneurial mindset”, data analyst.(Skills- Data Analytics, Artificial Intelligence (AI) , Cloud Computing , Content Management , Business Intelligence) 

          </div>
        </div>
        <div className='row profilecard3'>
          <div className='col'>
          <img src={Img} className='profileimage'/>
          <div className=''>
          Mr. Venkat  CEO, Atomstate 
          </div>
          </div>
          <div className='col profilecardcontent'>
          A Business Strategist out to revolutionise AIML enabled problem solving solutions. 

          </div>
        </div>
        <div className='row profilecard4'>
          <div className='col'>
          <img src={Img} className='profileimage'/>
          <div className=''>
          Investors/venture capitalists
          </div>
          </div>
          <div className='col profilecardcontent'>
          Investors/venture capitalists
          </div>
        </div>

        
      <div className='marketing'>
        MARKETING WORKSHOP
      </div>
      <div className='marketingcontent'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since 
      the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries
      </div>
    
    
    <div className='curve'>
    <img src={Ellipse3} className='col-8 col-sm-8 col-md-8  col-lg-8 ellipse3 '/>
    </div>

    <div className='xyz'>

          <img src={Img} className='profileimage'/>
          <div>NAME1</div>
          
         
    </div>
    
  </div>
  )
}

export default WPD