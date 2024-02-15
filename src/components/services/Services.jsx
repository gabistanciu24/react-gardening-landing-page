import { servicii } from "../../Data"
import shape from "../../assets/shape.png";
import "./services.css"

const Services = () => {
  return (
    <section className="features section" id="servicii">
      <h2 className="section__title" data-title='Servicii'>Calitatea este Punctul Nostru Forte</h2>
      <div className="features__grid container grid">
        { servicii.map(({img,title,description}, index) =>{
          return (
            <div className="features__item" key={ index }>
              <img src={ img } alt="icon" className="feature__img"  style={{ fill: 'white' }}/>
              <h3 className="feature__title">{title}</h3>
              <p className="feature__description">{description}</p>
              <img src={ shape } alt="poza-motocoasa" className="feature__shape" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services