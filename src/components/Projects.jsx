import React from "react";
import { useState } from "react";

export default function Projects() {
  const [projects] = useState([
    { 
      title: "Proyecto 1", /* nombre proyecto */
      description:"Este portafolios en donde se visualizan los proyectitos que hice ",/* una descripcion del proyecto */
      img: "/projects/1.JPG", /* imagen del proyecto */
      gLink: "https://github.com/Alexandra1222/repoPortfolio", /* link de github del proyecto */
      lLink: " ", /* link de la pagina donde esta deployado el proyecto */
    },
    {
      title: "Proyecto 2",
      description:"una CRUD hecha en el stack MERN, utilizando mongoDB, mongoose y node JS junto con formidable para el manejo de imagenes y en el front ReactJS",
      img: "/projects/2.JPG",
      gLink: "https://github.com/Alexandra1222/CRUD",
      lLink: " ",
    },
    {
      title: "Proyecto 3",
      description:"una practica de html, css y JS en el DOM  no utiliza BD ni frameworks en el front  solo una practica de maquetacion",
      img: "/projects/3.JPG",
      gLink: "https://github.com/Alexandra1222/ecommercehtml-css",
      lLink: " ",
    },
    {
      title: "Proyecto 4",
      description:"una practica de css, html y JS pero probando conceptos responsive",
      img: "/projects/4.JPG",
      gLink: "https://github.com/Alexandra1222/ecommerceLandingMotos",
      lLink: " ",
    },
    {
      title: "Proyecto 5",
      description:"una pequeña pagina que consume  las razas de gatos que estan en una BD hecha en  mongoDB, mongoose y nodejs en el Back y reactJS en el front",
      img: "/projects/5.JPG",
      gLink: "https://github.com/Alexandra1222/razasgatosMERN",
      lLink: " ",
    },
    {
      title: "Proyecto 6",
      description:"una pequeña práctica en donde consumo una API de la NASA desde el front con reactjs ",
      img: "/projects/6.JPG",
      gLink: "https://github.com/Alexandra1222/frontAPINASA",
      lLink: " ",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Proyectos</h3>
          <a
            href="https://github.com/Alexandra1222"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            Ver Todos
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <div><p>{project.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

