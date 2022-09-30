import React from "react";
import { useState, useEffect } from "react";


export default function Header() {

  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (

    <header className={`${stickyClass}`}>
      <div className="header-inner">
        <span className="logo">Claudia Alexandra  Salgán Bettuzzi</span>
        <div className="links">
          <a className="link" href="#banner">
            Inicio
          </a>
          <a className="link" href="#services">
            Habilidades
          </a>
          <a className="link" href="#experiences">
            Experiencia
          </a>
          <a className="link" href="#projects">
            Proyectos
          </a>
        </div>
        <span className="menu" onClick={() => setActive(!active)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>
        <a className="link" onClick={() => setActive(!active)} href="#banner">
          Inicio
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#services">
             Habilidades
        </a>
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="#experiences"
        >
          Experiencia
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
      </div>
      
    </header>
  )
}
