import React from "react";
import ProjectCard from "./ProjectCard";
import giphy from '../../assets/giphy-vdo.mp4';
import tour from '../../assets/tourism-vdo.mp4';
import recipe from '../../assets/recipe-app-vdo.mp4';
import calc from '../../assets/calc.mp4';
import resto from '../../assets/restaurant-vdo.mp4';
import weather from '../../assets/weather-vdo.mp4';

const Projects = () => {
  return (
      <div id="Projects" className="p-10 md:p-24 text-white text-center">
  <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
  <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    
    <ProjectCard
      title="Giphy Clone"
      main="A clone of the Giphy platform that allows users to search and view trending GIFs using Giphy API using ReactJs."
      src={giphy}
      demoLink="https://giphy-clone-iota.vercel.app/"
      codeLink="https://github.com/milindsavant/react-projects/tree/main/giphy-clone"
    />
    <ProjectCard
      title="Tourism App"
      main="A simple tourism app that demonstrates state management and tour places listing functionality."
      src={tour}
      demoLink="https://tourism-plan-ruddy.vercel.app/"
      codeLink="https://github.com/milindsavant/react-projects/tree/main/tourism-plan"
    />
    
    <ProjectCard
      title="Recipe App"
      main="A modern recipe app that allows users to search and view recipes using an external food API using React Js."
      src={recipe}
      demoLink="https://recipe-app-delta-ochre.vercel.app/"
      codeLink="https://github.com/milindsavant/react-projects/tree/main/recipe-app"
    />
    <ProjectCard
      title="Calculator App"
      main="A basic calculator built with React, supporting standard arithmetic operations and responsive UI Using React Js."
      src={calc}
      demoLink="https://calculator-app-nu-pink.vercel.app/"
      codeLink="https://github.com/milindsavant/react-projects/tree/main/calculator"
    />
    <ProjectCard
      title="Restaurant Website"
      main="A static restaurant website with a modern UI, responsive layout, and menu showcasing capabilities using React Js."
      src={resto}
      demoLink="https://restaurant-web-three-orcin.vercel.app/"
      codeLink="https://github.com/milindsavant/react-projects/tree/main/resturant-website"
    />
    <ProjectCard
      title="Weather App"
      main="A weather forecast app that fetches real-time data from OpenWeather API and displays it in a clean UI using React Js."
      src={weather}
      demoLink="https://weather-app-chi-two-14.vercel.app/"
      codeLink="https://github.com/milindsavant/react-projects/tree/main/weather-app"
    />
  </div>
</div>

  );
};

export default Projects;
