import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h4>Sono la pagina di About</h4>
      <button className="btn btn-success mt-4" onClick={() => navigate(-1)}>
        Redirect
      </button>
    </div>
  );
};

export default About;
