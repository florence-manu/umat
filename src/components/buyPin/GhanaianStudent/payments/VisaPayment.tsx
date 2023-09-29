import React from 'react';
import * as Styles from './styles';
import visalogo from '../../../../images/visalogo.png';

function Visa() {
  return (
    <fieldset className="fieldset2">
      <input type="text" placeholder="CARD NUMBER" />
      <Styles.VisaLogo src={visalogo} alt="" />
      <input type="text" placeholder="CARD HOLDER NAME Darkoh" />
      <div>
        <input type="text" placeholder="12" className="inp1" />
        <input type="text" placeholder="23" className="inp2" />
        <input type="text" placeholder="CVC" className="inp3" />
      </div>
    </fieldset>
  );
}

export default Visa;
