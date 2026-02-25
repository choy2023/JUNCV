import { data } from "../data";
import "./leftrightformat.css";

const Experience = () => {
  return (
    <div className="module">
      <h2>EXPERIENCE</h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="module-item">
          <div className="module-left">
            <div className="module-container">
              <p style={{ fontWeight: "bold", color: "#333" }}>
                {exp.role} <span style={{ fontWeight: "normal", color: "#666" }}>at {exp.company}</span>
              </p>
              {exp.details && (
                <ul>
                  {exp.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="module-right">
            <p>{exp.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;