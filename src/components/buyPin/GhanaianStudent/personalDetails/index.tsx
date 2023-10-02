import React from 'react';
import * as Styles from "./styles";
import SelectNationality from '../../../Selectnationality';

export function ProvidePersonalDetails() {
  return (
    <Styles.Form>
      <SelectNationality />
      <fieldset className="fieldset2">
        <Styles.InputConatainer>
          <label>Full Name</label>
          <input type="text" placeholder="Thomas Darkoh" />
        </Styles.InputConatainer>
        <Styles.InputConatainer>
          <label>Email</label>
          <input type="text" placeholder="thomasila@example.com" />
        </Styles.InputConatainer>
        <Styles.InputConatainer>
          <label>Phone</label>
          <input type="text" placeholder="054467345" />
          <select>
            <option>choose an option</option>
            <option>choose an option</option>
            <option>choose an option</option>
          </select>
        </Styles.InputConatainer>
      </fieldset>
    </Styles.Form>
  );
}
