import { Slide } from 'react-awesome-reveal';

// project images 
import project1img from './../assets/project1snap.JPG'
import project2img from './../assets/project2snap.JPG'
import project3img from './../assets/project3snap.JPG'

// icons 
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import {
  FirebasePlain,
  MongodbOriginal,
  TailwindcssPlain,
  ReactOriginal,
  NodejsOriginal,
  ExpressOriginal,
} from "devicons-react";

// carousal images 
import p1s1img from '../assets/summertime levelup snaps/summertime-levelup.web.app_home.png'
import p1s2img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC).png'
import p1s3img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (1).png'
import p1s4img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (2).png'
import p1s5img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (3).png'
import p1s6img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (4).png'
import p1s7img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (5).png'

import p2s1img from '../assets/premium dine snaps/premium-dine.web.app_(PC).png'
import p2s2img from '../assets/premium dine snaps/premium-dine.web.app_(PC) (2).png'
import p2s3img from '../assets/premium dine snaps/premium-dine.web.app_(PC) (3).png'
import p2s4img from '../assets/premium dine snaps/premium-dine.web.app_menu(PC).png'
import p2s5img from '../assets/premium dine snaps/premium-dine.web.app_menu(PC) (3).png'
import p2s6img from '../assets/premium dine snaps/premium-dine.web.app_menu(PC) (4).png'
import p2s7img from '../assets/premium dine snaps/premium-dine.web.app_menu(PC) (5).png'

import p3s1img from '../assets/Marvellous toys snaps/marvellous-toys.web.app_(PC).png'
import p3s2img from '../assets/Marvellous toys snaps/marvellous-toys.web.app_(PC) (1).png'
import p3s3img from '../assets/Marvellous toys snaps/marvellous-toys.web.app_(PC) (2).png'
import p3s4img from '../assets/Marvellous toys snaps/marvellous-toys.web.app_(PC) (3).png'
import p3s5img from '../assets/Marvellous toys snaps/marvellous-toys.web.app_(PC) (4).png'
import p3s6img from '../assets/Marvellous toys snaps/marvellous-toys.web.app_(PC) (5).png'
import p3s7img from '../assets/Marvellous toys snaps/marvellous-toys.web.app_(PC) (6).png'

