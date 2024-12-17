import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/adnan_ahd/"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/adnanahmed52443"
            target="_blank"
            className="items"
          >
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://www.threads.net/@adnan_ahd?xmt=AQGzamd8FBrx8jf2xwVcsQdmB_UJNuNqkvDHTaz39pnp99M"
            target="_blank"
            className="items"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/Adnan-Ahmed07"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=adnansahmed07@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
