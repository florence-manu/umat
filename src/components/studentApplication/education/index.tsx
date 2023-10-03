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
export function Education() {
    const location = useLocation();
    return (
        <Container>
            <div className="wrapper">
                <NavbarContainer>
                    <Link
                        to={"/student/education/instituitions"}
                    >
                       Instituitions 
                    </Link>
                <Link to={"/student/education/results"}>Exams Results</Link>
                <Link to={"/student/education/documents"}>Documents</Link>
            </NavbarContainer>
            </div>
       <Outlet/>
        </Container>
    )

}