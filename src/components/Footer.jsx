import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <div className=" bg-gray-950 text-gray-400 p-28">
        <div className="mt-8 flex  lg:flex-row space-x-3 justify-center ">
         

          <div className="space-x-7 mt-5 lg:mt-0">
            <button className="zoom btn  hover:btn-neutral bg-blue-600">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/barshon.chowdhury.5/"
              >
                <FaFacebookF className="text-xl text-white"></FaFacebookF>
              </a>
            </button>
            <button className="zoom btn  hover:btn-neutral bg-gray-900">
              <a
                href="https://github.com/Barshonwebdev"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-xl text-white"></FaGithub>
              </a>
            </button>
            <button className="zoom btn hover:btn-neutral bg-sky-600">
              <a
                href="https://www.linkedin.com/in/barshon-chowdhury-a5b0791a7"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl text-white"></FaLinkedin>
              </a>
            </button>
            <button className="zoom btn  hover:btn-neutral bg-pink-700">
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
    );
};

export default Footer;