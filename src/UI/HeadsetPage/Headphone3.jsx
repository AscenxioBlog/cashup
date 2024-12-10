import React, { useRef } from 'react'
// import OrangeBtn from '../../ReusableComponent/ButtonFolder/OrangeBtn'
// import WhiteBtn from '../../ReusableComponent/ButtonFolder/WhiteBtn'
// import img1 from '../../assets/hphone (1).png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Headphone3() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
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

        {/* <div className=" h-[600px] lg:h-[450px] w-full bg-green-00 flex justify-center">
            <div className=" h-[300px] w-[95%] md:w-[90%] rounded-l-md rounded-r-none lg:w-[80%]  mt-[50px] grid grid-cols-1 lg:grid-cols-2">


            <div className=" mt-11">
  


  <div className='font-semibold pt-1 text-[1.4rem]'>XX99 MARK I</div>
  <div className='font-semibold text-[1.4rem]'>HEADPHONES</div>
  <div className='pt-4 lg:w-[80%] text-gray-500'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionades alike in studios and on the go. </div>
<div className='mt-7'>
  <OrangeBtn
        label = 'SEE PRODUCT'
        
        />
        </div>
</div>


                <div className=" bg-[#F1F1F1] h-[300px] lg:h-[350px] rounded-md w-[90%]">

       <img src={img1} alt="" className='h-[250px] w-[300px] ml-20 mt-10'/>
    
                </div>


            
    
    
                  
                </div>
            </div> */}
        </div>
      





    
  )
}

export default Headphone3
