import React, { useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Earphone3() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <div>
       <div className=' min-h-[510px] w-full bg-[] flex justify-center items-center'>

<div className=" h-[400px] w-[95%] md:w-[90%] lg:w-[80%] bg-[] rounded-[20px]">
<Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  // navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  onAutoplayTimeLeft={onAutoplayTimeLeft}
  className="mySwiper"
>
  <SwiperSlide>
    <div className="  h-[400px] w-[100%] bg-[#68a05f] rounded-[20px]">
    <img height='0' alt="oraimo spacebuds earbuds airpods" data-src="https://cdn-img.oraimo.com/2024/10/21/630SpaceBuds-750-1040.jpg" class="lazyloaded ls-is-cached " src="https://cdn-img.oraimo.com/2024/10/21/630SpaceBuds-750-1040.jpg"/>
      {/* <img src="https://cdn-img.oraimo.com/2024/08/08/M.jpg"  alt="" /> */}
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="  h-[400px] w-[100%] bg-[#5f69a0] rounded-[20px]"></div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="  h-[400px] w-[100%] bg-[#9f5fa0] rounded-[20px]"></div>
  </SwiperSlide>
  {/* <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide> */}
  <div className="autoplay-progress" slot="container-end">
    <svg viewBox="0 0 48 48" ref={progressCircle}>
      <circle cx="24" cy="24" r="20"></circle>
    </svg>
    <span ref={progressContent}></span>
  </div>
</Swiper>
</div>


  </div>

    </div>
  )
}

export default Earphone3
