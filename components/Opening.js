import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';

function Opening() {
  return (
    <section id="Home">
      <div className="text-center p-5 lg:p-20">
        <h2 className="text-5xl font-medium py-8 text-teal-600">Hi, I&apos;m Joseph Soto</h2>
        <h3 className="text-3xl font-medium py-2">I build things for the web.</h3>
        <h3 className="text-md py-5 leading-8 text-grey-800 mb-10 lg:text-xl">I&apos;m a software engineer based in Mesa, AZ specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</h3>
        <button className="btn relative inline-flex items-center justify-start overflow-hidden text-white transition-all bg-teal-500 font-light rounded hover:bg-white group">
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
  );
}

export default Opening;