const Projects = ({id}) => {
    return (
      <Slide direction="right">
        <div id={id} className="my-16">
          <h2 className="text-center text-3xl font-semibold">
            Personal Projects
          </h2>
          <div className="my-10 mx-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* project 1  */}
            <div className=" card-zoom rounded-lg card border-2 border-opacity-10 border-gray-500 card-compact w-full bg-base-100 shadow-2xl">
              <figure>
                <img src={project1img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">
                  Summertime Levelup!
                </h2>
                <p className="italic">
                  Martial Arts summer training camp responsive webapp with full
                  frontend and backend functionalities (MERN)
                </p>
                <div className="card-actions justify-between">
                  <a
                    href="https://summertime-levelup.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn zoom btn-neutral">
                      Webapp{" "}
                      <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>{" "}
                    </button>
                  </a>
                  <button
                    onClick={() =>
                      document.getElementById("project1_modal").showModal()
                    }
                    className="btn zoom btn-neutral"
                  >
                    Details
                  </button>
                  {/* modal start */}
                  <dialog id="project1_modal" className="modal">
                    <div className="modal-box h-screen  max-w-5xl  ">
                      <h3 className="text-center text-3xl -mt-4 mb-2">
                        Summertime Levelup
                      </h3>
                      <div className="max-w-2xl mx-auto">
                        <div className="carousel border-2 border-opacity-25  w-full rounded">
                          <div
                            id="slide1"
                            className="carousel-item relative w-full"
                          >
                            <img src={p1s1img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#slide7"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#slide2"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide2"
                            className="carousel-item relative w-full"
                          >
                            <img src={p1s2img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#slide1"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#slide3"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide3"
                            className="carousel-item relative w-full"
                          >
                            <img src={p1s3img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#slide2"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#slide4"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide4"
                            className="carousel-item relative w-full"
                          >
                            <img src={p1s4img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#slide3"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#slide5"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide5"
                            className="carousel-item relative w-full"
                          >
                            <img src={p1s5img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#slide4"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#slide6"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide6"
                            className="carousel-item relative w-full"
                          >
                            <img src={p1s6img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#slide5"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#slide7"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide7"
                            className="carousel-item relative w-full"
                          >
                            <img src={p1s7img} className="w-full" />
                            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#slide6"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#slide1"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-3 w-full flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row justify-around">
                          <div className="w-full">
                            <h4 className="text-lg text-center">
                              Core Features
                            </h4>
                            <p className="mt-3">
                              • Complete full stack website frontend and backend
                              functionalities <br />• Private Routing
                              implemented <br />• Three roles for account users
                              (student, instructor and admin) and separate
                              functionalities <br />• Classes and Users
                              management functionality for admins <br /> • Class
                              approve/deny functionality of admins <br />•
                              Selection, payment and enroll class functionality
                              for students <br />• Creating classes
                              functionality for instructors
                            </p>
                          </div>
                          <div className="w-full ">
                            <h4 className="text-lg text-center ">Techs Used</h4>
                            <div className="mt-3 grid grid-cols-4 gap-5 md:ml-10">
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <ReactOriginal size={35}></ReactOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <ExpressOriginal size={35}></ExpressOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <NodejsOriginal size={35}></NodejsOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <MongodbOriginal size={35}></MongodbOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <FirebasePlain size={35}></FirebasePlain>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <TailwindcssPlain size={35}></TailwindcssPlain>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" my-9 flex justify-center">
                          <a
                            href="https://summertime-levelup.web.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn btn-neutral">
                              <FaLink></FaLink> Visit App
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="modal-action bottom-2 relative right-2">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  {/* modal end  */}
                </div>
              </div>
            </div>

            {/* project 2  */}
            <div className=" card-zoom rounded-lg border-opacity-10 card card-compact border-2 border-gray-500 w-full bg-base-100 shadow-2xl">
              <figure>
                <img src={project2img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">Premium Dine</h2>
                <p className="italic">
                  Full Stack (MERN) responsive restaurant webapp with attractive
                  user interface and functionalities{" "}
                </p>
                <div className="card-actions justify-between">
                  <a
                    href="https://premium-dine.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn zoom btn-neutral">
                      Webapp{" "}
                      <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>{" "}
                    </button>
                  </a>
                  <button
                    onClick={() =>
                      document.getElementById("project2_modal").showModal()
                    }
                    className="btn zoom btn-neutral"
                  >
                    Details
                  </button>

                  {/* modal start  */}
                  <dialog id="project2_modal" className="modal">
                    <div className="modal-box h-screen  max-w-5xl  ">
                      <h3 className="text-center text-3xl -mt-4 mb-2">
                        Premium Dine
                      </h3>
                      <div className="max-w-2xl mx-auto">
                        <div className="carousel border-2 border-opacity-25  w-full rounded">
                          <div
                            id="p2slide1"
                            className="carousel-item relative w-full"
                          >
                            <img src={p2s1img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p2slide7"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p2slide2"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p2slide2"
                            className="carousel-item relative w-full"
                          >
                            <img src={p2s2img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p2slide1"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p2slide3"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p2slide3"
                            className="carousel-item relative w-full"
                          >
                            <img src={p2s3img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p2slide2"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p2slide4"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p2slide4"
                            className="carousel-item relative w-full"
                          >
                            <img src={p2s4img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p2slide3"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p2slide5"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p2slide5"
                            className="carousel-item relative w-full"
                          >
                            <img src={p2s5img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p2slide4"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p2slide6"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p2slide6"
                            className="carousel-item relative w-full"
                          >
                            <img src={p2s6img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p2slide5"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p2slide7"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p2slide7"
                            className="carousel-item relative w-full"
                          >
                            <img src={p2s7img} className="w-full" />
                            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p2slide6"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p2slide1"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-3 w-full flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row justify-around">
                          <div className="w-full">
                            <h4 className="text-lg text-center">
                              Core Features
                            </h4>
                            <p className="mt-3">
                              • Restaurant website with user authentication
                              system <br />• Front-end and Back-end
                              functionalities <br />• User and Admin- two types
                              of user roles <br />• Food item ordering and
                              payment functionality for users <br />• Menu Item
                              management for admins
                            </p>
                          </div>
                          <div className="w-full ">
                            <h4 className="text-lg text-center ">Techs Used</h4>
                            <div className="mt-3 grid grid-cols-4 gap-5 md:ml-10">
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <ReactOriginal size={35}></ReactOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <ExpressOriginal size={35}></ExpressOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <NodejsOriginal size={35}></NodejsOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <MongodbOriginal size={35}></MongodbOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <FirebasePlain size={35}></FirebasePlain>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <TailwindcssPlain size={35}></TailwindcssPlain>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" my-9 flex justify-center">
                          <a
                            href="https://premium-dine.web.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn btn-neutral">
                              <FaLink></FaLink> Visit App
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="modal-action bottom-2 relative right-2">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  {/* modal end  */}
                </div>
              </div>
            </div>

            {/* project 3  */}
            <div className=" card-zoom rounded-lg border-opacity-10 card border-2 border-gray-500 card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img src={project3img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">
                  Marvellous Toys
                </h2>
                <p className="italic">
                  A full stack (MERN) responsive toy marketplace webapp which is
                  targeted towards action figure enthusiasts and sellers
                </p>
                <div className="card-actions justify-between">
                  <a
                    href="https://marvellous-toys.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn zoom btn-neutral">
                      Webapp{" "}
                      <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>{" "}
                    </button>
                  </a>
                  <button
                    onClick={() =>
                      document.getElementById("project3_modal").showModal()
                    }
                    className="btn zoom btn-neutral"
                  >
                    Details
                  </button>
                  <dialog id="project3_modal" className="modal">
                    <div className="modal-box h-screen  max-w-5xl  ">
                      <h3 className="text-center text-3xl -mt-4 mb-2">
                        Marvellous Toys
                      </h3>
                      <div className="max-w-2xl mx-auto">
                        <div className="carousel border-2 border-opacity-25  w-full rounded">
                          <div
                            id="p3slide1"
                            className="carousel-item relative w-full"
                          >
                            <img src={p3s7img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p3slide7"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p3slide2"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p3slide2"
                            className="carousel-item relative w-full"
                          >
                            <img src={p3s2img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p3slide1"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p3slide3"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p3slide3"
                            className="carousel-item relative w-full"
                          >
                            <img src={p3s3img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p3slide2"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p3slide4"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p3slide4"
                            className="carousel-item relative w-full"
                          >
                            <img src={p3s4img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p3slide3"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p3slide5"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p3slide5"
                            className="carousel-item relative w-full"
                          >
                            <img src={p3s5img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p3slide4"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p3slide6"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p3slide6"
                            className="carousel-item relative w-full"
                          >
                            <img src={p3s6img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p3slide5"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p3slide7"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="p3slide7"
                            className="carousel-item relative w-full"
                          >
                            <img src={p3s1img} className="w-full" />
                            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 bottom-0 md:bottom-32">
                              <a
                                href="#p3slide6"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href="#p3slide1"
                                className="btn btn-xs md:btn-md btn-circle"
                              >
                                ❯
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-3 w-full flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row justify-around">
                          <div className="w-full">
                            <h4 className="text-lg text-center">
                              Core Features
                            </h4>
                            <p className="mt-3">
                              • Toy marketplace webapp for sellers <br />•
                              Firebase authentication system for users <br />•
                              Detailed products (action figure) with necessary
                              informations for users to explore <br />• Private
                              Routing Implemented <br />• Categorized products
                              and corresponding data loading
                            </p>
                          </div>
                          <div className="w-full ">
                            <h4 className="text-lg text-center ">Techs Used</h4>
                            <div className="mt-3 grid grid-cols-4 gap-5 md:ml-10">
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <ReactOriginal size={35}></ReactOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <ExpressOriginal size={35}></ExpressOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <NodejsOriginal size={35}></NodejsOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <MongodbOriginal size={35}></MongodbOriginal>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3 rounded-lg ">
                                <FirebasePlain size={35}></FirebasePlain>
                              </div>
                              <div className="bg-gray-400 bg-opacity-20 p-3  rounded-lg ">
                                <TailwindcssPlain size={35}></TailwindcssPlain>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" my-9 flex justify-center">
                          <a
                            href="https://marvellous-toys.web.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn btn-neutral">
                              <FaLink></FaLink> Visit App
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="modal-action bottom-2 relative right-2">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
};

export default Projects;