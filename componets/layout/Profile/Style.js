

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;

@media (min-width: 1035px) {

    .grid {

        width:100%;
        height:40rem;
        position: relative;

        .bird {
        top: 1rem;
      
    height: 38rem;
    position: absolute;

        img {
            width:100%;
            left:0%;
            height:100%;
        }
    }
        .card {
        position:absolute;
        bottom:7%;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
       
        height:70%;
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
        height:100%;
        width:80%;
      
        .grid1 {
             width:50%;
             height:50%;
             background-color:white;
             display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h1 {
            margin-top:10%;
            width:90%;
        height:100%;
        }
           
        }
    
    }
    }

       
    }
   

  

}

@media (max-width: 600px) {
    margin-top:22%;

.grid {
    position: relative;
    width:100%;
    height:26rem;

    .card {
    position:absolute;
    bottom:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
   
    height:70%;
    .card-1 {
        display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    width:90%;
  
    .grid1 {
         width:90%;
         height:80%;
         background-color:white;
         display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    h1 {
        margin-top:10%;
        width:90%;
    height:100%;
    }
       
    }

}
}

   
}




}
`