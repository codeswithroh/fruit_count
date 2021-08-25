import React, { useState } from "react";
import "../../styles/Questions.css";
import { Link } from "react-router-dom";
import Apple from "../../assets/apple.svg";
import Banana from "../../assets/banana.svg";

export default function Question_2() {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [failure2, setFailure2] = useState(false);

  return (
    <div className="question-container">
      <div className="question-number">
        <p>Level 2: Question 2</p>
      </div>
      <div className="question-content">
        <div className="question-header">
          <h1>Count the total number of fruits?</h1>
        </div>
        <div className="question-question">
          <div className="question-image">
            <img src={Banana} alt="apple" />
          </div>
          <div className="question-image">
            <img src={Apple} alt="apple" />
          </div>
          <div className="question-addition">
            <h1>➕</h1>
          </div>
          <div className="question-image">
            <img src={Banana} alt="apple" />
          </div>
          <div className="question-image">
            <img src={Apple} alt="apple" />
          </div>
        </div>
        <div className="question-options">
          <button onClick={() => setSuccess(true)}>4</button>
          <button onClick={() => setFailure(true)}>8</button>
          <button onClick={() => setFailure2(true)}>1</button>
        </div>
      </div>
      {success ? (
        <>
          <div className="question-background"></div>
          <div className="success-content">
            <img
              style={{ width: "6em", height: "6em" }}
              src="https://www.animoticons.com/files/emotions/happy-smiley-faces/85.gif"
              alt="success"
            />
            <div>
              <h2>Congratulations</h2>
              <p>on finishing the game</p>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              className="next-question"
              to="/level"
            >
              Go to dashboard
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
      {failure ? (
        <>
          <div className="question-background"></div>
          <div className="success-content failure">
            <img
              style={{ width: "6em", height: "6em" }}
              src="https://www.animoticons.com/files/emotions/sad-smiley-faces/28.gif"
              alt="success"
            />
            <div>
              <h2>Oops!</h2>
              <p>you selected the wrong answer</p>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              className="next-question try-again"
              onClick={() => setFailure(false)}
            >
              Try Again
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
      {failure2 ? (
        <>
          <div className="question-background"></div>
          <div className="success-content failure">
            <img
              style={{ width: "6em", height: "6em" }}
              src="https://www.animoticons.com/files/emotions/sad-smiley-faces/28.gif"
              alt="success"
            />
            <div>
              <h2>Oops!</h2>
              <p>you selected the wrong answer</p>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              className="next-question try-again"
              onClick={() => setFailure2(false)}
            >
              Try Again
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
