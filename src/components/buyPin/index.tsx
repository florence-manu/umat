import React from "react";
import { Step1 } from "./GhanaianStudent/processInfo.tsx";
import { Step2 } from "./GhanaianStudent/processInfo.tsx";
import { useLocation, Outlet } from "react-router-dom";
import * as Styles from "./styles";

export function BuyPin() {
  const location = useLocation().pathname;
  
  return (
    <Styles.Container>
      {
        location.includes("payment") ? <h1>GET YOUR ADMISSION PIN</h1> : <h1>PIN SUCCESSFUL</h1>
      }
      <Styles.SectionContainerCard>
        <Styles.BigCard className={location.includes("/buy-pin/successful") ? "max" : ""}>
         <Outlet />
        </Styles.BigCard>
        { location.match("buy-pin/successful") ? "" : <Styles.SmallCard>
          { 
           location.includes("payment") ? <Step2 /> :  <Step1 />
          }
        </Styles.SmallCard>}
      </Styles.SectionContainerCard>
    </Styles.Container>
  );
}
