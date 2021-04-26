import {  createGlobalStyle } from "styled-components";


 export default   createGlobalStyle`
a { 
  text-decoration: none; 
  color: white;

  font-family:  SourceSansPro-Regular;
} 

div {
    font-family:  SourceSansPro-Regular;
  
}
.bird {
        top: 11%;
   
    left: 2.5%;
    height: 39rem;
    position: absolute;


    
    }
  body {
    color: #2f3435; 
  font-family:  SourceSansPro-Regular;

      overflow-x: hidden;
       
      ::-webkit-scrollbar {
  width: 10px;
  #nprogress .bar {
  background: #FFBB00 !important;
}
#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}
#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
}
}
/* Track */
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.brown}; 
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.darkBrown};
}
      
  }
  ul {
    list-style: none;
    li {
      
    cursor: pointer;
    color: ${props => props.theme.colors.text1};
  }
  }
  img {
  cursor: pointer;
}
button {
  cursor: pointer;
  font-family:  SourceSansPro-Regular;
}

 
  h1 {
    font-size: 2rem;
    line-height: var(--line-height-lg);
  font-family:  SourceSansPro-Regular;
  color: #2f3435; 
  word-spacing:0.2rem;
  }
  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey};
  font-family:  SourceSansPro-Regular;
  color: #2f3435; 
  font-weight:500;
  word-spacing:0.2rem;
  }
  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey};
    font-family:  SourceSansPro-Regular;
    color: #2f3435; 
    word-spacing:0.2rem;
    /* family=FiesoleTextW00-Italic */
  }
  p {
    font-family:  SourceSansPro-Regular;
    word-spacing:0.2rem;
    font-weight: normal;
    color: ${props => props.theme.colors.grey};
  }
  h3 {
    word-spacing:0.2rem;
  }
  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  p {
    font-size:1.2rem;
line-height:1.1;
  
    font-family:  SourceSansPro-Regular;
    word-spacing:0.2rem;
    color: #2f3435; 
  }
  select {
  font-family:  SourceSansPro-Regular;
  color: #2f3435; 
  }
  
  .date {
  font-family:  SourceSansPro-Regular;
  }
  .card {
    border-radius:10px;
    color: #2f3435; 
  }
 
  button {
border-radius:10px;
font-family:  SourceSansPro-Regular;
transition: transform .8s;

  }
  input {
  font-family:  SourceSansPro-Regular;
    border:1px solid #EFEAE4;
    color:white;
  }
  span {
  font-family:  SourceSansPro-Regular;
  }
  i {
    color: ${props => props.theme.colors.darkBrown};
  }
  @media only screen and (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
  }
  @media only screen and (min-width: 768px) {
    body {
      overflow-x: hidden;
    }
    .card {
      display:none;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      color: ${props => props.theme.colors.grey};
    }
    h3 {
      font-size: 1.25rem;
    }
  }
  a { 
    text-decoration: none; 
    color: ${props => props.theme.colors.darkBrown};
  font-family:  SourceSansPro-Regular;
} 
button {
  font-family:  SourceSansPro-Regular;
}
li {
  cursor: pointer;
}
img {
  cursor: pointer;
}
 `;

