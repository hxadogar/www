import { FaSquareXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

import HamzaImage from "../assets/Hamza.png";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center h-screen gap-6 lg:gap-56">
      <div className="flex flex-col justify-center items-center w-[350px] text-center">
        <h1 className="uppercase text-3xl lg:text-4xl font-bold font-Rubik">
          Muhammad <br /> Hamza
        </h1>
        <h1 className="uppercase text-xl lg:text-2xl font-bold font-Rubik mt-4 w-full">
          ⭐ Full Stack Developer
        </h1>

        <div className="flex flex-row space-x-8 mt-4">
          <a href="https://x.com/hxadogar">
            <FaSquareXTwitter size={30} />
          </a>
          <a href="https://github.com/hxadogar">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/hxadogar/">
            <FaLinkedin size={30} />
          </a>
        </div>

        <p className="mt-4 text-xl font-extralight w-[24ch] tracking-wider max-sm:leading-tight">
        specialize in advanced JS, React.js, and Next.js
        </p>

        {/* <Button
          label={"Resume"}
          link={"https://harris-johnsen.netlify.app/assets/cv-D4NMZrO6.pdf"}
          className="mt-4 hover:hover"
        /> */}
      </div>
      <div>
        <img
          src={HamzaImage}
          alt="Hamza"
          className="max-w-[200px] xl:max-w-[350px]"
        />
      </div>
    </section>
  );
};

export default Hero;
