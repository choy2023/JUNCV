import { data } from "../data";

const KeySkills = () => {
  const { hardSkills } = data.keySkills;

  const frontendSkills = hardSkills.frontend.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = hardSkills.backend.filter(
    (skill) => skill.category === "backend"
  );
  const serverSkills = hardSkills.server.filter(
    (skill) => skill.category === "server"
  );

  return (
    <div>
      <h2>KEY SKILLS & STRENGTHS or HIGHLIGHTS</h2>
      {data.keySkills.softSkills.map((skill, index) => (
        <div key={index}>
          <ul>
            <li>{skill}</li>
          </ul>
        </div>
      ))}

      <h4>Hard Skills</h4>
      <ul>
        <li>{frontendSkills.map((skill, index) => skill.name).join(", ")}</li>
        <li>{backendSkills.map((skill, index) => skill.name).join(", ")}</li>
        <li>{serverSkills.map((skill, index) => skill.name).join(", ")}</li>
      </ul>
    </div>
  );
};

export default KeySkills;
