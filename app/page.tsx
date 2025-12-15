import Form from "next/form";

import InteractiveHeadphones from "./components/InteractiveHeadphones";
import Portfolio from "./components/Portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <section className="Hero group h-screen flex flex-col justify-center items-center">
        <InteractiveHeadphones />
        <div className="flex gap-2 text-5xl md:text-7xl">
          <span className="text-shadow-lg text-shadow-cyan-100">TOUCHING</span>
          <span className="text-red-500 font-cinzel">LIVES</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl italic font-calson">through</span>
          <span className="place-self-end text-red-500">....godly sounds</span>
          <a href="mailto:info@izickmedia.com?subject=Inquiry" className="py-8">
            <button className="button px-8">
              Email Us
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </section>
      {/* our vision */}
      <section className="vision md:grid grid-cols-2 border-r border-b place-items-center h-[80dvh] flex flex-col px-10 justify-center">
        <div>
          <div className="backgroundImage my-auto">
            <div className="text flex justify-center text-5xl">Our Goal</div>
            <div className="text text-5xl">50 Million Souls</div>
            <Link href={"/about"}>
              <button className="animated-button my-20 mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">VIEW OUR SERVICES</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="border-l px-6">
          <div className="flex justify-center py-8 text-5xl">Our Vision</div>
          <p className="font-sans text-center md:text-left pb-6">
            IzickMedia exists to raise a generation of sound that transforms
            lives, culture, and faith. Our vision is to become a leading gospel
            media and music powerhouse that touches the soul of men through
            heavenly sounds, excellence, and purpose-driven creativity. We
            envision IzickMedia as a platform where God-given talents are
            discovered, nurtured, and positioned to influence the world
            positively. Through music, media production, and creative
            innovation, we aim to communicate messages of hope, truth, and
            spiritual depth that resonate across nations and generations.
          </p>
        </div>
      </section>
      <section className="py-20 flex flex-col justify-center items-center">
        <div className="values text-3xl md:text-4xl">WHAT WE STAND FOR</div>
        {/* container to hold all divs */}
        <div>
          <div className="white sticky top-0 text-black font-calson h-160 md:grid grid-cols-2 mx-10 rounded-2xl border-red-500 overflow-hidden  bg-white my-6">
            {/* background image */}
            <div className="bg-[url('/excellence.jpg')] bg-no-repeat bg-center bg-cover"></div>
            <div className="flex flex-col items-center h-full">
              <span className="valueTags pt-6 text-3xl font-cinzel">
                Excellence
              </span>
              <p className="my-auto px-6">
                At IzickMedia, excellence is our culture. We are committed to
                delivering the highest quality in sound, media production, and
                creative expression. Every project is handled with skill,
                diligence, and attention to detail, ensuring that our output
                reflects honor to God and value to our audience.
              </p>
              <span className="my-auto place-self-end px-6 font-sans text-xs">
                1
              </span>
            </div>
          </div>
          <div className="black sticky top-[calc(2*2rem)] h-160 md:grid grid-cols-2 mx-10 rounded-2xl border-red-500 overflow-hidden  bg-black my-6">
            {/* background image */}
            <div className="flex flex-col items-center h-full">
              <span className="valueTags pt-6 text-3xl font-cinzel">
                Integrity
              </span>
              <p className="my-auto px-6">
                Integrity is the foundation of all we do. We stand for honesty,
                accountability, and ethical practices in our relationships with
                artists, partners, churches, and clients. Our word is our bond,
                and we are committed to doing what is right, even when no one is
                watching.
              </p>
              <span className="my-auto place-self-end px-6 font-sans text-xs">
                2
              </span>
            </div>
            <div className="bg-[url('/integrity.gif')] bg-no-repeat bg-center bg-cover"></div>
          </div>
          <div className="red bg-red-500 sticky top-[calc(3*2rem)] my-6 h-160 md:grid grid-cols-2 mx-10 rounded-2xl border-red-500 overflow-hidden ">
            {/* background image */}
            <div className="bg-[url('/profssionalism.jpg')] bg-no-repeat bg-center bg-cover"></div>
            <div className="flex flex-col items-center h-full">
              <span className="valueTags pt-6 text-3xl font-cinzel">
                Professionalism
              </span>
              <p className="my-auto px-6">
                We uphold professionalism in our conduct, communication, and
                delivery. IzickMedia operates with structure, respect for time,
                clear processes, and industry best practices. We believe that
                gospel creativity should meet and exceed global professional
                standards.
              </p>
              <span className="my-auto place-self-end px-6 font-sans text-xs">
                3
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* portfolio */}
      <Portfolio />
      <section className="newsletter flex flex-col place-items-center h-36 py-8  m-8 justify-center items-center">
        <div className="pt-8 text-3xl mt-8">Register for Newsletter</div>
        <Form className="flex flex-col py-8 relative" action="/about">
          <input
            className="border h-10 w-xl text-center peer my-2"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
          />
          <label
            className="place-items-center bg-black my-2 pr-2 flex justify-center absolute top-7 font-light font-mono peer-focus:top-5 peer-focus:text-xs transition-all duration-400 "
            htmlFor="email"
          >
            Enter your email to register
          </label>
          <button
            className="bg-gray-50 text-black py-3 hover:bg-red-500 hover:text-white transition-all duration-200"
            type="submit"
          >
            Register
          </button>
        </Form>
      </section>
    </section>
  );
}
