import React from "react";
import "./error404.scss";
import { useNavigate } from "react-router-dom";

const Error404Page: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="box">
      <div className="box__ghost">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="symbol"></div>
        ))}
        <div className="box__ghost-container">
          <div className="box__ghost-eyes">
            <div className="box__eye-left"></div>
            <div className="box__eye-right"></div>
          </div>
          <div className="box__ghost-bottom">
            {[...Array(5)].map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
        </div>
        <div className="box__ghost-shadow"></div>
      </div>

      <div className="box__description">
        <div className="box__description-container">
          <div className="box__description-title">Whoops!</div>
          <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
        </div>

        <div className="box__button" onClick={() => navigate("/")}>
          Go back
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
