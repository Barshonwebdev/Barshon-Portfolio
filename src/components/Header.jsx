import React from 'react';
import { FaGithub } from "react-icons/fa";
import ThemeToggler from './themeToggler';

const Header = () => {
    return (
      <div>
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
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Skills</a>
                </li>
                <li>
                  <a>Resume</a>
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
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Resume</a>
              </li>
              <li>
                <a>Contact</a>
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
    );
};

export default Header;