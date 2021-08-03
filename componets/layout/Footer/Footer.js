import React from 'react'
import { Foot} from './Style'
import Image from 'next/image'
import Link from 'next/link'
<style jsx>{`
#myImage {
  width: 64px;
}
`}</style>
const Navbar = () => {
    return (
        <Foot>
            <div className="flex" >
              
          <div className="flex-1" >
     
     <div className='head' ><h2>CONTACT US</h2></div>

     <div className ="contact" >
       <h3>Any Queries or Any Comment:</h3>
       <h3 id="hover" onClick={() => window.open('mailto:info@airjaldi.net') }
      title="info@airjaldi.net"  >info@airjaldi.net</h3>
     </div>

     <div className ="contact1" >
       <h3>For New Connections & Support:</h3>
       <h3 id="hover"  onClick={() => window.open('mailto:support@airjaldi.com') }
      title="support@example.com"  >support@airjaldi.net</h3>
     </div>
     <div className ="contact1" >
       <h3>Call Us Toll-Free:</h3>
       <h3 id="hover">1-800-121-3648</h3>
     </div>

          </div>
          <div className="flex-2" >
     
          <div className='top' >
          <div className='head' ><h2>FOLLOW US:</h2></div>
           
           <div className='icon' >
           <i
           onClick={() => window.open('https://fb.com/airjaldi') }
           title="https://fb.com/airjaldi"
           
           class="fab fa-facebook-f"></i>
           <i 
           onClick={() => window.open('https://twitter.com/AirJaldiRBB') }
           title="https://twitter.com/AirJaldiRBB"
           
           class="fab fa-twitter"></i>
           <i 
           
           onClick={() => window.open('https://www.youtube.com/channel/UC6LR9fyBNg-yuLFa0fj27wQ') }
      title="https://www.youtube.com/channel/UC6LR9fyBNg-yuLFa0fj27wQ"
           class="fab fa-youtube"></i>



           </div>
          
        
  </div>
  <div className ="contact2" >
       <h3>AirJaldi © {new Date().getFullYear()}</h3>
       </div>
  <div className='down' ></div>
          </div>
          <div className="flex-3" >
    
    <div className='top' > 
          <div className ="contact1" >
       <Link href='/jaldifiTerms' >JaldiFi terms</Link>
       
     </div>

     <div className ="contact1" >
       <Link href='/gstRegistration' >GST Registration</Link>
     
     </div>
     <div className ="contact1" >
       <Link href='/parentalControls' >Parental controls</Link>
     
     </div>

     <div className ="contact1" >
       <Link href='/privacyPolicy' >Privacy policy</Link>
     
     </div>
     
     <div className ="contact1" >
       <Link href="/terms" >Terms & Conditions</Link>
     
     </div>
     <div className ="contact1" >
       <Link href="/financial" >Financial</Link>
     
     </div>
    

       <div className='down' ></div>
     </div>

          </div>

            </div>
        </Foot>
    )
}

export default Navbar
