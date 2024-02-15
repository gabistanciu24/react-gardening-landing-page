import logo from "../../assets/logo.png";
import { FaRegEnvelope, FaCaretRight, FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid container grid">
        <div className="footer__content">
          <a href="/" className="footer__logo">
            <img src={ logo } alt="" className="footer__logo-img" />
          </a>
          <p className="footer__description">
            O grădină bine îngrijită este nu doar un loc de relaxare, ci și o investiție în sănătatea, frumusețea și bunăstarea ta!
          </p>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <AiOutlinePhone className="icon"/>+40 799 999 999
            </li>
            <li className="footer__contact-item">
              <MdOutlineLocationOn className="icon"/>25/B Am o strada, Bistrita
            </li>
            <li className="footer__contact-item">
              <FaRegEnvelope className="icon"/>stanciumgabi24@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">
            Navigare Rapida
          </h3>
          <ul className="footer__links">
            <li>
              <a href="#acasa" className="footer__link">
                <FaCaretRight className="icon"/>Acasa
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                <FaCaretRight className="icon"/>Despre noi
              </a>
            </li>
            <li>
              <a href="#servicii" className="footer__link">
                <FaCaretRight className="icon"/>Servicii
              </a>
            </li>
            <li>
              <a href="#beneficii" className="footer__link">
                <FaCaretRight className="icon"/>Beneficii
              </a>
            </li>
            <li>
              <a href="#motive" className="footer__link">
                <FaCaretRight className="icon"/>De ce noi?
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                <FaCaretRight className="icon"/>Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Program</h3>
          <div className="footer__opening-hour">
            <ul className="opening__hour-list">
              <li className="opening__hour-item">
                <span>Luni:</span>
                <span>08AM - 06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Marti:</span>
                <span>08AM - 06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Miercuri:</span>
                <span>08AM - 06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Joi:</span>
                <span>08AM - 06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Vineri:</span>
                <span>08AM - 06PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Sambata:</span>
                <span>08AM - 02PM</span>
              </li>
              <li className="opening__hour-item">
                <span>Duminica:</span>
                <span>INCHIS</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Newsletter</h3>
          <p className="footer__description">
            Aboneaza-te la Newsletter-ul Nostru Pentru a fi la Curent cu Ofertele
          </p>
          <form action="" className="subscribe__form">
            <input type="email" placeholder="Adresa de Email" className="form__input subscribe__input" />
            <button className="btn btn--flex subscribe__btn">
              <FaRegEnvelope/> Abonare
            </button>
          </form>
          <div className="footer__socials">
            <h3 className="footer__social-follow">Urmareste-ne:</h3>
            <div className="footer__social-links">
              <a href="/" className="footer__social-link">
                <FaFacebookF/>
              </a>
              <a href="/" className="footer__social-link">
                <FaXTwitter/>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-stanciu-b66482268/" className="footer__social-link">
                <FaLinkedinIn/>
              </a>
              <a href="/" className="footer__social-link">
                <FaYoutube/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright__text">
        &copy; Copyright 2024 <span>Garden-Heroes</span> All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer