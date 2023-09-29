import React from 'react';
import * as Styles from './styles';

type PaymentMethod = 'credit-card' | 'mobile-money';

interface PaymentOptionsProps {
  onPaymentMethodChange: (method: PaymentMethod) => void;
}

function PaymentOptions({ onPaymentMethodChange }: PaymentOptionsProps) {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPaymentMethodChange(event.target.value as PaymentMethod);
  };

  return (
    <fieldset>
      <div>Payment Options</div>
      <Styles.SelectNationality>
        <input
          type="radio"
          id="credit"
          value="credit-card"
          name="payment-option"
          onChange={handleOptionChange}
        />
        <label htmlFor="credit" id="card">
          Credit card
        </label>
      </Styles.SelectNationality>
      <Styles.SelectNationality>
        <input
          type="radio"
          id="mobile"
          value="mobile-money"
          name="payment-option"
          onChange={handleOptionChange}
        />
        <label htmlFor="mobile" id="momo">
          Mobile money
        </label>
      </Styles.SelectNationality>
    </fieldset>
  );
}

export default PaymentOptions;
