import { Slide } from 'react-awesome-reveal';
import project1img from './../assets/project1snap.JPG'
import project2img from './../assets/project2snap.JPG'
import project3img from './../assets/project3snap.JPG'

const Projects = ({id}) => {
    return (
      <Slide direction="right">
        <div id={id} className="my-16">
          <h2 className="text-center text-3xl font-semibold">
            Personal Projects
          </h2>
          <div className="my-10 mx-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-zoom rounded-xl card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img src={project1img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
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
                    <button className="btn zoom btn-info">Live Site</button>
                  </a>
                  <button className="btn zoom btn-neutral">Details</button>
                </div>
              </div>
            </div>
            <div className="card-zoom rounded-xl card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img src={project2img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Premium Dine</h2>
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
                    <button className="btn zoom btn-info">Live Site</button>
                  </a>
                  <button className="btn zoom btn-neutral">Details</button>
                </div>
              </div>
            </div>
            <div className="card-zoom rounded-xl card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img src={project3img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
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
                    <button className="btn zoom btn-info">Live Site</button>
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