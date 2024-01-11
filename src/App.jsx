import About from "./components/About";
import Home from "./components/Home";
import { FaGithub } from "react-icons/fa";
import ThemeToggler from "./components/ThemeToggler";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div>
      {/* header part  */}
      <div className="sticky top-0 z-10">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <ThemeToggler></ThemeToggler>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#resume">Resume</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#home" className="text-lg">Home</a>
              </li>
              <li>
                <a href="#about" className="text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#resume" className="text-lg">Resume</a>
              </li>
              <li>
                <a href="#projects" className="text-lg">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-lg">Skills</a>
              </li>
              <li>
                <a className="text-lg">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Barshonwebdev"
              className="btn"
            >
              <FaGithub className="text-4xl"></FaGithub>
            </a>
          </div>
        </div>
      </div>

      {/* components  */}
      <Home id="home"></Home>
      <About resumeID="resume" id="about"></About>
      <Projects id='projects'></Projects>
      <Skills id="skills"></Skills>
    </div>
  );
};

export default App;

