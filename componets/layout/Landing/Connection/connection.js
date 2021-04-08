import React from 'react'
import { Foot} from './Style'
import Image from 'next/image'
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
              <div className='top' >

           <h2> Get a <br/> <span>Wireless Internet Connection</span> for Your Home or Office.
</h2>  
              </div>
              <div className='bottom' >
              <h2>    Call 1-800-200-9989 or email
 <span>support@airjaldi.com </span> to
get connected. </h2>
              </div>
          </div>
          <div className="flex-2" >
          <div className='top' >
     <div className='wrapper' style={{ position: 'relative'}}  >
       
     <Image
        
     src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1617868237/w77nybjkb1ztmbvuw5zu.png"
    
     layout="fill"
     objectFit="contain"
   />
     </div>
     </div>
     <div className='bottom' >
         <div className="text" >
      <h2>   Connect to <span>JaldiFi hotspots</span>  with
your devices for high speed wireless
internet access at affordable rates</h2>
         </div>
         <button>Get JaldiFi deals</button>
     </div>
       
          </div>
        
            </div>
        </Foot>
    )
}

export default Navbar
