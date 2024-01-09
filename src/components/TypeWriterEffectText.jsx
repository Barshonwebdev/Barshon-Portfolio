import { TypeAnimation } from "react-type-animation";

const TypeWriterEffectText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front End Web Developer",
        1000,
        "React Developer",
        1000,
        "MERN Developer",
        1000,
        "JavaScript Developer",
        1000,
        "Junior Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-2xl lg:text-4xl"
    />
  );
};

export default TypeWriterEffectText;