import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sanit Kumar</h4>
      <h4>Copyright &copy; 2023 SK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/SanitKumar" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sanit-kumar/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sanitkumar2506@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/SanitKumar/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer