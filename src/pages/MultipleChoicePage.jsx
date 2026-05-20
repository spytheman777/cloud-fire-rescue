import { useState } from "react";
import styles from "./styles";

const questions = [
  {
    question:
      "구름을 구성하는 것은?",

    options: [
      "수증기와 산소",
      "물방울과 얼음덩어리",
      "이산화탄소와 질소",
      "먼지와 수증기",
    ],

    answer: 1,
  },

  {
    question:
      "단열팽창에서 '단열'의 의미는?",

    options: [
      "온도가 올라간다",
      "부피가 커진다",
      "열을 차단한다",
      "수증기가 응결된다",
    ],

    answer: 2,
  },

  {
    question:
      "구름이 생성되는 첫 번째 단계는?",

    options: [
      "수증기 응결",
      "이슬점 도달",
      "단열팽창",
      "공기 상승",
    ],

    answer: 3,
  },

  {
    question:
      "공기가 상승하면 기압이 낮아져 일어나는 현상은?",

    options: [
      "온도 상승",
      "수증기 증발",
      "단열팽창",
      "응결핵 소멸",
    ],

    answer: 2,
  },

  {
    question:
      "이슬점이란?",

    options: [
      "구름이 비로 변하는 온도",
      "공기가 상승을 멈추는 온도",
      "공기가 포화 상태에 도달하여 응결이 시작되는 온도",
      "얼음이 녹기 시작하는 온도",
    ],

    answer: 2,
  },

  {
    question:
      "단열팽창이 일어날 때 온도 변화는?",

    options: [
      "변화 없다",
      "급격히 상승한다",
      "서서히 상승한다",
      "내려간다",
    ],

    answer: 3,
  },
];

export default function MultipleChoicePage({
  setPage,
}) {
  const [correctCount, setCorrectCount] =
    useState(0);

  const [selected, setSelected] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(
      Math.floor(
        Math.random() *
          questions.length
      )
    );

  const current =
    questions[currentQuestionIndex];

  // 랜덤 문제 출제
  function getRandomQuestion() {
    let random;

    do {
      random = Math.floor(
        Math.random() *
          questions.length
      );
    } while (
      random ===
      currentQuestionIndex
    );

    return random;
  }

  // 확인 버튼
  function handleCheck() {
    if (selected === null) {
      setMessage("보기를 선택하세요!");
      return;
    }

    // 정답
    if (selected === current.answer) {
      setMessage("✅ 정답!");

      setTimeout(() => {
        // 2문제 성공
        if (correctCount + 1 >= 2) {
          setPage("sequence");
        } else {
          setCorrectCount(
            correctCount + 1
          );

          setSelected(null);

          setMessage("");

          setCurrentQuestionIndex(
            getRandomQuestion()
          );
        }
      }, 900);
    }

    // 오답
    else {
      setMessage(
        "❌ 틀렸습니다! 다른 문제가 나옵니다."
      );

      setTimeout(() => {
        setSelected(null);

        setMessage("");

        setCurrentQuestionIndex(
          getRandomQuestion()
        );
      }, 1200);
    }
  }

  return (
    <div style={styles.center}>
      <div
        style={{
          ...styles.glass,
          maxWidth: "900px",
        }}
      >
        {/* 단계 */}
        <div
          style={{
            fontSize: "24px",

            fontWeight: "900",

            color: "#0284c7",

            marginBottom: "8px",
          }}
        >
          2단계 - 심화퀴즈
        </div>

        {/* 진행 */}
        <div
          style={{
            fontSize: "18px",

            color: "#64748b",

            marginBottom: "30px",
          }}
        >
          {correctCount + 1}/2
        </div>

        {/* 문제 */}
        <div
          style={{
            fontSize: "34px",

            fontWeight: "900",

            color: "#0f172a",

            lineHeight: 1.5,

            marginBottom: "34px",
          }}
        >
          {current.question}
        </div>

        {/* 보기 */}
        <div
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "14px",
          }}
        >
          {current.options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelected(index)
                }
                style={{
                  padding:
                    "18px 20px",

                  minHeight: "72px",

                  borderRadius:
                    "22px",

                  border:
                    selected ===
                    index
                      ? "3px solid #0284c7"
                      : "2px solid rgba(125,211,252,0.35)",

                  background:
                    selected ===
                    index
                      ? "rgba(125,211,252,0.25)"
                      : "rgba(255,255,255,0.6)",

                  fontSize: "24px",

                  fontWeight: "800",

                  color: "#0f172a",

                  cursor: "pointer",

                  transition:
                    "all 0.2s ease",

                  textAlign: "left",
                }}
              >
                {index + 1}. {option}
              </button>
            )
          )}
        </div>

        {/* 메시지 */}
        {message && (
          <div
            style={{
              marginTop: "24px",

              fontSize: "24px",

              fontWeight: "900",

              textAlign: "center",
            }}
          >
            {message}
          </div>
        )}

        {/* 버튼 */}
        <div
          style={{
            textAlign: "center",

            marginTop: "34px",
          }}
        >
          <button
            style={styles.button}
            onClick={handleCheck}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}