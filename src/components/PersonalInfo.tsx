import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { data } from "../data";
import "./personalInfo.css";

const PersonalInfo = () => {
  const { personalInfo } = data;

  return (
    <div className="personal-info">
      <h1>{personalInfo.name}</h1>
      <div className="personal-info-item">
        <FaMapMarkerAlt className="icon" />
        <p>{personalInfo.address}</p>
      </div>
      
      <div className="personal-info-item">
        <FaPhone className="icon" />
        <p>
          <a href={`tel:${personalInfo.mobile}`}>{personalInfo.mobile}</a>
        </p>
      </div>

      <div className="personal-info-item">
        <FaEnvelope className="icon" />
        <p>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </p>
      </div>

      <div className="personal-info-item">
        <FaGithub className="icon" />
        <p>
          <a href="https://github.com/choy2023" target="_blank" rel="noopener noreferrer">
            {personalInfo.github}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;