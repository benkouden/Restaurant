import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">À PROPOS DE NOUS</h1>
            <p>
              La seule chose que nous prenons au sérieux, c'est la nourriture.
            </p>
          </div>

          <p className="mid">
            Chez nous, la nourriture n’est pas simplement un moyen de se
            nourrir, c’est une véritable passion. The only thing we're serious
            about is food illustre parfaitement notre philosophie : chaque plat
            que nous préparons est une œuvre d'art, créée avec soin et
            dévouement. Nous mettons un point d'honneur à utiliser des
            ingrédients frais et de qualité, issus des meilleurs fournisseurs,
            pour garantir des saveurs authentiques et un goût incomparable.
          </p>
          <Link to={"/"}>
            Explorer notre menu{" "}
            <span>
              <HiOutlineArrowDownRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
