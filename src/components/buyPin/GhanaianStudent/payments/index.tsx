import React from 'react';
import * as Styles from './styles';
import visa from '../../../../images/visa.png';
import { Button } from '../../../button';
import PaymentOptions from './PaymentOptions';
import Visa from './VisaPayment';

export function Payment() {
  return (
    <Styles.Container>
      <Styles.Form>
        <PaymentOptions />
      </Styles.Form>
      <Styles.OptionsContainer>
        <p>we only accept</p>
        <Styles.Options src={visa} alt="momo options" />
      </Styles.OptionsContainer>
      <Styles.Form>
        <Visa /> 
        <div className="buttonContainer">
          <Button text="Confirm payment" background="#0A7C72" color="white" width={200} onClick={() => {}} />
        </div>
      </Styles.Form>
    </Styles.Container>
  );
}
