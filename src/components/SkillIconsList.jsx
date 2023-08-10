import { SkillIconObjects } from "../assets";

export const SkillIconsList = () => {
  return (
    <div className="w-full flex justify-center align-center gap-8">
        {SkillIconObjects.map((skillIcon) => (
          <img src={skillIcon.image} alt={`Skill: ${skillIcon.alt}`} key={skillIcon.name} className="w-12" />
        ))}
    </div>
  );
}
 
export default SkillIconsList;