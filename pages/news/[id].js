import React from 'react'
import  Blog from '@/componets/layout/InNews/Blog/Blog'

function index({query}) {
    return (
        <div>
        
               <Blog  id={query.id}/>
        </div>
    )
}

index.getInitialProps = async ({query}) => {
    return {query};
  }


export default index;