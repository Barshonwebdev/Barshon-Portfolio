import { FaComputer } from "react-icons/fa6";
import propic from '../assets/35052794_1797074400376044_5098867496002256896_n-removebg-preview.png'
import TypeWriterAnimation from "./TypeWriterAnimation";
import { Slide } from "react-awesome-reveal";

const Home = () => {
    return (
      <div className="flex flex-col md:flex-row">
        <Slide direction="left">
          <div className="flex flex-col justify-center items-center mx-10 mt-32 mb-10 lg:m-44">
            <FaComputer className="text-9xl"></FaComputer>
            <h2 className="lg:text-4xl text-2xl font-bold">
              Barshon Chowdhury
            </h2>
            <h3>
              <TypeWriterAnimation></TypeWriterAnimation>
            </h3>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="ml-12 ">
            <img src={propic} alt="" />
          </div>
        </Slide>
      </div>
    );
};

export default Home;