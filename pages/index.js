import Link from 'next/link';
import Image from 'next/image';
import jsotoPic from '../public/Images/jsotoPicture.png';
import Head from 'next/head';
import { BsFillMoonStarsFill, BsServer } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMenu, HiOutlineCode } from 'react-icons/hi';
import { SiJavascript, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiPostgresql,
  SiMysql, SiExpress , SiAmazonaws, SiFirebase } from 'react-icons/si';
import { Sora } from 'next/font/google';
import NavBar from '../components/NavBar.js';
/// All Swiper imports
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




 const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})
export default function Home() {
  return (
      <div>
        <Head>
          <title>Joseph Soto Portfolio</title>
          <meta name="description" content="Joseph Soto Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${sora.variable} font-sans bg-white`}>
            <NavBar />
            <section className="max-h-screen overflow-y-scroll scrollbar-hide pt-24">

              <section id="Home">
                <div className="text-center p-5 lg:p-20">
                  <h2 className="text-5xl font-medium py-8 text-teal-600">Hi, I'm Joseph Soto</h2>
                  <h3 className="text-3xl font-medium py-2">I build things for the web.</h3>
                  <h3 className="text-md py-5 leading-8 text-grey-800 mb-10 lg:text-xl">I'm a software engineer based in Mesa, AZ specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</h3>
                  <button className="btn relative inline-flex items-center justify-start overflow-hidden text-white transition-all bg-teal-500 font-bold rounded hover:bg-white group">
                    <span className="w-0 h-0 rounded bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className="w-full p-text-black py-4 px-8 transition-colors duration-300 ease-in-out group-hover:text- z-10"><a href="#Contact" >Get In Touch</a></span>
                  </button>
                </div>
                <div className="text-5xl flex pt-10 justify-center gap-16 text-gray-300 lg:pt-0">
                  <a
                    href="https://github.com/sotojn"
                    target="_blank"><FaGithub /></a>
                  <a
                  href="https://www.linkedin.com/in/joseph-soto66/"
                  target="_blank"><FaLinkedin /></a>
                  <a
                  href="https://www.youtube.com/@josephsoto66"
                  target="_blank"><FaYoutube /></a>
                </div>
              </section>
              <section id="About">
                <div className="p-10">
                  <h2 className="text-4xl font-medium py-2 text-teal-600 text-center lg:text-left">About Me</h2>
                  <div className="items-center lg:flex gap-2">
                    <div className="p-2">
                      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-1/2 h-1/2 overflow-hidden z-0 lg:w-2/3 lg:h-2/3">
                        <Image src={jsotoPic}
                        //layout="fill"
                        //objectFit="cover"
                        alt="Joseph portrait"/>
                      </div>
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-medium py-2">A programming legend from Mesa Arizona</h3>
                      <p className="text-md py-5 leading-8 text-grey-800"> I am a full stack developer based in Mesa, Arizona. I am passionate about bringing ideas to life on the screen, and I am constantly looking for ways to improve my skills and knowledge.</p>
                      <p className="text-md py-5 leading-8 text-grey-800">I am currently working as a freelance software engineer on <a href="https://www.upwork.com/freelancers/~012975d21ca06ed41c?viewMode=1" target="_blank" className="text-teal-600">Upwork</a> where I work on a variety of Full-Stack projects for clients. I am also a graduate of Hack Reactor's 12 week immersive program!</p>
                      <p className="text-md py-5 leading-8 text-grey-800">When I'm not in front of a computer screen, I'm probably out with friends or family, playing chess, or out trying new things! Also I like causal gaming.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:flex gap-2 justify-center">
                  <div className="shadow-lg p-10 rounded-xl mx-10 lg:w-full">
                    <h3 className="text-2xl font-medium py-4 flex justify-center items-center">Front End Skills&nbsp;<HiOutlineCode className="text-3xl text-teal-600"/></h3>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiHtml5 className="text-3xl text-teal-600"/>&nbsp;&nbsp;HTML</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiCss3 className="text-3xl text-teal-600"/>&nbsp;&nbsp;CSS</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiTailwindcss className="text-3xl text-teal-600"/>&nbsp;&nbsp;TailWind</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiJavascript className="text-3xl text-teal-600"/>&nbsp;&nbsp;JavaScript</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiReact className="text-3xl text-teal-600"/>&nbsp;&nbsp;React</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiNextdotjs className="text-3xl text-teal-600"/>&nbsp;&nbsp;Next.js</p>
                  </div>
                  <div className="shadow-lg p-10 rounded-xl mx-10 lg:w-full">
                    <h3 className="text-2xl font-medium py-4 flex justify-center items-center">Back End Skills&nbsp;<BsServer className="text-3xl text-teal-600"/></h3>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiNodedotjs className="text-3xl text-teal-600"/>&nbsp;&nbsp;Node.js</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiMongodb className="text-3xl text-teal-600"/>&nbsp;&nbsp;MongoDB</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiPostgresql className="text-3xl text-teal-600"/>&nbsp;&nbsp;PostgreSQL</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiMysql className="text-3xl text-teal-600"/>&nbsp;&nbsp;MySQL</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiExpress className="text-3xl text-teal-600"/>&nbsp;&nbsp;Express</p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiAmazonaws className="text-3xl text-teal-600"/><span className="text-sm">&nbsp;&nbsp;Amazon Web Services</span></p>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiFirebase className="text-3xl text-teal-600"/>&nbsp;&nbsp;Firebase</p>
                  </div>
                </div>
              </section>
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
                      // coverflowEffect={{
                      //   "rotate": 0,
                      //   "stretch": 0,
                      //   "depth": 100,
                      //   "modifier": 1.5,
                      //   "slideShadows": true
                      // }}
                      modules={[Navigation, Pagination, EffectCards ]}
                      //pagination={{el:'',clickable:true}}
                      //navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev', clickable:true}}
                    >
                      <SwiperSlide><Image src={Project_1_Slide_1} alt="Perfect Dark App" /></SwiperSlide>
                      <SwiperSlide><Image src={Project_1_Slide_2} alt="Perfect Dark App" /></SwiperSlide>
                      <SwiperSlide><Image src={Project_1_Slide_3} alt="Perfect Dark App" /></SwiperSlide>
                      <SwiperSlide><Image src={Project_1_Slide_4} alt="Perfect Dark App" /></SwiperSlide>
                      <SwiperSlide><Image src={Project_1_Slide_5} alt="Perfect Dark App" /></SwiperSlide>
                    </Swiper>
                    </div>
                    <h3 className="text-xl font-medium py-4 flex justify-center items-center">A Custom Web Ecommerce Store</h3>
                    <p className="text-sm"><span className="font-bold text-md">Description: </span>Perfect Dark is a powerful, custom-built ecommerce platform designed to streamline your online shopping experience. Developed using the cutting-edge <span className="text-teal-700">React framework</span> and hosted on <span className="text-teal-700">AWS through an EC2</span> instance, Perfect Dark is built for speed, efficiency, and performance. Whether you're a buyer or seller, Perfect Dark offers a user-friendly interface that is both intuitive and visually appealing. </p>
                    <p className="py-4"><span className="font-bold">Technologies Used:</span> HTML, CSS, JavaScript, React, Node.js, Express, Amazon Web Services</p>
                    <div className="flex justify-center items-center">
                      <Link href="https://github.com/perFECt-dark/Front-End-Capstone" target="_blank" className="flex justify-center items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"><FaGithub size={25}/>&nbsp; Github Repo</Link>
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
                      // coverflowEffect={{
                      //   "rotate": 0,
                      //   "stretch": 0,
                      //   "depth": 100,
                      //   "modifier": 1.5,
                      //   //"slideShadows": true
                      // }}
                      modules={[Navigation, Pagination, EffectCards]}
                      //pagination={{el:'',clickable:true}}
                      //navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev', clickable:true}}
                    >
                      <SwiperSlide><Image src={Project_2_Slide_1} alt="Sanctuary App" /></SwiperSlide>
                      <SwiperSlide><Image src={Project_2_Slide_2} alt="Sanctuary App" /></SwiperSlide>
                      <SwiperSlide><Image src={Project_2_Slide_3} alt="Sanctuary App" /></SwiperSlide>
                      <SwiperSlide><Image src={Project_2_Slide_4} alt="Sanctuary App" /></SwiperSlide>

                    </Swiper>
                    </div>
                    <h3 className="text-xl font-medium py-4 flex justify-center items-center">A Mobile Native Social App</h3>
                    <p className="text-sm"><span className="font-bold text-md">Description: </span> Sanctuary is a revolutionary social app designed to create a safe and positive space for users to express themselves anonymously. Developed using the power of <span className="text-teal-700">React Native and leveraging Firebase authentication,</span> Sanctuary is a full-stack app that combines the latest technology with a user-friendly interface. With Sanctuary, you can talk about your feelings and experiences without fear of judgment or negative feedback.</p>
                    <p className="py-4"><span className="font-bold">Technologies Used: </span> React Native, Firebase, Javascript, CSS</p>
                    <div className="flex justify-center items-center">
                      <Link href="https://github.com/SanctuarySystems/Sanctuary" target="_blank" className="flex justify-center items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"><FaGithub size={25}/>&nbsp; Github Repo</Link>
                    </div>
                  </div>
                </div>
                </section>
                <section id="Contact">
                  <div className="p-10">
                    <h2 className="text-4xl font-medium py-2 text-teal-600 text-center lg:text-left">Contact</h2>
                  </div>
                  <div className="flex justify-center items-center">
                  </div>
                </section>
          </section>
        </main>
      </div>
  )
}
