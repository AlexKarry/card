import * as React from "react";
// import Button from '@mui/material/Button';
// import MailIcon from "@mui/icons-material/Mail";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ButtonCustom from "./ButtonCustom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Info() {
  return (
    <div className="info--container">
      <img
        className="info--avatar"
        src={require("../images/nature.jpg")}
        alt="Avatar"
      />
      <h1 className="info--name">Alex Karry</h1>
      <h4 className="info--title">Web Designer / Web Developer</h4>
      <p className="info--web">test@test.com</p>
      <div className="info--buttons">
        <ButtonCustom version="lightgray">
          <EmailIcon className="btn--icon" />
          email
        </ButtonCustom>
        <ButtonCustom version="lightblue">
          <LinkedInIcon className="btn--icon" />
          linkedin
        </ButtonCustom>
      </div>
    </div>
  );
}
