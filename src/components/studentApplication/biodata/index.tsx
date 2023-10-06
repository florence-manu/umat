import React from "react";
import { Link } from "react-router-dom";
import { Outlet , useLocation} from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 70px;
width: 100%;

.wrapper{
width: 100%;  
padding: 20px ;
padding-right: 50%;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
background-color: #F0F0F0; 
}
`
export const NavbarContainer = styled.nav`
   width: 200%;
a{
    text-decoration: none;
    color: #4D4D4D;
    font-size: 13px;
    margin-right: 30px;
    padding-bottom: 10px;
}
`
export function Biodata() {
    const location = useLocation().pathname;
    
    return (
        <Container>
            <div className="wrapper">
                <NavbarContainer>
                    <Link
                        to={"/umat/student/bio-info/personal"}
                        className={location.includes("/student/bio-info/personal") ? "active" : ""}
                    >
                        Personal
                    </Link>
                    <Link to={"/umat/student/bio-info/family-details"}
                         className={location.includes("/student/bio-info/family-details") ? "active" : ""}
                    >Family Contacts</Link>
                    <Link to={"/umat/student/bio-info/special-conditions"}
                    className={location.includes("/student/bio-info/special-conditions") ? "active" : ""}    
                    >Special Conditions</Link>
                    <Link to={"/umat/student/bio-info/documents"}
                        className={location.includes("/student/bio-info/documents") ? "active" : ""} 
                    >Documents</Link>
            </NavbarContainer>
            </div>
       <Outlet/>
        </Container>
    )

}