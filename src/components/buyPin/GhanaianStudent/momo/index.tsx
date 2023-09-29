import React from 'react';
import * as Styles from './styles';

function PaymentDetails() {
  return (
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
    </fieldset>
  );
}

export default PaymentDetails;
