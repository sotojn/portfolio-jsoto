import Image from 'next/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
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
