import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

  a:active{
   background-color: blue;
  }
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
`;

export function Student() {
  return (
    <>
      <Header />
      <Main>
        <Sidebar>
          <Rainbow></Rainbow>
          <Navbar>
            <NavLinks to="/student/general-info">General</NavLinks>
            <NavLinks to="/student/bio-info">Bio data</NavLinks>
            <NavLinks to="/link3">Education</NavLinks>
            <NavLinks to="/link4">Programs</NavLinks>
            <NavLinks to="/link5">Summary</NavLinks>
          </Navbar>
        </Sidebar>
        <Section>
              <Outlet />    
        </Section>
      </Main>
    </>
  );
}
