import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'all-things-pets',
      description: 'MySQL Database project with Sequelize and handlebars',
      link: "https://vast-retreat-92642.herokuapp.com/",
      repo: "https://github.com/gabrielcalk/all_things_pets"
    },
    {
      name: 'marvelous-battles',
      description: 'Front-End Group Web Application Utilizing 2 APIs',
      link: "https://gabrielcalk.github.io/marvelous_dc/",
      repo: "https://github.com/gabrielcalk/marvelous_dc"
    },
    {
      name: 'employee-tracker',
      description: 'Command line application that allows the user to manage employees. Utilizing mySQL, Node, Inquirer',
      link: "https://github.com/grave019/employee-tracker",
      repo: "https://github.com/grave019/employee-tracker"
    },
    {
      name: 'budget-tracker',
      description: 'WPA utilizing online and offline functionality',
      link: "https://floating-river-46763.herokuapp.com/",
      repo: "https://github.com/grave019/budget_tracker"
    },
    {
      name: 'fitness-tracker',
      description: 'Front End Fitness tracker connected to a Mongo Database with a Mongoose Schema.',
      link: "https://thawing-lowlands-12191.herokuapp.com/stats",
      repo: "https://github.com/grave019/track_your_fitness"
    },
    {
      name: 'MVC-tech-blog',
      description: 'Creating a tech blog with MVC layout to connect to a mySQL Database. Built with mySQL, Sequelize, express, Handlebars and dotenv.',
      link: "https://ghastly-citadel-78278.herokuapp.com/",
      repo: "https://github.com/grave019/MVC-tech-blog"
    },
    {
      name: 'Hungr',
      description: 'MERN Stack Group Project, Utilizing MongoDB, Express, React, Node, and Handlebars, and Agile Software Development.',
      link: "https://hungr-project.herokuapp.com/",
      repo: "https://github.com/gabrielcalk/hungr"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
