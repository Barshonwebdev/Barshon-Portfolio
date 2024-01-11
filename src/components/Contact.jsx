import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

const Contact = ({id}) => {
    return (
      <div id={id} className="">
        <div>
          <h2 className="text-3xl text-center mt-12 mb-2 font-semibold">
            Contact Me
          </h2>
          <div className="flex justify-center">
            <MdOutlineMail className="text-7xl"></MdOutlineMail>
          </div>
          <div className=" bg-slate-900 bg-opacity-30 lg:py-28 py-10 mx-5 px-5 lg:mx-96 my-5 rounded-lg flex flex-col md:flex-row justify-around items-center">
            <form className="w-full">s</form>
            <div className="space-y-2 w-full text-sm text-center ">
              <h3 className=" text-lg font-bold">Address & Phone</h3>
              <p className="text-gray-400">Barshon Chowdhury</p>
              <p className="text-gray-400">
                <FaMapMarkerAlt className="inline"></FaMapMarkerAlt> Japan
                Garden City,Ring Road, Mohammadpur
              </p>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
              <p className="text-gray-400">
                <FaPhone className="inline"></FaPhone> +880-153-414-0507
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;