import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from "./styles";

export function ProvidePersonalDetails() {
  return (
    <Styles.Form>
      <fieldset>
        <div>Student</div>
        <Styles.SelectNationality>
          <input type="radio" id="Gh" value="Gh" name="Gh" />
          <label htmlFor="Gh" id="ghRadio">
            Ghanaian
          </label>
        </Styles.SelectNationality>
        <Styles.SelectNationality>
          <input type="radio" id="Int" value="Int" name="Int" />
          <label htmlFor="Int" id="ghInt">
            International
          </label>
        </Styles.SelectNationality>
      </fieldset>
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
