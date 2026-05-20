import styles from "./styles";

// 역할별 단계
const steps = {
  소방청대장: "공기 상승",

  기상분석관: "단열팽창",

  실험과학자: "기온 하강",

  재난대응팀장:
    "상대습도 증가",

  구름씨앗연구원:
    "구름 생성",
};

// 조별 색상
const teamColors = {
  경기도: {
    "공기 상승": "#ef4444",

    단열팽창: "#3b82f6",

    "기온 하강": "#22c55e",

    "상대습도 증가":
      "#eab308",

    "구름 생성": "#ffffff",
  },

  강원도: {
    "공기 상승": "#22c55e",

    단열팽창: "#ef4444",

    "기온 하강": "#a855f7",

    "상대습도 증가":
      "#3b82f6",

    "구름 생성": "#ffffff",
  },

  충청도: {
    "공기 상승": "#f97316",

    단열팽창: "#06b6d4",

    "기온 하강": "#eab308",

    "상대습도 증가":
      "#8b5cf6",

    "구름 생성": "#ffffff",
  },

  전라도: {
    "공기 상승": "#8b5cf6",

    단열팽창: "#22c55e",

    "기온 하강": "#ef4444",

    "상대습도 증가":
      "#06b6d4",

    "구름 생성": "#ffffff",
  },

  경상도: {
    "공기 상승": "#06b6d4",

    단열팽창: "#f97316",

    "기온 하강": "#22c55e",

    "상대습도 증가":
      "#ef4444",

    "구름 생성": "#ffffff",
  },

  제주도: {
    "공기 상승": "#eab308",

    단열팽창: "#8b5cf6",

    "기온 하강": "#3b82f6",

    "상대습도 증가":
      "#22c55e",

    "구름 생성": "#ffffff",
  },
};

export default function ResultPage({
  selectedRole,
  selectedTeam,
}) {
  const step =
    steps[selectedRole];

  const color =
    teamColors[selectedTeam]?.[
      step
    ] || "#ffffff";

  return (
    <div style={styles.center}>
      <div
        style={{
          ...styles.glass,

          textAlign: "center",

          maxWidth: "760px",
        }}
      >
        {/* 성공 아이콘 */}
        <div
          style={{
            fontSize: "72px",

            marginBottom: "18px",
          }}
        >
          🎉
        </div>

        {/* 제목 */}
        <h1
          style={{
            ...styles.title,

            marginBottom: "18px",
          }}
        >
          임무 완료!
        </h1>

        {/* 안내 */}
        <div
          style={{
            fontSize: "24px",

            color: "#475569",

            marginBottom: "42px",

            fontWeight: "700",

            lineHeight: 1.6,
          }}
        >
          기상분석관에게
          <br />
          아래 힌트를 전달하세요
        </div>

        {/* 힌트 카드 */}
        <div
          style={{
            background: color,

            borderRadius: "34px",

            padding: "50px",

            border:
              step === "구름 생성"
                ? "3px solid #cbd5e1"
                : "none",

            boxShadow:
              `0 20px 40px ${color}55`,
          }}
        >
          <div
            style={{
              fontSize: "52px",

              fontWeight: "900",

              color:
                step === "구름 생성"
                  ? "#0f172a"
                  : "white",

              textShadow:
                step === "구름 생성"
                  ? "none"
                  : "0 2px 10px rgba(0,0,0,0.25)",
            }}
          >
            {step}
          </div>
        </div>

        {/* 하단 안내 */}
        <div
          style={{
            marginTop: "40px",

            fontSize: "20px",

            color: "#64748b",

            lineHeight: 1.7,

            fontWeight: "600",
          }}
        >
          조원들의 힌트를 모아
          <br />
          스탠바이미 퍼즐을
          완성하세요
        </div>
      </div>
    </div>
  );
}