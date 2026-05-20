import {
  useState,
  useEffect,
} from "react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import styles from "./styles";

// 단계
const steps = [
  "공기상승",
  "단열팽창",
  "기온하강",
  "포화수증기량 감소",
  "상대습도 증가",
  "이슬점도달",
  "수증기응결",
  "구름생성",
];

// 조별 색상
const teamMaps = {
  경기도: [
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#facc15",
    "#06b6d4",
    "#8b5cf6",
    "#f97316",
    "#ffffff",
  ],

  강원도: [
    "#22c55e",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#facc15",
    "#3b82f6",
    "#f97316",
    "#ffffff",
  ],

  충청도: [
    "#f97316",
    "#06b6d4",
    "#ef4444",
    "#8b5cf6",
    "#22c55e",
    "#3b82f6",
    "#facc15",
    "#ffffff",
  ],

  전라도: [
    "#8b5cf6",
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#f97316",
    "#06b6d4",
    "#facc15",
    "#ffffff",
  ],

  경상도: [
    "#06b6d4",
    "#f97316",
    "#22c55e",
    "#ef4444",
    "#8b5cf6",
    "#facc15",
    "#3b82f6",
    "#ffffff",
  ],

  제주도: [
    "#facc15",
    "#8b5cf6",
    "#3b82f6",
    "#22c55e",
    "#ef4444",
    "#06b6d4",
    "#f97316",
    "#ffffff",
  ],
};

// 암호
const passwords = {
  경기도: "2",
  강원도: "7",
  충청도: "0",
  전라도: "4",
  경상도: "2",
  제주도: "2",
};

// 섞기
function shuffle(array) {
  return [...array].sort(
    () => Math.random() - 0.5
  );
}

// 카드
function SortableCard({
  id,
  color,
  correct,
  wrong,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform:
      CSS.Transform.toString(transform),

    transition,

    background: color,

    borderRadius: "28px",

    height: "92px",

    border: correct
      ? "5px solid #38bdf8"
      : wrong
      ? "5px solid #ef4444"
      : "3px solid rgba(255,255,255,0.45)",

    boxShadow: isDragging
      ? "0 26px 60px rgba(14,165,233,0.32)"
      : "0 12px 28px rgba(15,23,42,0.12)",

    cursor: "grab",

    userSelect: "none",

    display: "flex",

    alignItems: "center",

    justifyContent:
      "center",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div
        style={{
          width: "36px",

          height: "36px",

          borderRadius: "999px",

          background:
            id === "구름생성"
              ? "#e2e8f0"
              : "rgba(255,255,255,0.92)",

          border:
            "2px solid rgba(255,255,255,0.7)",
        }}
      />
    </div>
  );
}

