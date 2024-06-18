import ProjectCard from "../common/ProjectCard";

const Projects = () => {
  return (
    <section className="mt-20 flex flex-col justify-center items-center">
      <h2 className="heading-2">
        Projects
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 lg:mt-14">
        <ProjectCard
          img={"https://harris-johnsen.netlify.app/assets/viberr-CkAOh8kN.png"}
          name={"Viberr"}
          desc={"Streaming App"}
          link={"https://github.com/Ade-mir/react-js-personal-portfolio"}
        />
        <ProjectCard
          img={
            "https://harris-johnsen.netlify.app/assets/fresh-burger-oSv8qGSl.png"
          }
          name={"Fresh Burger"}
          desc={"Restaurant Shop"}
          link={"https://github.com/Ade-mir/react-js-personal-portfolio"}
        />
        <ProjectCard
          img={
            "https://harris-johnsen.netlify.app/assets/hipsster-v_4wOLgS.png"
          }
          name={"Hipsster"}
          desc={"Glasses Shop"}
          link={"https://github.com/Ade-mir/react-js-personal-portfolio"}
          />
        <ProjectCard
          img={"https://harris-johnsen.netlify.app/assets/fitlift-z61xELL6.png"}
          name={"FitLift"}
          desc={"Fitness App"}
          link={"https://github.com/Ade-mir/react-js-personal-portfolio"}
        />
      </div>
    </section>
  );
};

export default Projects;
