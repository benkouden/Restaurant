import React from "react";
import { FaMotorcycle, FaConciergeBell, FaUtensils } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";

const services = [
  {
    id: 1,
    title: "Livraison à domicile",
    icon: <FaMotorcycle />,
    description:
      "Savourez nos plats où que vous soyez ! Nous assurons une livraison rapide et chaude dans tout Porto-Novo.",
  },
  {
    id: 2,
    title: "Réservation Privée",
    icon: <FaUtensils />,
    description:
      "Organisez vos événements en toute intimité avec notre espace privé. Idéal pour les anniversaires, réunions ou dîners romantiques.",
  },
  {
    id: 3,
    title: "Chef à domicile",
    icon: <FaConciergeBell />,
    description:
      "Offrez-vous une expérience culinaire unique à domicile avec notre chef personnel, pour vos moments exceptionnels.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="sectionService">
        <NavBar />
      </section>
      <section className="services-hero">
        <div className="hero-content">
          <h1>Découvrez nos services exclusifs</h1>
          <p>
            Profitez d'une expérience culinaire exceptionnelle avec nos services
            adaptés à tous vos besoins.
          </p>
          <button
            className="btn-primary"
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
          >
            Explorer les services
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/hero2.png"
            alt="Services de restauration"
            loading="lazy"
          />
        </div>
      </section>
      <section className="services-container">
        <div className="services-header">
          <h1>Nos Services</h1>
          <p>
            Découvrez les services que Le Resto met à votre disposition pour une
            expérience gastronomique inoubliable.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Menu/>

    </>
  );
};

export default ServicesPage;
