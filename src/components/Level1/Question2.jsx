import React, { useState } from "react";
import "../../styles/Questions.css";
import { Link } from "react-router-dom";
import Apple from "../../assets/apple.svg";

export default function Question2() {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  return (
    <div className="question-container">
      <div className="question-number">
        <p>Level 1: Question 2</p>
      </div>
      <div className="question-content">
        <div className="question-header">
          <h1>Count the total number of fruits?</h1>
        </div>
        <div className="question-question">
          <div className="question-image">
            <img src={Apple} alt="apple" />
          </div>
          <div className="question-image">
            <img src={Apple} alt="apple" />
          </div>
          <div className="question-addition">
            <h1>➕</h1>
          </div>
          <div className="question-image">
            <img src={Apple} alt="apple" />
          </div>
        </div>
        <div className="question-options">
          <button onClick={() => setFailure(true)}>2</button>
          <button onClick={() => setSuccess(true)}>3</button>
        </div>
      </div>
      {success ? (
        <>
          <div className="question-background"></div>
          <div className="success-content">
            <img
              style={{ width: "6em", height: "6em" }}
              src="https://www.animoticons.com/files/emotions/happy-smiley-faces/95.gif"
              alt="success"
            />
            <div>
              <h2>Congratulations</h2>
              <p>your answer is absolutely correct</p>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              className="next-question"
              to="/level2/question1"
            >
              Go to level 2
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
    </div>
  );
}
