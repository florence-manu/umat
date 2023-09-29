import React, { useState } from 'react';
import * as Styles from './styles';
import visa from '../../../../images/visa.png';
import { Button } from '../../../button';
import PaymentOptions from './PaymentOptions';
import Visa from './VisaPayment';
import Momo from "./Momo";

type PaymentMethod = 'credit-card' | 'mobile-money';

export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card'); 

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  return (
    <Styles.Container>
      <Styles.Form>
        <PaymentOptions onPaymentMethodChange={handlePaymentMethodChange} />
      </Styles.Form>
      <Styles.OptionsContainer>
        <p>we only accept</p>
        <Styles.Options src={visa} alt="momo options" />
      </Styles.OptionsContainer>
      <Styles.Form>
        {paymentMethod === 'credit-card' ? <Visa /> : <Momo />}
        <div className="buttonContainer">
          <Button text="Confirm payment" background="#0A7C72" color="white" width={200} onClick={() => {}} />
        </div>
      </Styles.Form>
    </Styles.Container>
  );
}
