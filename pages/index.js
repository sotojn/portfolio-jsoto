import Image from 'next/image';
import jsotoPic from '../public/Images/jsotoPicture.png';
import Head from 'next/head';
import { BsFillMoonStarsFill, BsServer } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMenu, HiOutlineCode } from 'react-icons/hi';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiMysql, SiExpress , SiAmazonaws, SiFirebase } from 'react-icons/si';
import { Sora } from 'next/font/google';
import NavBar from '../components/NavBar.js';

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
                <div className="lg:flex gap-2 justify-center">
                  <div className="shadow-lg p-10 rounded-xl mx-10 lg:w-full">
                    <h3 className="text-2xl font-medium py-4 flex justify-center items-center">Sanctuary (IOS & Android)</h3>
                    <p className="text-md py-3 text-grey-800 flex justify-center items-center"><SiHtml5 className="text-3xl text-teal-600"/>&nbsp;&nbsp;HTML</p>
                  </div>
                </div>
                </section>
          </section>
        </main>
      </div>
  )
}
