import React from 'react'
import  City from '@/componets/layout/Network/City/City'
import  Navbar from '@/componets/layout/Navbar/BlueNavbar'
import  Footer from '@/componets/layout/Footer/Footer'
function index({query}) {
    return (
        <div>
            <Navbar/>
        
               <City  id={query.id}/>

        </div>
    )
}

index.getInitialProps = async ({query}) => {

  
    return { query }
  
  
  }

    


export default index;
