import { useState } from "react";
import styles from "./styles";

const roles = [
  {
    name: "소방청대장",
    icon: "🚒",
    color: "#fca5a5",
    desc: "조별 상황을 지휘하고 스탠바이미를 조작합니다.",
  },

  {
    name: "기상분석관",
    icon: "📡",
    color: "#c4b5fd",
    desc: "구름 생성 원리를 분석하고 퍼즐을 완성합니다.",
  },

  {
    name: "실험과학자",
    icon: "🧪",
    color: "#7dd3fc",
    desc: "실험 장비를 관리하고 구름 생성 실험을 수행합니다.",
  },

  {
    name: "재난대응팀장",
    icon: "🚨",
    color: "#fcd34d",
    desc: "최종 대규모 구름 생성 작전을 수행합니다.",
  },

  {
    name: "구름씨앗연구원",
    icon: "🌱",
    color: "#86efac",
    desc: "응결핵과 피톤치드 실험을 지원합니다.",
  },
];

export default function RolePage({
  setPage,
  setSelectedRole,
}) {
  const [selected, setSelected] =
    useState(null);

  // 상세 페이지
  if (selected) {
    return (
      <div style={styles.center}>
        <div style={styles.glass}>
          <div
            style={{
              fontSize: "120px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {selected.icon}
          </div>

          <h1 style={styles.title}>
            {selected.name}
          </h1>

          <p style={styles.text}>
            {selected.desc}
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent:
                "center",
              marginTop: "30px",
            }}
          >
            <button
              style={{
                ...styles.button,
                background:
                  selected.color,
              }}
              onClick={() => {
                setSelectedRole(
                  selected.name
                );

                setPage("ox");
              }}
            >
              임무 시작
            </button>

            <button
              style={{
                ...styles.button,
                background: "#64748b",
              }}
              onClick={() =>
                setSelected(null)
              }
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 역할 선택 화면
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        🚨 역할 배정
      </h1>

      <div style={styles.grid}>
        {roles.map((role) => (
          <div
            key={role.name}
            style={{
              ...styles.card,

              border:
                `2px solid ${role.color}`,

              minHeight: "210px",

              justifyContent:
                "center",

              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
            }}
            onClick={() =>
              setSelected(role)
            }
          >
            <div
              style={{
                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                gap: "20px",

                width: "100%",
              }}
            >
              {/* 아이콘 */}
              <div
                style={{
                  fontSize: "68px",

                  flexShrink: 0,
                }}
              >
                {role.icon}
              </div>

              {/* 역할 이름 */}
              <div
                style={{
                  fontSize:
                    role.name ===
                    "구름씨앗연구원"
                      ? "24px"
                      : "29px",

                  fontWeight: "900",

                  color: "#0f172a",

                  whiteSpace:
                    "nowrap",

                  lineHeight: 1.2,
                }}
              >
                {role.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "35px",
        }}
      >
        <button
          style={{
            ...styles.button,
            background: "#64748b",
          }}
          onClick={() =>
            setPage("team")
          }
        >
          ← 지역 다시 선택
        </button>
      </div>
    </div>
  );
}