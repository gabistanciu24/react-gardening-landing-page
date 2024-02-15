import aboutImg from "../../assets/about-img.png";
import { FiCheck } from "react-icons/fi";
import './about.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={ aboutImg } alt="gradina-frumoasa" className="about__img" />
        </div>
        <div className="about__content">
          <h2 className="section__title title-left" data-title='Despre Noi'>Cultivam Frumusetea in Jurul Tau</h2>
          <p className="about__description">
            Suntem o echipa dedicata pasionata de frumusetea si ingrijirea mediului
            inconjurator. Ne straduim sa oferim cele mai bune servicii de tundere a ierbiisi
            curatare a pavajelor pentru clientii nostri, transformand gradinile si spatiile
            exterioare in adevarate oaze de relaxare si frumusete.
          </p>
          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck className="about__details-icon"/>
              Expertiza profesionala: Echipa noastra este alcatuita din profesionisti calificati
              si cu experienta.
            </p>

            <p className="about__details-description">
              <FiCheck className="about__details-icon"/>
              Abordare personalizata: Ne adaptam serviciile la nevoile unice ale fiecarui client si 
              ale proprietatii sale.
            </p>

            <p className="about__details-description">
              <FiCheck className="about__details-icon"/>
              Compromis pentru calitate: Ne dedicam livrarii de lucrari de inalta calitate, folosim tehnici moderne
              si echipamente eficiente.
            </p>
          </div>
          <a href="#servicii" className="btn">Serviciile noastre</a>
        </div>
      </div>
    </section>
  )
}

export default About