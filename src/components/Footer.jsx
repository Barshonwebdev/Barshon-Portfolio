import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <div className=" bg-gray-950  py-28 space-y-5  ">
        <div className="mt-8 flex  lg:flex-row space-x-3 justify-center ">
          <div className="lg:space-x-7 space-x-4 mt-5 lg:mt-0">
            <button className="zoom   hover:btn-neutral ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/barshon.chowdhury.5/"
              >
                <FaFacebookF className="text-3xl text-white"></FaFacebookF>
              </a>
            </button>
            <button className="zoom   hover:btn-neutral ">
              <a
                href="https://github.com/Barshonwebdev"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl text-white"></FaGithub>
              </a>
            </button>
            <button className="zoom  hover:btn-neutral ">
              <a
                href="https://www.linkedin.com/in/barshon-chowdhury-a5b0791a7"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl text-white"></FaLinkedin>
              </a>
            </button>
            <button className="zoom  hover:btn-neutral ">
              <a
                href="https://www.instagram.com/barshon_drizzle/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-3xl text-white"></FaInstagram>
              </a>
            </button>
          </div>
        </div>
        <p className="text-center text-gray-500">
          Personal Portfolio site of Barshon Chowdhury
        </p>
        <p className="text-center text-gray-500 mx-5">
          © All credit goes to Barshon Chowdhury | Copyright 2024 <br /> Design by-
          Barshon Chowdhury
        </p>
      </div>
    );
};

export default Footer;