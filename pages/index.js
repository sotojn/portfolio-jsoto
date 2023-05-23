import Head from 'next/head';
import { Sora } from 'next/font/google';
//// All Components
import NavBar from '../components/NavBar.js';
import Contact from '../components/Contact.js';
import Opening from '../components/Opening.js';
import About from '../components/About.js';
import Projects from '../components/Projects.js';
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
        <section className="max-h-screen overflow-y-scroll scrollbar-hide">
          <section className="w-full h-20 shadow-xl bg-white z-20 lg:h-24">
          </section>
          <Opening />
          <About />
          <Projects />
          <Contact/>
         </section>
      </main>
    </div>
  )
}
