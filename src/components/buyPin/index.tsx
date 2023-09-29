import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Momopay } from "./GhanaianStudent/momo";
import * as Styles from "./styles";

export function BuyPin() {
  const navigation = useNavigate();
  return (
    <Styles.Container>
      <h1>GET YOUR ADMISSION PIN</h1>
      <Styles.SectionContainerCard>
        <Styles.BigCard>
         <Outlet />
        </Styles.BigCard>
        <Styles.SmallCard>
          <div>
            <Styles.Amount>120 GHS</Styles.Amount>
            <Button
              color="white"
              text="CHECK OUT"
              width={200}
              background="#0A7C72"
              onClick={() => {
                navigation("/buy-pin/payment");
              }}
            />
          </div>
        </Styles.SmallCard>
      </Styles.SectionContainerCard>
    </Styles.Container>
  );
}
