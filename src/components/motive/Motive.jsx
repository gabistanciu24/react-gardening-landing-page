
import { motive } from "../../Data"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./motive.css";



const Motive = () => {
  return (
    <section className="testimonials container section" id="motive">
      <h2 className="section__title" data-title='De ce noi?'>Calitate Garantata in Gradina Minunata</h2>
      <Swiper
        spaceBetween={30}
        pagination={{clickable:true}}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="container"
      >
        {motive.map(({title,description},index)=>{
          return(
            <SwiperSlide className="testimonial__item" key={ index }>
              <div className="testimonial__qoute">
                <h3 className="testimonial__title">{ title }</h3>
                <p className="testimonial__description">
                  { description } 
                </p>
              </div>
            </SwiperSlide>
          )
          }
        )}
      </Swiper>
    </section>
  )
}

export default Motive