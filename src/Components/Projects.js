import React from 'react';
import ProjectBox from './ProjectBox';
import ChatBotImage from '../images/ChatBotImage.png';
import ToDoListImage from '../images/ToDoListImage.png';
import WeatherAppImage from '../images/WeatherAppImage.png';
import FoodDeliveryImage from '../images/FoodDeliveryImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ChatBotImage} projectName="PhoenixBot" />
        <ProjectBox projectPhoto={ToDoListImage} projectName="ToDoList" />
        <ProjectBox projectPhoto={WeatherAppImage} projectName="WeatherApp" />
        <ProjectBox projectPhoto={FoodDeliveryImage} projectName="MyOnlineMeal" />
      </div>

    </div>
  )
}

export default Projects