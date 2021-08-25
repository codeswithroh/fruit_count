import React, { useState } from "react";
import "../styles/Level.css";
import { Link } from "react-router-dom";

export default function Level() {
  const [level1, setLevel1] = useState(false);
  const [level2, setLevel2] = useState(false);
  const questions = ["1", "2"];
  const level1_link = ["/level1/question1", "/level1/question2"];
  const level2_link = ["/level2/question1", "/level2/question2"];
  return (
    <div className="level-container">
      <div className="level-content">
        <div onClick={() => setLevel1(true)} className="level-card">
          <h2>Level</h2>
          <h1>1</h1>
        </div>
        <div onClick={() => setLevel2(true)} className="level-card">
          <h2>Level</h2>
          <h1>2</h1>
        </div>
        {level1 ? (
          <>
            <div className="question-background"></div>
            <div className="level-questions">
              <div>
                <h2>Level 1</h2>
              </div>
              <div className="questions">
                {questions.map((question, index) => {
                  return (
                    <Link
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={level1_link[index]}
                    >
                      <div className="question-card">
                        <h2>Question {question}</h2>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {level2 ? (
          <>
            <div className="question-background"></div>
            <div className="level-questions">
              <div>
                <h2>Level 2</h2>
              </div>
              <div className="questions">
                {questions.map((question, index) => {
                  return (
                    <Link
                      style={{ textDecoration: "none" }}
                      key={index}
                      to={level2_link[index]}
                    >
                      <div className="question-card">
                        <h2>Question {question}</h2>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
