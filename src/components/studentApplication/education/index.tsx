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
a{
    text-decoration: none;
    color: #4D4D4D;
    font-size: 13px;
    margin-right: 30px;
}
`

export function Education() {
    const location = useLocation().pathname;
    return (
        <Container>
            <div className="wrapper">
                <NavbarContainer>
                    <Link
                        to={"/student/education/instituitions"}
                        className={location.includes("/student/education/instituitions") ? "active" : ""}
                    >
                       Instituitions 
                    </Link>
                    <Link to={"/student/education/exams-results"}
                       className={location.includes("/student/education/exams-results") ? "active" : ""}
                    >Exams Results</Link>
                    <Link to={"/student/education/documents"}
                      className={location.includes("/student/education/documents") ? "active" : ""}
                    >Documents</Link>
            </NavbarContainer>
            </div>
       <Outlet/>
        </Container>
    )

}