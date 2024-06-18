import SkillMark from "../common/SkillMark";

const Skills = () => {
  return (
    <section className="mt-20 flex flex-col justify-center items-center">
      <h2 className="heading-2">Skills</h2>
      <div className="flex flex-wrap justify-center max-sm:gap-10 gap-4 md:gap-20 mt-8 lg:mt-14">
        <SkillMark label={"Html"} />
        <SkillMark label={"Css"} />
        <SkillMark label={"JavaScript"} />
        <SkillMark label={"TypeScript"} />
        <SkillMark label={"Node"} />
      </div>
      <hr className="w-96 my-8 max-sm:w-52"/>
      <div className="flex flex-wrap justify-center max-sm:gap-10 gap-4 md:gap-20 ">
        <SkillMark label={"React"} />
        <SkillMark label={"Angular"} />
        <SkillMark label={"Vue"} />
        <SkillMark label={"Tailwind CSS"} />
      </div>
      <hr className="w-96 my-8 max-sm:w-52"/>
      <div className="flex flex-wrap justify-center max-sm:gap-10 gap-4 md:gap-20 ">
        <SkillMark label={"Redux"} />
        <SkillMark label={"Webpack"} />
        <SkillMark label={"Git"} />
        <SkillMark label={"Jest"} />
        <SkillMark label={"Bootstrap"} />
      </div>
      
    </section>
  );
};

export default Skills;
