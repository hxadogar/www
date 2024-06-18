import { GiCheckMark } from "react-icons/gi";

const SkillMark = ({ label }) => {
  return (
    <span className="flex gap-2 items-center">
      <GiCheckMark size={20} />
      <p className="text-lg tracking-wider font-light">{label}</p>
    </span>
  );
};

export default SkillMark;
