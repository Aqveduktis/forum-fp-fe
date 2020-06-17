import React from "react";
import styled from "styled-components";


const Checkbox = () => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};