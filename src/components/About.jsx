import React from 'react';
import aboutimg from '../assets/aboutimg-PhotoRoom-removebg-preview.png'
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Flip, Slide } from 'react-awesome-reveal';
import resumePDF from '../assets/Barshon Chowdhury- Frontend Web Developer Resume.pdf';
const About = ({id, resumeID}) => {
    return (
      <div id={id} className="p-10 lg:p-20 bg-stone-900 flex  text-white">
        <div className="flex justify-between items-center lg:space-x-56  flex-col lg:flex-row">
          <Slide direction="left">
            <div className="w-full">
              <div className="">
                <h3 className="uppercase text-xl">About me</h3>
                <p className="mt-3 mb-7 text-gray-400">
                  Currently a fresh CSE graduate, have worked on several
                  personal webapp projects and eager to do more. Would like to
                  participate on projects of reputed companies. Proficient in
                  ReactJs, ExpressJs, NodeJs and Mongodb. Focused, fast learner
                  and curious individual.{" "}
                </p>
              </div>
              <div className="">
                <div className="space-y-2">
                  <h3 className="uppercase text-xl">Contact details</h3>
                  <p className="text-gray-400">Barshon Chowdhury</p>
                  <p className="text-gray-400">
                    <FaMapMarkerAlt className="inline"></FaMapMarkerAlt> Japan
                    Garden City,Ring Road, Mohammadpur
                  </p>
                  <p className="text-gray-400">Dhaka, Bangladesh</p>
                  <p className="text-gray-400">
                    <FaPhone className="inline"></FaPhone> +880-153-414-0507
                  </p>
                  <p className="text-gray-400">
                    <IoMail className="inline"></IoMail> barshonweb@gmail.com
                  </p>
                </div>
                <div id={resumeID} className="flex justify-center lg:justify-normal mt-5">
                  <a href={resumePDF} download="Barshon Chowdhury Resume (Frontend Developer)" target='_blank' rel='noreferrer'>
                    <button className="btn ">
                      <FaDownload className="text-xl"></FaDownload>Download
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Slide>
          <Flip direction='vertical'>
            <div className="lg:w-full my-10 ">
              <div className="w-64 h-64 rounded-full border-2 bg-gray-900  ">
                <img className=" mx-auto my-6 " src={aboutimg} alt="" />
              </div>
            </div>
          </Flip>
        </div>
      </div>
    );
};

export default About;