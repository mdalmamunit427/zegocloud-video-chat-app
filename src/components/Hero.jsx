
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const slides = [
  {
    title: 'Best Video Editing in USA',
    image:"https://images.unsplash.com/photo-1459184070881-58235578f004?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  },
  {
    title: 'World Class Video Production',
    image:
      'https://images.unsplash.com/photo-1636971828014-0f3493cba88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Brown and blue hardbound book',
    image:
      'https://images.unsplash.com/photo-1612311372499-8761ad50c451?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Hero = () => {
  return (
    <div className="carousel relative container mx-auto" style={{ maxWidth: '1600px' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="block h-full w-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
              style={{
                height: '50vh',
                backgroundImage: `url('${slide.image}')`,
                backgroundBlendMode: 'linear',
              }}
            >
              <div className="container mx-auto">
              <div className="bg-black opacity-65 flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide rounded-sm">
                  <p className=" text-white text-2xl my-4">{slide.title}</p>
                  <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black mb-2" href="#">
                    view pricing
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
