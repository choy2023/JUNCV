import { data } from "../data";
import "./leftrightformat.css";

const Education = () => {
  return (
    <div className="module">
      <h2>EDUCATION</h2>
      {data.education.map((ed) => (
        <div key={ed.degree} className="module-item">
          <div className="module-left">
            <div className="module-container">
              <p>{ed.degree}</p>
              {ed.details && (
                <ul>
                  {ed.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="module-right">
            <p>{ed.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
