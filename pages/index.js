import Image from 'next/image';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
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
        <main className="bg-white px-10">
          <section className="min-h-screen">
            <nav className="py-10 mb-6 flex justify-between">
              <h1 className={`${sora.variable} font-sans text-xl font-bold`}>Joseph Soto</h1>
              <ul className="flex items-center">
                <li><BsFillMoonStarsFill className="cursor-pointer"/></li>
                <li><a className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue-500 text-white px-4 py-2 rounded-md ml-4"
                href="#">Resume</a></li>
                {/* <li>About</li>
                <li>Projects</li>
                <li>Contact</li> */}
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-4xl font-medium py-2 text-teal-600">Hi, I'm Joseph Soto</h2>
              <h3 className="text-2xl font-medium py-2">I build things for the web.</h3>
              <p className="text-md py-5 leading-8 text-grey-800">I'm a software engineer based in Mesa, AZ specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-grey-300">
                <FaGithub />
                <FaLinkedin />
                <FaYoutube />
            </div>
            <div>

            </div>
          </section>
        </main>
      </div>
  )
}
