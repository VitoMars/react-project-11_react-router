import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h4>Page Not Found</h4>
      <button className="btn btn-success mt-4" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
