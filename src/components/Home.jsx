import { FaComputer } from "react-icons/fa6";
import propic from '../assets/35052794_1797074400376044_5098867496002256896_n-removebg-preview.png'
import TypeWriterAnimation from "./TypeWriterAnimation";
import { Slide } from "react-awesome-reveal";
import { FaInstagram, FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Home = () => {
    return (
      <div className="flex flex-col md:flex-row items-center">
        <Slide className="lg:w-1/2" direction="left">
          <div className="flex flex-col justify-center items-center mx-10 mt-32 mb-10 ">
            <FaComputer className="text-9xl"></FaComputer>
            <h2 className="lg:text-4xl text-2xl font-bold">
              Barshon Chowdhury
            </h2>
            <h3>
              <TypeWriterAnimation></TypeWriterAnimation>
            </h3>
            <div className="mt-5 lg:px-14 ">
              Passionate web developer with a knack for turning ideas into
              interactive and visually appealing websites. Dedicated to creating
              seamless user experiences through innovative design and meticulous
              coding. Profiency in mostly ReactJs with additional knowledge about Node,Express and Mongodb. 
            </div>
            <div className="mt-8 flex flex-col lg:flex-row space-x-3 justify-center ">
              <button className="btn  hover:btn-neutral uppercase bg-slate-800 text-white rounded-badge">
                Get in touch{" "}
                <FaLongArrowAltRight className="text-xl"></FaLongArrowAltRight>
              </button>
              
              <div className="space-x-2 mt-5 lg:mt-0">
                <button className="zoom btn btn-circle hover:btn-neutral bg-blue-600">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/barshon.chowdhury.5/"
                  >
                    <FaFacebookF className="text-xl text-white"></FaFacebookF>
                  </a>
                </button>
                <button className="zoom btn btn-circle hover:btn-neutral bg-gray-900">
                  <a
                    href="https://github.com/Barshonwebdev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-xl text-white"></FaGithub>
                  </a>
                </button>
                <button className="zoom btn btn-circle hover:btn-neutral bg-sky-600">
                  <a
                    href="https://www.linkedin.com/in/barshon-chowdhury-a5b0791a7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-xl text-white"></FaLinkedin>
                  </a>
                </button>
                <button className="zoom btn btn-circle hover:btn-neutral bg-pink-700">
                  <a
                    href="https://www.instagram.com/barshon_drizzle/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="text-xl text-white"></FaInstagram>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="ml-10 lg:ml-20">
            <img src={propic} alt="" />
          </div>
        </Slide>
      </div>
    );
};

export default Home;