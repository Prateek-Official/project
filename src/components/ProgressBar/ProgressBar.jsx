import "../../styles/ProgressBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(width);
    const timer = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          prev = prev + 1;
        } else {
          clearInterval(timer);
        }
        return prev;
      });
    }, 300);
  }, []);

  return (
    <div className="progress-bar-container">
      <Link to="/">Back to home</Link>
      <h1 className="progress-bar-heading">Progress Bar</h1>

      <div className="progress-div">
        <div className="progress-bar" style={{ width: `${width}%` }}></div>
        <p className={"progress-value " + (width >= 53 ? "color" : "")}>
          {width}%
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
