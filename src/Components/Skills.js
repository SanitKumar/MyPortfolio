import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGithub, FaNpm, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiHtml5, DiCss3} from "react-icons/di";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        HTML: <DiHtml5/>,
        CSS: <DiCss3/>,
        Node : <DiNodejs/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
