import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    text-decoration: none;
    border: none;
    outline: none;
    width: inherit;
    height: inherit;
    background-color: none;
    font-family: "Nunito", sans-serif;
  }

   .side-bar-active{
   color: #28A745 !important;
  }

  
.active{
    border-bottom: 2px solid #F4C51A;

}

select{
  cursor: pointer;
}
  `