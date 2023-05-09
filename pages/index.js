import Image from 'next/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
import { Sora } from 'next/font/google'

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
        <main className={`${sora.variable} font-sans bg-white px-10`}>
          <section>
            <nav className="py-10 mb-6 flex justify-between">
              <h1 className="text-xl font-bold mt-1">Joseph Soto</h1>
              <ul className="flex items-center hidden lg:flex">
                {/* <li><BsFillMoonStarsFill className="cursor-pointer"/></li>
                <li><a className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue-500 text-white px-4 py-2 rounded-md ml-4"
                href="#">Resume</a></li> */}
                <li className="px-4 py-2 cursor-pointer">Home</li>
                <li className="px-4 py-2 cursor-pointer">About</li>
                <li className="px-4 py-2 cursor-pointer">Projects</li>
                <li className="px-4 py-2 cursor-pointer">Contact</li>
                <li className="px-4 py-2 cursor-pointer">Blog</li>
              </ul>
                <a
                href="mailto:josephsoto684@gmail.com"
                className="flex items-center  hidden lg:flex"><AiOutlineMail />
                <span className="p-2 text-sm">josephsoto684@gmail.com</span></a>
                <div className="flex items-center text-3xl lg:hidden cursor-pointer"><HiOutlineMenu/></div>

            </nav>
            </section>
            <section className="max-h-screen overflow-y-scroll scrollbar-hide">

              <section id="Home">
                <div className="text-center p-10">
                  <h2 className="text-4xl font-medium py-2 text-teal-600">Hi, I'm Joseph Soto</h2>
                  <h3 className="text-2xl font-medium py-2">I build things for the web.</h3>
                  <p className="text-md py-5 leading-8 text-grey-800">I'm a software engineer based in Mesa, AZ specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
                </div>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-300">
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
          </section>
        </main>
      </div>
  )
}
