import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  let { isDark } = useContext(ThemeContext);
  const arrays = [
    {
      question: "What is the color of apple?",
      answers: [
        { text: "blue", correct: false },
        { text: "white", correct: false },
        { text: "red", correct: true },
        { text: "yellow", correct: false },
      ],
      category: "Easy",
    },
    {
      question: "Choose short form of Hypertext Markup Language",
      answers: [
        { text: "HTML", correct: true },
        { text: "HMTL", correct: false },
        { text: "HLTM", correct: false },
        { text: "HTLM", correct: false },
      ],
      category: "Medium",
    },
    {
      question: "Choose short form of cascading style sheet",
      answers: [
        { text: "CTS", correct: false },
        { text: "CSC", correct: false },
        { text: "SCS", correct: false },
        { text: "CSS", correct: true },
      ],
      category: "Hard",
    },
  ];
  let [items, setItem] = useState(arrays);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [showScore, setShowScore] = useState(false);
  let [score, setScore] = useState(0);

  let handleAnsClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    let nextQ = currentQuestion + 1;
    if (nextQ < items.length) {
      setCurrentQuestion(nextQ);
    } else {
      setShowScore(true);
    }
  };

  let restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  // filter category
  let categories = [...new Set(arrays.map((arr) => arr.category))];
  const CatFilter = (category) => {
    let newItems = arrays.filter((arr) => arr.category === category);
    setItem(newItems);
  };
  return (
    <div className={` h-screen ${isDark ? "bg-black" : "bg-white"}  `}>
      <h2 className="mb-10 text-sky-500 pt-10 text-center font-serif text-4xl ">
        Quiz
      </h2>
      <div className="flex justify-center my-6">
        {categories.map((cat, i) => (
          <button
            onClick={() => {
              CatFilter(cat);
            }}
            key={i}
            className="bg-sky-400 hover:bg-sky-600 focus:bg-sky-600 text-white font-semibold p-3 mx-4 rounded-lg"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="max-w-[500px]  rounded-md shadow-lg bg-yellow-400 mx-auto px-6 py-2  ">
        {!!showScore ? (
          <div className="max-w-[500px] h-[70px] text-2xl text-center my-6  flex flex-col">
            You score {score} out of {items.length}
            <button
              className=" w-32 mx-auto mt-2 rounded-md py-2 text-white bg-slate-500 hover:bg-slate-600"
              onClick={restartGame}
            >
              Restart
            </button>
          </div>
        ) : (
          <>
            <div>
              <div>
                <span className="text-xl font-medium">
                  Question {currentQuestion + 1}
                </span>
                /{items.length}
              </div>
              <div className="text-xl my-3 font-serif">
                {items[currentQuestion].question}
              </div>
            </div>
            <div>
              {items[currentQuestion].answers.map((answer, i) => (
                <button
                  key={i}
                  className="p-3 bg-slate-400 hover:bg-slate-500 flex flex-col my-3 w-full rounded-md text-yellow-200 font-semibold text-md"
                  onClick={() => {
                    handleAnsClick(answer.correct);
                  }}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
