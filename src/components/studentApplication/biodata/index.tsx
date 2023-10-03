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
padding: 10px;
border-radius: 3px;
background-color: #F0F0F0; 
}
`
export const NavbarContainer = styled.nav`
width: 70%;
display: flex;
flex-direction: row;
justify-content: flex-start;
a{
    text-decoration: none;
    color: #4D4D4D;
}
`
export function Biodata() {
    const location = useLocation();
    return (
        <Container>
            <div className="wrapper">
                <NavbarContainer>
                    <Link
                        to={"/student/bio-info/personal"}
                    >
                        Personal
                    </Link>
                <Link to={"/student/bio-info/family-details"}>Family Contacts</Link>
                <Link to={"/student/bio-info/special-conditions"}>Special Conditions</Link>
                <Link to={""}>Documents</Link>
            </NavbarContainer>
            </div>
       <Outlet/>
        </Container>
    )

}