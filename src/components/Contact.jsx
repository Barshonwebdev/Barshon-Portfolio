import  { useRef } from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Contact = ({id}) => {
    const form=useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs
          .sendForm(
            "service_fpt579u",
            "template_6bdnpoq",
            form.current,
            "dNYooxwW-OfqItTMX"
          )
          .then(
            (result) => {
              console.log(result.text);
              if(result.text=='OK'){
                Swal.fire("Mail Sent!");
                e.target.reset();
              }
            },
            (error) => {
              console.log(error.text);
            }
          );
    }
    return (
      <div id={id} className="">
        <div>
          <h2 className="text-3xl text-center mt-12 mb-2 font-semibold">
            Contact Me
          </h2>

          <div className=" bg-slate-900 bg-opacity-30  py-10 mx-5 px-5 lg:mx-52 my-5 rounded-lg flex flex-col md:flex-row justify-around items-center space-y-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col items-center space-y-6"
            >
              <div className="ml-10">
                <MdOutlineMail className="text-7xl"></MdOutlineMail>
              </div>

              <div className="flex space-x-3 items-center">
                <label>
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Your Name"
                  name="from_name"
                  required
                  className="bg-white p-2 text-black rounded"
                  type="text"
                />
              </div>
              <div className="flex space-x-3 items-center">
                <label>
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="bg-white p-2 text-black rounded"
                  type="email"
                />
              </div>
              <div className="flex space-x-3 items-center">
                <label>Subject</label>
                <input
                  className="bg-white p-2  text-black rounded"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="flex space-x-1  ">
                <label className="md:ml-12 ml-3">
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  className="bg-white p-1  text-black rounded"
                  required
                  name="message"
                  id=""
                  cols="23"
                  rows="7"
                  placeholder="Enter your mail content"
                ></textarea>
              </div>

              <div>
                <button className="zoom hover:bg-green-800 btn btn-sm rounded-lg btn-neutral">
                  <input type="submit" value={"Send"} />
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