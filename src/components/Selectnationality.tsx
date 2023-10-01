import React from 'react';
import * as Styles from "./buyPin/GhanaianStudent/personalDetails/styles";

function SelectNationality() {
  return (
    <Styles.NationalityContainer>
      <fieldset>
        <div>Student</div>
        <SelectNationality />
      </fieldset>
      <Styles.SelectNationality>
        <input type="radio" id="Int" value="Int" name="Int" />
        <label htmlFor="Int" id="ghInt">
          International
        </label>
      </Styles.SelectNationality>
    </Styles.NationalityContainer>
  );
}

export default SelectNationality;
