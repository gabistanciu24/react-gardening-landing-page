import './home.css';

const Home = () => {
  return (
    <section className="home" id="acasa">
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle">Garden - Heroes Bistrita!</span>
          <h1 className="home__title">Dedicati Nevoilor Gradinii Tale</h1>
          <p className="home__description">Servicii profesionale dedicate tie si gradinii tale care iti vor depasi garantat asteptarile.</p>
          <div className="home__btns">
            <a href="#motive" className="btn">De ce noi?</a>
            <a href="#beneficii" className="btn home__btn">Beneficii</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home