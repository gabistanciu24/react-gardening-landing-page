import { IoIosSend } from "react-icons/io";
import shapeTwo from "../../assets/shape-2.png"
import shapeThree from "../../assets/shape-3.png"
import "./contact.css";

const Contact = () => {
  return (
    <section className="reservation container" id="contact">
      <h2 className="section__title" data-title='Contact'>Esti Interesat de o Oferta?</h2>
      <form className="reservation__form grid">
        <div className="form_input-div">
          <input type="text" placeholder="Nume Complet" className="form__input" required/>  
        </div>
        <div className="form_input-div">
          <input type="email" placeholder="Adresa de Email" className="form__input" required/>  
        </div>
        <div className="form_input-div">
          <input type="tel" placeholder="Telefon" className="form__input" required/>  
        </div>
        <div className="form_input-div">
          <input type="text" placeholder="Adresa (optional)" className="form__input" />  
        </div>
        <div className="form_input-div">
          <input type="text" placeholder="Serviciul Dorit" className="form__input" />  
        </div>
        <div className="form_input-div">
          <input type="text" placeholder="Preferinte" className="form__input" />  
        </div>
        <div className="form_input-div form__input-textarea">
          <textarea placeholder="Mesajul Tau" className="form__input"></textarea> 
        </div>
        <button className="btn btn--flex reservation__btn">
          <IoIosSend />Trimite.
        </button>
      </form>
      <img src={shapeTwo} alt="iconita motocoasa" className="shape__two"/>
      <img src={shapeThree} alt="iconita cleste" className="shape__three"/>
    </section>
  )
}

export default Contact