import { Slide } from 'react-awesome-reveal';
import project1img from './../assets/project1snap.JPG'
import project2img from './../assets/project2snap.JPG'
import project3img from './../assets/project3snap.JPG'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

import p1s1img from '../assets/summertime levelup snaps/summertime-levelup.web.app_home.png'
import p1s2img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC).png'
import p1s3img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (1).png'
import p1s4img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (2).png'
import p1s5img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (3).png'
import p1s6img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (4).png'
import p1s7img from '../assets/summertime levelup snaps/summertime-levelup.web.app_(PC) (5).png'
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
                    <button className="btn zoom btn-success">
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
                            <p className='mt-3'>
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
                          <div className="w-full">
                            <h4 className="text-lg text-center">Techs Used</h4>
                          </div>
                        </div>
                        <div className=" my-4 flex justify-center">
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
                    <button className="btn zoom btn-success">
                      Webapp{" "}
                      <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>{" "}
                    </button>
                  </a>
                  <button className="btn zoom btn-neutral">Details</button>
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
                    <button className="btn zoom btn-success">
                      Webapp{" "}
                      <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>{" "}
                    </button>
                  </a>
                  <button className="btn zoom btn-neutral">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
};

export default Projects;