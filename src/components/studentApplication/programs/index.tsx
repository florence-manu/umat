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
export function Programs() {
    const location = useLocation().pathname;
    return (
        <Container>
            <div className="wrapper">
                <NavbarContainer>
                    <Link
                        to={"/umat/student/programs programs-selection"}
                        className={location.includes("/student/programs/programs-selection") ? "active" : ""}
                    >
                       programs selection 
                    </Link>
                    <Link to={"/umat/student/programs/accomodation"}
                       className={location.includes("/umat/student/programs/accomodation") ? "active" : ""}
                    >accomodation</Link>
            </NavbarContainer>
            </div>
       <Outlet/>
        </Container>
    )

}