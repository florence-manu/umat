import React from 'react';
import * as Styles from './styles';

function PaymentOptions() {
  return (
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
  );
}

export default PaymentOptions;
