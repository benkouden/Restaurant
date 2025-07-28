import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Le Resto</div>
          <div className="right">
            <p>Bénin, Porto-Novo</p>
            <p>Ouvert : 17h00 - 6h00</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Développé par Ben Kouden</p>
          </div>
          <div className="right">
            <p>Tous droits réservés © Ben Kouden</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
