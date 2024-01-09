import { FaComputer } from "react-icons/fa6";
import TypeWriterEffectText from "./typeWriterEffectText";

const Home = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mx-10 my-32 lg:m-44'>
                <FaComputer className='text-9xl'></FaComputer>
                <h2 className='lg:text-4xl text-2xl font-bold'>Barshon Chowdhury</h2>
                <h3><TypeWriterEffectText></TypeWriterEffectText></h3>
            </div>
        </div>
    );
};

export default Home;