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

          <div className=" bg-slate-900 bg-opacity-30  py-10 mx-5 px-5 lg:mx-52 my-5 rounded-lg flex flex-col md:flex-row justify-around items-center space-y-7">
            <form className="w-full flex flex-col items-center space-y-6">
              <div className="">
                <MdOutlineMail className="text-7xl"></MdOutlineMail>
              </div>

              <div className="flex space-x-3">
                <label>
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Your Name"
                  required
                  className="bg-white p-2 text-black rounded"
                  type="text"
                />
              </div>
              <div className="flex space-x-3">
                <label>
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Your Email"
                  required
                  className="bg-white p-2 text-black rounded"
                  type="email"
                />
              </div>
              <div className="flex space-x-3">
                <label>Subject</label>
                <input
                  className="bg-white p-2  text-black rounded"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="flex space-x-1 ">
                <label>
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  className="bg-white p-1  text-black rounded"
                  required
                  name=""
                  id=""
                  cols="26"
                  rows="5"
                  placeholder="Enter your mail content"
                ></textarea>
              </div>

              <div>
                <button className="zoom hover:bg-green-800 btn btn-sm rounded-lg btn-neutral">
                  Send
                </button>
              </div>
            </form>
            <div className="space-y-2 w-full text-sm text-center ">
              <h3 className=" text-lg font-bold">Address & Phone</h3>
              <p className="">Barshon Chowdhury</p>
              <p className="">
                <FaMapMarkerAlt className="inline"></FaMapMarkerAlt> Japan
                Garden City,Ring Road, Mohammadpur
              </p>
              <p className="">Dhaka, Bangladesh</p>
              <p className="">
                <FaPhone className="inline"></FaPhone> +880-153-414-0507
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;