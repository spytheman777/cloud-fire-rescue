import styles from "./styles";

export default function ResultPage({
  selectedRole,
  selectedTeam,
}) {
  // 역할 이름
  const roleNames = {
    소방청대장:
      "소방청대장",

    기상분석관:
      "기상분석관",

    실험과학자:
      "실험과학자",

    재난대응팀장:
      "재난대응팀장",

    구름씨앗연구원:
      "구름씨앗연구원",
  };

  // 역할 순서
  const roleIndex = {
    소방청대장: 0,

    기상분석관: 1,

    실험과학자: 2,

    재난대응팀장: 3,

    구름씨앗연구원: 4,
  };

  // 구름 생성 힌트
  const concepts = [
    "공기상승",

    "단열팽창",

    "기온하강",

    "포화수증기량 감소",

    "상대습도 증가",
  ];

  // 조별 색상 배열
  const teamColors = {
    경기도: [
      "#ef4444",
      "#3b82f6",
      "#22c55e",
      "#facc15",
      "#ffffff",
    ],

    강원도: [
      "#22c55e",
      "#ef4444",
      "#ffffff",
      "#3b82f6",
      "#facc15",
    ],

    충청도: [
      "#f97316",
      "#06b6d4",
      "#ef4444",
      "#8b5cf6",
      "#22c55e",
    ],

    전라도: [
      "#8b5cf6",
      "#22c55e",
      "#3b82f6",
      "#ef4444",
      "#facc15",
    ],

    경상도: [
      "#06b6d4",
      "#f97316",
      "#22c55e",
      "#ef4444",
      "#ffffff",
    ],

    제주도: [
      "#facc15",
      "#8b5cf6",
      "#3b82f6",
      "#22c55e",
      "#ef4444",
    ],
  };

  const index =
    roleIndex[selectedRole];

  const cardText =
    concepts[index];

  const cardColor =
    teamColors[
      selectedTeam
    ]?.[index] ||
    "#3b82f6";

  return (
    <div style={styles.center}>
      <div
        style={{
          ...styles.glass,

          textAlign: "center",

          maxWidth: "760px",
        }}
      >
        {/* 아이콘 */}
        <div
          style={{
            fontSize: "90px",

            marginBottom: "24px",
          }}
        >
          🌩️
        </div>

        {/* 제목 */}
        <h1
          style={{
            ...styles.title,

            marginBottom: "20px",
          }}
        >
          임무 성공
        </h1>

        {/* 역할 */}
        <div
          style={{
            fontSize: "30px",

            fontWeight: "800",

            color: "#334155",

            marginBottom: "30px",
          }}
        >
          {
            roleNames[
              selectedRole
            ]
          }
        </div>

        {/* 설명 */}
        <div
          style={{
            fontSize: "24px",

            lineHeight: 1.8,

            color: "#475569",

            marginBottom: "40px",

            fontWeight: "700",
          }}
        >
          구름 생성 핵심 힌트를
          확보했습니다.
          <br />
          조원들과 힌트를 공유하세요.
        </div>

        {/* 힌트 카드 */}
        <div
          style={{
            background:
              "rgba(255,255,255,0.55)",

            borderRadius:
              "28px",

            padding: "34px",

            display: "flex",

            flexDirection:
              "column",

            alignItems: "center",

            gap: "22px",
          }}
        >
          <div
            style={{
              fontSize: "22px",

              color: "#64748b",

              fontWeight: "700",
            }}
          >
            확보한 카드 힌트
          </div>

          {/* 카드 */}
          <div
            style={{
              width: "280px",

              height: "140px",

              borderRadius:
                "28px",

              background:
                cardColor,

              border:
                cardColor ===
                "#ffffff"
                  ? "4px solid #cbd5e1"
                  : "none",

              boxShadow:
                "0 16px 36px rgba(15,23,42,0.16)",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              fontSize: "30px",

              fontWeight: "900",

              color:
                cardColor ===
                "#ffffff"
                  ? "#0f172a"
                  : "white",

              textAlign: "center",

              padding: "20px",
            }}
          >
            {cardText}
          </div>
        </div>
      </div>
    </div>
  );
}