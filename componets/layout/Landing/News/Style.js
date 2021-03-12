

import styled from 'styled-components'



export const  Section = styled.section`
display:flex;
justify-content:center;
height:100%;
align-items:center;


@media (min-width: 1035px) {

    .grid {
  margin-top:5rem;
        width:100%;
        height:40rem;
      
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;

         .head {
            width:80%;
            height:15%;
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1 {
            color:${props => props.theme.colors.blue};
            }


         }
    

       
    }
    .card {
      
    
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
             width:30%;
             height:100%;
             background-color:white;
             display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        .wrapper {
        width:100%;
        height:50%;
        position: relative;
       
       
        }
        .data {
            .name {
            span {
                font-size:1.2rem;
            }
            h3 {
                font-size:1.2rem;
                font-weight:900; 
            }
            }
        width:90%;
        height:50%;
        
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
      
    p {
       color: #2f3435; 
    }
    .head {
        h2 {
        text-align:left;
    }

    }
   
  .link {
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
    font-size:1.2rem;
}
span {
    font-size:1.2rem;
}

  }
        }
        }
        }
    
    }

    .btn {
        display:flex;
        justify-content:center;
        height:15%;

        align-items:center;
        button {
            height:50%; 
            width:10rem;
            color: ${props => props.theme.colors.blue};
            font-weight:900;
            font-size:1.3rem;
            background-color:white;
            border: 2px solid  ${props => props.theme.colors.blue};
        }
    }



  

}
@media (max-width: 600px) {
    .grid {
  margin-top:4rem;
        width:100%;
       
      
        display:flex;
        justify-content:center;
        align-items:center;
         flex-direction:column;

         .head {
            width:95%;
            height:3rem;
            display:flex;
            justify-content:center;
            flex-direction:column;
            h1 {
            color:${props => props.theme.colors.blue};
            }


         }
    

       
    }
    .card {
      
    
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:100%;
     
        .card-1 {
            display:flex;
        justify-content:space-between;
        align-items:center;
         flex-direction:column;
        height:100%;
        width:95%;
        margin-top:2rem;
      
        .grid1 {
             width:100%;
            height:30rem;
             background-color:white;
             display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        .wrapper {
        width:100%;
        height:50%;
        position: relative;
         width:100%;
          height: 50%
        }
        .data {
            .name {
            span {
                font-size:1.2rem;
            }
            h3 {
                font-size:1.2rem;
                font-weight:900; 
            }
            }
        width:90%;
        height:50%;
        
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
      
    p {
       color: #2f3435; 
    }
    .head {
        h2 {
        text-align:left;
    }

    }
   
  .link {
display:flex;
cursor: pointer;
justify-content:flex-start;
color:${props => props.theme.colors.blue};
i {
    font-size:1.2rem;
}
span {
    font-size:1.2rem;
}

  }
        }
        }
        }
    
    }

    .btn {
        display:flex;
        justify-content:center;
        height:15%;

        align-items:center;
        button {
            height:50%; 
            width:10rem;
            color: ${props => props.theme.colors.blue};
            font-weight:900;
            font-size:1.3rem;
            background-color:white;
            border: 2px solid  ${props => props.theme.colors.blue};
        }
    }

}
`