import React from 'react';
import * as Styles from './styles'; 
import visa from '../../../../images/visa.png';
import visalogo from '../../../../images/visalogo.png';
import { Button } from '../../../button';

export function Visa() {
  return (
    <Styles.Container>
      <Styles.Form>
        <fieldset>
          <div>Payment Options</div>
          <Styles.SelectNationality>
            <input type="radio" id="credit" value="credit" name="credit" />
            <label htmlFor="credit" id="card">
              Credit card
            </label>
          </Styles.SelectNationality>
          <Styles.SelectNationality>
            <input type="radio" id="mobile" value="mobile" name="mobile" />
            <label htmlFor="mobile" id="momo">
              Mobile money
            </label>
          </Styles.SelectNationality>
        </fieldset>
      </Styles.Form>
      <Styles.OptionsContainer>
        <p>we only accept</p>
        <Styles.Options src={visa} alt="momo options" />
      </Styles.OptionsContainer>
      <Styles.Form>
        <fieldset className="fieldset2">
          <input type="text" placeholder="CARD NUMBER" />
          <Styles.VisaLogo src={visalogo} alt="" />
          <input type="text" placeholder="CARD HOLDER NAME Darkoh" />
          <div>
            <input type="text" placeholder="12" className="inp1" />
            <input type="text" placeholder="23" className="inp2" />
            <input type="text" placeholder="CVC" className="inp3" />
          </div>
          <div className="buttonContainer">
            <Button text="Confirm payment" background="#0A7C72" color="white" width={200} onClick={()=>{""}} />
          </div>
        </fieldset>
      </Styles.Form>
    </Styles.Container>
  );
}
