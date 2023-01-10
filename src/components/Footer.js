import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <a href="twitter.com">
          <TwitterIcon />
        </a>
        <a href="facebook.com">
          <FacebookIcon />
        </a>
        <a href="instagram.com">
          <InstagramIcon />
        </a>
        <a href="github.com">
          <GitHubIcon />
        </a>
      </div>
    </>
  );
}
