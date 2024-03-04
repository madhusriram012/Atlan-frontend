import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "react-bootstrap-icons";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <p>
        We are working on more features and soon you will be able to access
        it!!!
      </p>

      <button
        className="notfound-btn"
        onClick={navigateToHome}
        style={{ background: "#97b9fc" }}
      >
        <ArrowLeftCircle size={25} style={{ marginRight: "8px" }} />
         Return to HomePage
      </button>
    </div>
  );
};

export default NotFoundPage;
