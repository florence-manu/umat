import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import * as styles from "./styles"; 
import loginbg from "../../images/loginbg.jpg"; 

export function Login() {
  const navigation = useNavigate();
  return (
    <styles.Container>
      <styles.Section1>
        <styles.Hero>
          Welcome to <br />UMat admissions
        </styles.Hero>
        <p>
          Your Journey Begins Here! Secure your admission by purchasing a Personal Identification Number (PIN)
        </p>
        <styles.ButtonContainer>
          <Button
            color="#4D4D4D"
            width={160}
            background="#62F0E4"
            text="Buy Your Pin"
            onClick={() => {
              navigation("/umat/buy-pin");
            }}
          />
        </styles.ButtonContainer>
      </styles.Section1>
      <styles.Line />
      <styles.LoginSection>
        <styles.LoginImage src={loginbg} alt="login" />
        <styles.Form>
          <legend>LOGIN</legend>
          <div>
            <label>Reference</label>
            <input type="text" placeholder="12345" />
          </div>
          <div>
            <label>PIN</label>
            <input type="text" placeholder="465656" />
          </div>
          <Button text="LOGIN" width={300} background="#0A7C72" color="white"  onClick={() => {
              navigation("/umat/student");
            }}/>
        </styles.Form>
      </styles.LoginSection>
    </styles.Container>
  );
}
