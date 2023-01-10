import styled from "@emotion/styled/";
import React from "react";

const ButtonComponent = styled.button`
  color: #ffffff;
  border-radius: 5px;
  border: #ffffff solid 1px;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

function ButtonCustom({ children, version }) {
  return (
    <ButtonComponent className={`btn btn-${version}`}>
      {children}
    </ButtonComponent>
  );
}
export default ButtonCustom;
