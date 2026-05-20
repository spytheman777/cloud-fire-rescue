import { useState } from "react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  arrayMove,
} from "@dnd-kit/sortable";

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import styles from "./styles";

const correctOrder = [
  "공기 상승",
  "단열팽창",
  "기온 하강",
  "포화수증기량 감소",
  "상대습도 증가",
  "이슬점 도달",
  "수증기 응결",
  "구름 생성",
];

function shuffle(array) {
  return [...array].sort(
    () => Math.random() - 0.5
  );
}

// 카드 컴포넌트
function SortableCard({
  id,
  isCorrect,
  isWrong,
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

    background:
      "rgba(255,255,255,0.78)",

    borderRadius: "24px",

    padding: "18px 24px",

    fontSize: "24px",

    fontWeight: "900",

    color: "#0f172a",

    boxShadow: isDragging
      ? "0 20px 40px rgba(14,165,233,0.25)"
      : "0 10px 24px rgba(15,23,42,0.08)",

    border: isCorrect
      ? "3px solid #38bdf8"
      : isWrong
      ? "3px solid #ef4444"
      : "2px solid rgba(255,255,255,0.45)",

    cursor: "grab",

    minHeight: "76px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    transition: "all 0.2s ease",

    transformOrigin: "center",

    scale: isDragging
      ? "1.03"
      : "1",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      ☁️ {id}
    </div>
  );
}

export default function SequencePage({
  setPage,
}) {
  const [items, setItems] = useState(
    shuffle(correctOrder)
  );

  const [checked, setChecked] =
    useState(false);

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

  function checkAnswer() {
    setChecked(true);
  }

  const isAllCorrect =
    JSON.stringify(items) ===
    JSON.stringify(correctOrder);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        3단계 - 구름 생성 순서 배열
      </h1>

      <div
        style={{
          textAlign: "center",

          marginBottom: "18px",

          fontSize: "22px",

          color: "#475569",

          fontWeight: "700",
        }}
      >
        아래에서 위로
        구름 생성 순서를 배열하세요
      </div>

      <div
        style={{
          textAlign: "center",

          marginBottom: "40px",

          fontSize: "18px",

          color: "#64748b",
        }}
      >
        힌트 : 교과서 72쪽 참고
      </div>

      <div
        style={{
          maxWidth: "720px",

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
                  "column-reverse",

                gap: "14px",
              }}
            >
              {items.map(
                (item, index) => (
                  <div
                    key={item}
                  >
                    {/* 화살표 */}
                    <div
                      style={{
                        textAlign:
                          "center",

                        color:
                          "#facc15",

                        fontSize:
                          "28px",

                        marginBottom:
                          "8px",
                      }}
                    >
                      ⬆
                    </div>

                    <SortableCard
                      id={item}
                      isCorrect={
                        checked &&
                        item ===
                          correctOrder[
                            index
                          ]
                      }
                      isWrong={
                        checked &&
                        item !==
                          correctOrder[
                            index
                          ]
                      }
                    />
                  </div>
                )
              )}
            </div>
          </SortableContext>
        </DndContext>

        {/* 버튼 */}
        <div
          style={{
            textAlign: "center",

            marginTop: "40px",
          }}
        >
          <button
            style={styles.button}
            onClick={checkAnswer}
          >
            정답 확인
          </button>

          {checked && (
            <div
              style={{
                marginTop: "24px",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",

                  fontWeight: "900",
                }}
              >
                {isAllCorrect
                  ? "✅ 정답입니다!"
                  : "❌ 순서를 다시 확인하세요"}
              </h2>

              {isAllCorrect && (
                <button
                  style={{
                    ...styles.button,
                    marginTop:
                      "20px",
                  }}
                  onClick={() =>
                    setPage(
                      "result"
                    )
                  }
                >
                  다음 단계
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}