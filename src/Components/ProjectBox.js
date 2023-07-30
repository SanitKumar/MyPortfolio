import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PhoenixBotDesc : "My project is a chatbot developed using JavaScript, HTML, and CSS, combining the power of frontend technologies to create an interactive and user-friendly conversational experience",
    PhoenixBotGithub : "https://github.com/SanitKumar/Phoenix-chat",
    PhoenixBotWebsite : "https://phoenix-chatbot-ai.netlify.app/",

    WeatherAppDesc : "The Weather App is a user-friendly and intuitive application that provides real-time weather information for any location worldwide",
    WeatherAppGithub : "https://github.com/SanitKumar/Weather_App",
    WeatherAppWebsite : "https://getweather-with-accuracy.netlify.app/",

    MyOnlineMealDesc:"Our Food Delivery Site Landing Page project is a visually appealing and responsive website that showcases a wide array of delectable dishes and cuisines.",
    MyOnlineMealGithub:"https://github.com/SanitKumar/FoodDelivery-Responsive-Webpage",
    MyOnlineMealWebsite:"https://myonlinemeal-delivery.netlify.app/",

    ToDoListDesc:"ToDo List application built with React.js and styled using Bootstrap and CSS, designed to efficiently manage daily tasks and enhance productivity. Users can easily add, edit, and remove tasks.",
    ToDoListGithub:"https://github.com/SanitKumar/Todo_List",
    ToDoListWebsite:"https://manage-your-list.netlify.app/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox