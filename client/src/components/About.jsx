
import "../styles/About.css";
import aboutImg from "../assets/sdoc2.png";
import { useNavigate } from "react-router";

export const About = () => {

  const navigate = useNavigate();
  return (
    <div className="about-section">
      <div className="about-cont-1">
        <h1>About Documents</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolor
          explicabo hic, molestiae minus at numquam quisquam error libero
          eveniet reiciendis accusamus aliquid illo laudantium recusandae
          quaerat minima incidunt necessitatibus! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Doloremque, sunt accusamus culpa qui
          asperiores ut fuga corrupti atque nam magnam eveniet, enim nisi
          maiores saepe recusandae quisquam earum at voluptates!
        </p>
      </div>
      <div className="about-cont-2">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
};