import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Project_1_Slide_1 from '../public/Images/Project1/image1.png';
import Project_1_Slide_2 from '../public/Images/Project1/image2.png';
import Project_1_Slide_3 from '../public/Images/Project1/image3.png';
import Project_1_Slide_4 from '../public/Images/Project1/image4.png';
import Project_1_Slide_5 from '../public/Images/Project1/image5.png';
import Project_2_Slide_1 from '../public/Images/Project2/image1.jpg';
import Project_2_Slide_2 from '../public/Images/Project2/image2.jpg';
import Project_2_Slide_3 from '../public/Images/Project2/image3.jpg';
import Project_2_Slide_4 from '../public/Images/Project2/image4.jpg';

function projects() {
  return (
    <section id="Projects">
      <div className="p-10">
        <h2 className="text-4xl font-medium py-2 text-teal-600 text-center lg:text-left">Projects</h2>
      </div>
      <div className="lg:flex gap-2 justify-center mb-10">
        <div className="shadow-lg p-10 rounded-xl mx-5 lg:w-[45%]">
          <h3 className="text-2xl font-medium py-4 flex justify-center items-center text-teal-600">Perfect Dark Website</h3>
          <div className="w-full">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'2'}
            modules={[Navigation, Pagination, EffectCards ]}
            //pagination={{el:'',clickable:true}}
            //navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev', clickable:true}}
          >
            <SwiperSlide><Image src={Project_1_Slide_1} alt="Perfect Dark App" priority/></SwiperSlide>
            <SwiperSlide><Image src={Project_1_Slide_2} alt="Perfect Dark App" priority/></SwiperSlide>
            <SwiperSlide><Image src={Project_1_Slide_3} alt="Perfect Dark App" priority/></SwiperSlide>
            <SwiperSlide><Image src={Project_1_Slide_4} alt="Perfect Dark App" priority/></SwiperSlide>
            <SwiperSlide><Image src={Project_1_Slide_5} alt="Perfect Dark App" priority/></SwiperSlide>
          </Swiper>
          </div>
          <h3 className="text-xl font-medium py-4 flex justify-center items-center">A Custom Web Ecommerce Store</h3>
          <p className="text-sm"><span className="font-bold text-md">Description: </span>Perfect Dark is a powerful, custom-built ecommerce platform designed to streamline your online shopping experience. Developed using the cutting-edge <span className="text-teal-700">React framework</span> and hosted on <span className="text-teal-700">AWS through an EC2</span> instance, Perfect Dark is built for speed, efficiency, and performance. Whether you&apos;re a buyer or seller, Perfect Dark offers a user-friendly interface that is both intuitive and visually appealing. </p>
          <p className="py-4"><span className="font-bold">Technologies Used:</span> HTML, CSS, JavaScript, React, Node.js, Express, Amazon Web Services</p>
          <div className="flex justify-center items-center">
            <Link href="https://github.com/perFECt-dark/Front-End-Capstone" target="_blank" className="flex justify-center items-center bg-teal-600 hover:bg-teal-700 text-white font-light py-2 px-4 rounded"><FaGithub size={25}/>&nbsp; Github Repo</Link>
          </div>
        </div>
        <div className="shadow-lg p-10 rounded-xl mx-5 lg:w-[45%]">
          <h3 className="text-2xl font-medium py-4 flex justify-center items-center text-teal-600">Sanctuary (IOS & Android)</h3>
          <div className="flex justify-center items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            slidesPerView={'2'}
            centeredSlides={true}
            modules={[Navigation, Pagination, EffectCards]}
            //pagination={{el:'',clickable:true}}
            //navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev', clickable:true}}
          >
            <SwiperSlide><Image src={Project_2_Slide_1} alt="Sanctuary App" priority/></SwiperSlide>
            <SwiperSlide><Image src={Project_2_Slide_2} alt="Sanctuary App" priority/></SwiperSlide>
            <SwiperSlide><Image src={Project_2_Slide_3} alt="Sanctuary App" priority/></SwiperSlide>
            <SwiperSlide><Image src={Project_2_Slide_4} alt="Sanctuary App" priority/></SwiperSlide>

          </Swiper>
          </div>
          <h3 className="text-xl font-medium py-4 flex justify-center items-center">A Mobile Native Social App</h3>
          <p className="text-sm"><span className="font-bold text-md">Description: </span> Sanctuary is a revolutionary social app designed to create a safe and positive space for users to express themselves anonymously. Developed using the power of <span className="text-teal-700">React Native and leveraging Firebase authentication,</span> Sanctuary is a full-stack app that combines the latest technology with a user-friendly interface. With Sanctuary, you can talk about your feelings and experiences without fear of judgment or negative feedback.</p>
          <p className="py-4"><span className="font-bold">Technologies Used: </span> React Native, Firebase, Javascript, CSS</p>
          <div className="flex justify-center items-center">
            <Link href="https://github.com/SanctuarySystems/Sanctuary" target="_blank" className="flex justify-center items-center bg-teal-600 hover:bg-teal-700 text-white font-light py-2 px-4 rounded"><FaGithub size={25}/>&nbsp; Github Repo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default projects