import React from 'react';
import { Section } from './Style'
import Image from 'next/image'
function Map() {
    return (
        <div>
            <Section>
            <div className="head" >
          <h1>We Are Connecting Rural India</h1>
          <p>Since 2009, we provide high-quality broadband connectivity In
eight Indian states. We connect large and small clients from the
corporate, civil society and private sectors.</p>
          </div>
                <div class="flex" >

          
                   
                <div class="flex-1" >
 <p>We believe that access to
the internet should be as
readily available to all.</p>
<div className='link' >
<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617687365/AirJaldi/kks3py9aencqms2riscm.png"></img>
 <span> Learn more about our networks</span> </div>
                    
</div>
<div class="flex-2" >

<img
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617867710/enzr8rp5kqmb6hmxbjed.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="contain"
        
      />        

      {/* <div class="point" ><i class="fas fa-circle-notch"></i> </div>     
      <div class="point1" > <i class="fas fa-circle-notch"></i></div>  
      <div class="point2" > <i class="fas fa-circle-notch"></i></div>  
      <div class="point3" > <i class="fas fa-circle-notch"></i></div>  
      <div class="point4" ><i class="fas fa-circle-notch"></i></div>        
      <div class="point5" ><i class="fas fa-circle-notch"></i></div>   
      <div class="point6" ><i class="fas fa-circle-notch"></i></div>   */}
</div>

                </div>
            </Section>
        </div>
    )
}

export default Map
