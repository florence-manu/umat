import styled from "styled-components";

export const Heading = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 12px 30px;
background-color: #03453F;
gap: 15px;
box-shadow: 0px 7px 4px #03453FC0;
border: 1px solid #4D4D4D;
`

export const About = styled.div`
     display: flex;
     flex-direction: row;
     width: 92%;
     gap: 50%;
     align-self: center;
`
export const Contact = styled.div`
 display: flex;
     flex-direction: row;
     width: 100%;
     gap: 40%;
`
export const IconContainer = styled.div`
     width: 25px;
     background-color: voilet;
`
export const Section = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
gap: 20px; 
color: white;
`

export const Select = styled.select`
width: 100px;
height: 30px;
background-color: transparent;
color: white;
display: flex;
align-self: flex-end;
`
export const Text = styled.p`
font-size: 12px;
`

export const Language = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
 cursor: pointer;
`
export const Brand = styled.div`
width: 78%;
margin: auto;
color: "#62F0E4";
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
` 
export const Logo = styled.img`
width: auto;
height: auto;
`
export const BrandText = styled.p`
fontsize: 24px;
font-weight: bold;
color: #62F0E4;
padding-left: 20px;
`
export const Nav = styled.ul`
   display: flex;
   flex-direction: row;
   list-style: none;
   align-items: center;
   justify-content: space-between;
   width: 95%;
   align-self: flex-end;

   .link{
    a{
    color:  #62F0E4; 
    }
   }
`
