import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export const Main = styled.main`
//   background-color: #62F0E4;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  padding: 60px 70px 10px;
  min-height: 82.1vh;
  gap: 50px;
`;

export const Sidebar = styled.section`
  width: 15%;
  box-shadow: 10px -7px 4px #03453FC0;
  border: 1px solid #03453F;
  border-radius: 10px;
  height: 72vh;
  background-color: white;
`;

export const Navbar = styled.nav`
  height: 40vh;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px  45px;
`;

export const Rainbow = styled.div`
  background-image: linear-gradient(to bottom right, #2D0BFF, #F4C51A, #7CAE50, #009688);
  height: 15vh;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const NavLinks = styled(Link)`
  color: #144620;
  text-decoration: none;
  mrgin-top: -10px;
`;

export const Section = styled.section`
  background-color: white;
  padding:  20px;
  border-radius: 10px;
  box-shadow: 10px -7px 4px #03453FC0;
  border: 1px solid #03453F;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export function Student() {
 
  const location = useLocation().pathname;

  return (
    <>
      <Header />
      <Main>
        <Sidebar>
          <Rainbow></Rainbow>
          <Navbar>
            <NavLinks to="/student/general-info"
             className = {location.includes("/student/general-info") ? "side-bar-active" : ""}
            >General</NavLinks>
            <NavLinks to="/student/bio-info"
                className = {location.includes("/student/bio-info") ? "side-bar-active" : ""}
            >Bio data</NavLinks>
            <NavLinks to="/student/education"
                className = {location.includes("/student/education") ? "side-bar-active" : ""}
            >Education</NavLinks>
            <NavLinks
              to="/student/programs"
              className = {location.includes("/student/programs") ? "side-bar-active" : ""}
            >
              Programs
            </NavLinks>
            <NavLinks to="">Summary</NavLinks>
          </Navbar>
        </Sidebar>
        <Section>
              <Outlet />    
        </Section>
      </Main>
    </>
  );
}
