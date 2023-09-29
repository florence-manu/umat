import React from 'react';
import * as styles from "./styles";
function Momo() {
  return (
    <fieldset className="fieldset2">
      <legend>Payment Details</legend>
      <styles.Labelled>
        <label htmlFor="network">Mobile Network</label>
        <select placeholder="Choose an option" id="network">
          <option value="">choose an option</option>
          <option value="">choose an option</option>
        </select>
      </styles.Labelled>
      <styles.Labelled>
        <label>Phone</label>
        <input type="text" placeholder="Your mobile money line" />
      </styles.Labelled>
    </fieldset>
  );
}

export default Momo;
