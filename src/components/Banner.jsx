import React from 'react'

export default function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/dev_3-removebg-preview.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hola!, soy Alexandra Salgán!</h6>
            <h3>Web Developer</h3>
            <p>
              Mi nombre es Claudia Alexandra Salgán Bettuzzi, soy FullStack Developer, 
              fui pasante  en dos proyectos que me permitieron conocer  y tener contacto
              con clientes reales y sus necesidades  en el diseño del software que ellos requiren,
              gracias a esto aprendí y desarrolle sobre tecnologias como ReactJS en el Front y redux
              gracias al ultimo proyecto y en el Back pude trabajar con tecnologias como Mongoose y Sequelize
              y Bases de Datos como MySQL, PostgreSQL y MongoDB
            </p>
            <a className="btn" href="#projects">
              Sobre mi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
