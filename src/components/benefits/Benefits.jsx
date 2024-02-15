import { beneficii } from "../../Data"
import { CiCircleCheck } from "react-icons/ci";
import "./benefits.css";

const Benefits = () => {
  return (
    <section className="menu section" id="beneficii">
      <h2 className="section__title" data-title='Beneficii'>Beneficii ale Unei Gradini Bine Intretinute</h2>
      <div className="menu__grid container grid">
        {beneficii.map(({img,title,description}, index)=>
          {
            return(
              <div className="menu__item grid" key={index}>
                <div className="menu__img-wrapper">
                  <img src={img} alt="icon" className="menu__img" />
                </div>
                <div className="menu__data">
                  <div>
                    <h3 className="menu__title">{title}</h3>
                    <p className="menu__description">{description}</p>
                  </div>
                  <span className="menu__price">
                    <CiCircleCheck className="check"/>
                  </span>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Benefits