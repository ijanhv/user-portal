import Image from 'next/image'
import Inter from "next/font/google"

import Navbar from '@/components/globals/Navbar'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="bg-white ">
      {/* <!--HOMEPAGE --> */}
      <Hero />

      <Features />

      {/* <!-- FOOTER SECTION --> */}
      <section className="footer-bg bg-slate-900 text-white px-[1.5rem] ">
        <div className="lg:desktop-footer-bg lg:flex lg:items-center lg:justify-center lg:flex-row-reverse lg:gap-[5rem] mt-[5rem]">
          <div className="lg:px-[5rem] lg:mt-[5rem]">
            <h1 className="mt-[5rem] mb-[0.8rem] pt-[4rem] font-sans uppercase text-[1.3rem] font-bold md:text-[1.5rem] lg:text-[1.4rem]">
              Newsletter
            </h1>
            <p className="font-sans text-[1rem] footer-line-height md:text-[1.25rem] md:leading-7 lg:text-[1.1rem] lg:leading-7">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your
              email address
            </p>

            <form className="mt-[2rem] lg:flex lg:items-center lg:justify-center lg:gap-[3rem] lg:w-full">
              <div className="w-full">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="mb-[0.8rem] w-[100%] h-full p-[0.8rem] rounded-md text-black outline-[#00252e] mx-auto block lg:w-[100%] lg:items-center lg:mt-[-4rem] lg:ml-[-2rem]lg:px-90"
                />
              </div>
              <div>
                <a
                  href="#"
                  className="bg-[#ff52bf] rounded-md mb-[5rem] mr-[1rem] md:w-[40%] md:float-right text-white text-center float-right font-bold text-[1.1rem] py-[0.75rem] px-[1rem] block lg:w-[100%] hover:bg-[#ff8fd8] transition duration-300 ease-in-out"
                >
                  Subscribe
                </a>
              </div>
            </form>
          </div>

          <div className="lg:px-[5rem] lg:mt-[8rem]">
            <div className="w-[80%]">
              <h1 className="text-4xl text-white font-semibold">Nivaran</h1>
            </div>
            <p className="text-[0.95rem] mt-[0.5rem] mb-[2rem] font-Sans line-height-footer font-[450] md:text-[1.2rem] md:leading-7 lg:text-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>

            <div className="flex items-center gap-5 mb-[0.4rem]">
              <img src="./images/icon-phone.svg" alt="Phone-icon" />
              <p className="text-[1rem] md:text-[1.3rem] lg:text-[1.1rem]">
                Phone: +1-543-123-4567
              </p>
            </div>

            <div className="flex items-center gap-5">
              <img src="./images/icon-email.svg" alt="email-icon" />
              <p className="text-[1rem] md:text-[1.3rem] lg:text-[1.1rem]">
                nivaran
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[0.65rem] pt-[2rem] pb-[2rem] md:gap-[0.95rem] lg:mt-[-3.5rem] lg:px-[5rem]">
          <a
            href="#"
            aria-label="Facebook"
            className=" hover:text-blue-500 transition duration-300 ease-in-out hover:translate-y-[-0.2rem]"
          >
            <i className="fa-brands fa-square-facebook text-[1.7rem] md:text-[2rem]"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className=" hover:text-blue-500 transition duration-300 ease-in-out hover:translate-y-[-0.2rem]"
          >
            <i className="fa-brands fa-instagram text-[1.7rem] md:text-[2rem]"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className=" hover:text-blue-500 transition duration-300 ease-in-out hover:translate-y-[-0.2rem]"
          >
            <i className="fa-brands fa-square-twitter text-[1.7rem] md:text-[2rem]"></i>
          </a>
        </div>
      </section>
    </main>
  </>
  )
}