export default function TeacherMainPage({
  teacherTeam,
  members,
}) {
  const [items, setItems] =
    useState(
      shuffle(steps)
    );

  const [checked, setChecked] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [failed, setFailed] =
    useState(false);

  // 10분 타이머
  const [timeLeft, setTimeLeft] =
    useState(600);

  // 깜빡임
  const [flash, setFlash] =
    useState(false);

  // 초기화
  function handleReset() {
    setItems(
      shuffle(steps)
    );

    setChecked(false);

    setSuccess(false);

    setFailed(false);

    setTimeLeft(600);
  }

  // 카운트다운
  useEffect(() => {
    const timer =
      setInterval(() => {
        setTimeLeft(
          (prev) => {
            if (prev <= 1) {
              setFailed(true);
              return 0;
            }

            return prev - 1;
          }
        );
      }, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  // 마지막 1분
  useEffect(() => {
    if (timeLeft < 60) {
      const flashTimer =
        setInterval(() => {
          setFlash(
            (prev) => !prev
          );
        }, 450);

      return () =>
        clearInterval(
          flashTimer
        );
    }
  }, [timeLeft]);

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  const colors =
    teamMaps[teacherTeam];

  // 배경
  let background =
    "linear-gradient(180deg,#dbeafe,#f8fafc)";

  if (timeLeft < 360) {
    background =
      "linear-gradient(180deg,#fee2e2,#fef2f2)";
  }

  if (timeLeft < 180) {
    background =
      "linear-gradient(180deg,#fecaca,#fee2e2)";
  }

  if (timeLeft < 60) {
    background = flash
      ? "linear-gradient(180deg,#ef4444,#fee2e2)"
      : "linear-gradient(180deg,#991b1b,#fecaca)";
  }

  // 드래그
  function handleDragEnd(event) {
    const {
      active,
      over,
    } = event;

    if (
      active.id !== over?.id
    ) {
      const oldIndex =
        items.indexOf(active.id);

      const newIndex =
        items.indexOf(over.id);

      setItems(
        arrayMove(
          items,
          oldIndex,
          newIndex
        )
      );
    }
  }

  // 정답
  function handleCheck() {
    setChecked(true);

    const correct =
      JSON.stringify(items) ===
      JSON.stringify(steps);

    setSuccess(correct);
  }

  // 실패 화면
  if (failed && !success) {
    return (
      <div
        style={{
          ...styles.page,

          background:
            "linear-gradient(180deg,#7f1d1d,#111827)",

          color: "white",

          justifyContent:
            "center",

          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "120px",

            marginBottom: "30px",
          }}
        >
          🔥
        </div>

        <div
          style={{
            fontSize: "64px",

            fontWeight: "900",

            marginBottom: "30px",
          }}
        >
          산불 확산
        </div>

        <div
          style={{
            fontSize: "34px",

            lineHeight: 1.8,

            color: "#fecaca",

            fontWeight: "700",

            marginBottom: "40px",
          }}
        >
          인공강우 작전에 실패했습니다.
          <br />
          산불이 전국으로 확산됩니다.
        </div>

        <button
          style={styles.button}
          onClick={handleReset}
        >
          🔄 다시 시작
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        ...styles.page,

        background,

        transition:
          "background 0.4s ease",
      }}
    >
      {/* 경보 */}
      <div
        style={{
          position: "fixed",

          top: "20px",

          left: "20px",

          background:
            timeLeft < 180
              ? "#ef4444"
              : "#0f172a",

          color: "white",

          padding:
            "16px 24px",

          borderRadius:
            "18px",

          fontSize: "24px",

          fontWeight: "900",

          zIndex: 999,
        }}
      >
        🔥 산불 위험 경보
      </div>

      {/* 타이머 */}
      <div
        style={{
          position: "fixed",

          top: "20px",

          right: "20px",

          background:
            timeLeft < 180
              ? "#ef4444"
              : "rgba(15,23,42,0.92)",

          color: "white",

          padding:
            "18px 28px",

          borderRadius:
            "22px",

          fontSize: "30px",

          fontWeight: "900",

          zIndex: 999,
        }}
      >
        ⏱️ {minutes}:
        {seconds
          .toString()
          .padStart(2, "0")}
      </div>

      {/* 제목 */}
      <h1
        style={{
          ...styles.title,

          marginTop: "40px",
        }}
      >
        🌩️ {teacherTeam}
        기상과학소방청
      </h1>

      {/* 설명 */}
      <div
        style={{
          textAlign: "center",

          fontSize: "30px",

          fontWeight: "800",

          color: "#334155",

          marginBottom: "30px",

          lineHeight: 1.7,
        }}
      >
        퍼즐을 완성하고
        <br />
        가압기 비밀번호를
        해독하세요
      </div>

      {/* 조원 */}
      <div
        style={{
          textAlign: "center",

          marginBottom: "46px",

          fontSize: "20px",

          color: "#64748b",

          fontWeight: "700",
        }}
      >
        👥 {members.join(" · ")}
      </div>

      {/* 퍼즐 */}
      <div
        style={{
          maxWidth: "760px",

          margin: "0 auto",
        }}
      >
        <DndContext
          collisionDetection={
            closestCenter
          }
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={items}
            strategy={
              verticalListSortingStrategy
            }
          >
            <div
              style={{
                display: "flex",

                flexDirection:
                  "column",

                gap: "18px",
              }}
            >
              {items.map(
                (item, index) => (
                  <SortableCard
                    key={item}
                    id={item}
                    color={
                      colors[
                        steps.indexOf(
                          item
                        )
                      ]
                    }
                    correct={
                      checked &&
                      item ===
                        steps[index]
                    }
                    wrong={
                      checked &&
                      item !==
                        steps[index]
                    }
                  />
                )
              )}
            </div>
          </SortableContext>
        </DndContext>

        {/* 버튼 */}
        <div
          style={{
            textAlign: "center",

            marginTop: "44px",

            display: "flex",

            flexDirection:
              "column",

            gap: "16px",

            alignItems:
              "center",
          }}
        >
          <button
            style={{
              ...styles.button,

              fontSize: "28px",

              padding:
                "22px 40px",
            }}
            onClick={handleCheck}
          >
            🔍 정답 확인
          </button>

          <button
            style={{
              ...styles.button,

              background:
                "linear-gradient(135deg,#475569,#334155)",
            }}
            onClick={handleReset}
          >
            🔄 전체 초기화
          </button>
        </div>

        {/* 성공 */}
        {success && (
          <div
            style={{
              marginTop: "56px",

              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "72px",

                marginBottom: "18px",
              }}
            >
              🌧️
            </div>

            <div
              style={{
                fontSize: "46px",

                fontWeight: "900",

                color: "#0f172a",

                marginBottom: "28px",
              }}
            >
              인공강우 성공
            </div>

            <div
              style={{
                fontSize: "32px",

                fontWeight: "800",

                color: "#334155",

                marginBottom: "28px",
              }}
            >
              암호 숫자 :
              {" "}
              {
                passwords[
                  teacherTeam
                ]
              }
            </div>

            <div
              style={{
                background:
                  "rgba(255,255,255,0.62)",

                borderRadius:
                  "30px",

                padding: "38px",
              }}
            >
              <div
                style={{
                  fontSize: "36px",

                  fontWeight: "900",

                  marginBottom:
                    "24px",

                  color: "#0f172a",
                }}
              >
                🧪 실험 준비를 하세요
              </div>

              <div
                style={{
                  fontSize: "26px",

                  lineHeight: 2,

                  fontWeight: "700",

                  color: "#334155",
                }}
              >
                1. 패트병에 물 넣기
                <br />
                2. 종이 온도계 넣기
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}