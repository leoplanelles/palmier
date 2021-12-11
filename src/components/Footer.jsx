import "./css/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
      <p className="footer-text">
        Une application créée par
        <a href="https://github.com/AnasMama" rel="noreferrer" target="_blank">
          {" "}
          Anas MAMA{" "}
        </a>
         et 
        <a href="https://github.com/leoplanelles" rel="noreferrer" target="_blank">
          {" "}
          Léo PLANELLE{" "}
        </a>
      </p>
      <p>PS : l'abus d'alcool est dangeureux pour la santé. Merci d'utiliser cette application avec modération !</p>
    </div>
    );
}

export default Footer;