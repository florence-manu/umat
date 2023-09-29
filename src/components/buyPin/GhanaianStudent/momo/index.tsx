import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styles from './styles'; 
import momoLogo from '../../../../images/momoLogo.png';
import { Button } from '../../../button';

export function Momopay() {
  const navigation = useNavigate();

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
        <Styles.Options src={momoLogo} alt="momo options" />
      </Styles.OptionsContainer>
      <Styles.Form>
        <fieldset className="fieldset2">
          <legend>Payment Details</legend>
          <div>
            <label htmlFor="network">Mobile Network</label>
            <select placeholder="Choose an option" id="network">
              <option value="">choose an option</option>
              <option value="">choose an option</option>
            </select>
          </div>
          <div>
            <label>Phone</label>
            <input type="text" placeholder="Your mobile money line" />
          </div>
          <div className="buttonContainer">
            <Button
              text="Confirm payment"
              background="#0A7C72"
              color="white"
              width={200}
              onClick={() => {
                navigation('/payment');
              }}
            />
          </div>
        </fieldset>
      </Styles.Form>
    </Styles.Container>
  );
}
