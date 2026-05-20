import { useState } from "react";
import oxQuestions from "../data/oxQuestions";
import styles from "./styles";

export default function OXQuizPage({
  setPage,
}) {
  const [correctCount, setCorrectCount] =
    useState(0);

  const [currentQuestion, setCurrentQuestion] =
    useState(getRandomQuestion());

  const [showResult, setShowResult] =
    useState(false);

  const [isCorrect, setIsCorrect] =
    useState(false);

  function getRandomQuestion() {
    return oxQuestions[
      Math.floor(
        Math.random() *
          oxQuestions.length
      )
    ];
  }

  function checkAnswer(answer) {
    const correct =
      answer === currentQuestion.answer;

    setIsCorrect(correct);

    if (correct) {
      setCorrectCount(
        (prev) => prev + 1
      );
    }

    setShowResult(true);
  }

  function nextQuestion() {
    // 정답 2개 성공
    if (
      isCorrect &&
      correctCount >= 2
    ) {
      setPage("multiple");
      return;
    }

    // 다음 문제 출제
    setCurrentQuestion(
      getRandomQuestion()
    );

    setShowResult(false);
  }

  return (
    <div style={styles.center}>
      <div style={styles.glass}>
        <h1 style={styles.title}>
          1단계 - OX 퀴즈
        </h1>

        <h2
          style={{
            fontSize: "34px",
            color: "#64748b",
          }}
        >
          정답 수 : {correctCount} / 2
        </h2>

        <p style={styles.text}>
          {currentQuestion.question}
        </p>

        {!showResult && (
          <div
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <button
              onClick={() =>
                checkAnswer(true)
              }
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "40px",
                border: "none",
                background: "#2563eb",
                color: "white",
                fontSize: "90px",
                fontWeight: "900",
                cursor: "pointer",
              }}
            >
              O
            </button>

            <button
              onClick={() =>
                checkAnswer(false)
              }
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "40px",
                border: "none",
                background: "#dc2626",
                color: "white",
                fontSize: "90px",
                fontWeight: "900",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        )}

        {showResult && (
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: isCorrect
                  ? "#16a34a"
                  : "#dc2626",

                fontSize: "42px",
              }}
            >
              {isCorrect
                ? "✅ 정답입니다!"
                : "❌ 틀렸습니다!"}
            </h2>

            <button
              style={styles.button}
              onClick={nextQuestion}
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}