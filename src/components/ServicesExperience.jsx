import React from 'react'
import { useState } from 'react';

export default function ServicesExperience() {

    const [services] = useState([
        {
          icon: "fa-paintbrush",
          title: "FrontEnd",
          desc: "En el front utilizo reactJS, Redux, en los poryectos donde  estuve como pasante utilice MUI, Bootstrap V5.",
          active: false,
        },
        {
          icon: "fa-pen-to-square",
          title: "BackEnd",
          desc: "En el Back utilizo NodeJS, como ORM mongoose y sequelize y bases de Datos PostgreSQL, MySQL y MongoDB",
          active: true,
        },
        
      ]);


  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Saber más</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1</h3>
            <p>Año de  Experiencia</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>2</h4>
              <p>Clientes</p>
            </div>
            <div className="portfolio">
              <h4>2</h4>
              <p>Experiencias</p>
            </div>
            <div className="portfolio">
              <h4>6</h4>
              <p>Certificaciones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
