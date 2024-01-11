import EachSkill from "./EachSkill";
import {
  FirebasePlain,
  GitOriginal,
  JavascriptOriginal,
  MongodbOriginal,
  Css3Original,
  TailwindcssPlain,
  ReactOriginal,
  NodejsOriginal,
  MaterialuiOriginal,
  VscodeOriginal,
  Html5Original,
  BootstrapPlain,
} from "devicons-react";
import  {  Fade } from "react-awesome-reveal";
import { FaGithub } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";


const Skills = ({ id }) => {
  return (
    <Fade direction="down">
      <div id={id} className="  mt-10">
        <h4 className="text-3xl font-semibold text-center">Skills</h4>
        <div className="my-10 mx-10 gap-5 grid md:grid-cols-5 lg:grid-cols-7 grid-cols-3 lg:mx-48">
          <EachSkill name={"HTML 5"}>
            <Html5Original size={30}></Html5Original>
          </EachSkill>
          <EachSkill name={"CSS 3"}>
            <Css3Original size={30}></Css3Original>
          </EachSkill>
          <EachSkill name={"JavaScript"}>
            <JavascriptOriginal size={30}></JavascriptOriginal>
          </EachSkill>
          <EachSkill name={"BootStrap"}>
            <BootstrapPlain size={30}></BootstrapPlain>
          </EachSkill>
          <EachSkill name={"TailWindCSS"}>
            <TailwindcssPlain size={30}></TailwindcssPlain>
          </EachSkill>
          <EachSkill name={"ReactJs"}>
            <ReactOriginal size={30}></ReactOriginal>
          </EachSkill>
          <EachSkill name={"Material UI"}>
            <MaterialuiOriginal size={30}></MaterialuiOriginal>
          </EachSkill>
          <EachSkill name={"Firebase"}>
            <FirebasePlain size={30}></FirebasePlain>
          </EachSkill>
          <EachSkill name={"NodeJs"}>
            <NodejsOriginal size={30}></NodejsOriginal>
          </EachSkill>
          <EachSkill name={"ExpressJs"}>
            <SiExpress size={30}></SiExpress>
          </EachSkill>
          <EachSkill name={"MongoDB"}>
            <MongodbOriginal size={30}></MongodbOriginal>
          </EachSkill>
          <EachSkill name={"Git"}>
            <GitOriginal size={30}></GitOriginal>
          </EachSkill>
          <EachSkill name={"GitHub"}>
            <FaGithub size={30}></FaGithub>
          </EachSkill>
          <EachSkill name={"VSCode"}>
            <VscodeOriginal size={30}></VscodeOriginal>
          </EachSkill>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
