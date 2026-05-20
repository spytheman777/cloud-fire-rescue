import styles from "./styles";

const teams = [
  {
    name: "경기도",
    status: "퍼즐 진행중",
    danger: "매우 높음",
    color: "#ef4444",
  },

  {
    name: "강원도",
    status: "실험 준비중",
    danger: "높음",
    color: "#f97316",
  },

  {
    name: "충청도",
    status: "암호 해독 완료",
    danger: "중간",
    color: "#22c55e",
  },

  {
    name: "전라도",
    status: "퍼즐 진행중",
    danger: "높음",
    color: "#eab308",
  },

  {
    name: "경상도",
    status: "상황실 연결",
    danger: "매우 높음",
    color: "#dc2626",
  },

  {
    name: "제주도",
    status: "실험 진행중",
    danger: "낮음",
    color: "#06b6d4",
  },
];

export default function CentralDashboardPage() {
  return (
    <div
      style={{
        ...styles.page,

        background:
          "linear-gradient(180deg,#0f172a,#111827)",

        color: "white",
      }}
    >
      {/* 상단 */}
      <div
        style={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "40px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "52px",

              fontWeight: "900",
            }}
          >
            🚨 중앙 재난본부
          </div>

          <div
            style={{
              fontSize: "24px",

              color: "#cbd5e1",

              marginTop: "10px",
            }}
          >
            대한민국 기상과학소방청
          </div>
        </div>

        {/* 전체 타이머 */}
        <div
          style={{
            background:
              "rgba(239,68,68,0.15)",

            border:
              "2px solid rgba(239,68,68,0.5)",

            padding:
              "24px 34px",

            borderRadius:
              "24px",

            fontSize: "42px",

            fontWeight: "900",

            color: "#fecaca",
          }}
        >
          ⏱️ 09:12
        </div>
      </div>

      {/* 경보 */}
      <div
        style={{
          background:
            "linear-gradient(90deg,#dc2626,#ef4444)",

          padding: "22px",

          borderRadius: "22px",

          marginBottom: "40px",

          fontSize: "30px",

          fontWeight: "900",

          textAlign: "center",

          boxShadow:
            "0 14px 30px rgba(239,68,68,0.25)",
        }}
      >
        🔥 전국 산불 위기경보
        심각 단계
      </div>

      {/* 지역 카드 */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(3,1fr)",

          gap: "24px",
        }}
      >
        {teams.map((team) => (
          <div
            key={team.name}
            style={{
              background:
                "rgba(255,255,255,0.06)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              borderRadius:
                "28px",

              padding: "28px",

              backdropFilter:
                "blur(10px)",

              boxShadow:
                "0 12px 28px rgba(0,0,0,0.22)",
            }}
          >
            {/* 지역명 */}
            <div
              style={{
                display: "flex",

                alignItems: "center",

                justifyContent:
                  "space-between",

                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "34px",

                  fontWeight: "900",
                }}
              >
                {team.name}
              </div>

              <div
                style={{
                  width: "20px",

                  height: "20px",

                  borderRadius:
                    "999px",

                  background:
                    team.color,

                  boxShadow:
                    `0 0 20px ${team.color}`,
                }}
              />
            </div>

            {/* 상태 */}
            <div
              style={{
                fontSize: "22px",

                color: "#cbd5e1",

                marginBottom: "18px",

                lineHeight: 1.8,
              }}
            >
              📡 {team.status}
              <br />
              🔥 위험도 :
              {" "}
              {team.danger}
            </div>

            {/* 진행바 */}
            <div
              style={{
                width: "100%",

                height: "18px",

                borderRadius:
                  "999px",

                background:
                  "rgba(255,255,255,0.08)",

                overflow: "hidden",

                marginTop: "24px",
              }}
            >
              <div
                style={{
                  width:
                    team.name ===
                    "충청도"
                      ? "100%"
                      : team.name ===
                        "강원도"
                      ? "72%"
                      : team.name ===
                        "제주도"
                      ? "54%"
                      : "32%",

                  height: "100%",

                  background:
                    team.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 하단 로그 */}
      <div
        style={{
          marginTop: "40px",

          background:
            "rgba(255,255,255,0.05)",

          borderRadius: "28px",

          padding: "28px",
        }}
      >
        <div
          style={{
            fontSize: "30px",

            fontWeight: "900",

            marginBottom: "22px",
          }}
        >
          📡 실시간 작전 로그
        </div>

        <div
          style={{
            fontSize: "22px",

            lineHeight: 2,

            color: "#cbd5e1",
          }}
        >
          [09:41] 경기도 상황실 퍼즐 진행중
          <br />
          [09:42] 강원도 암호 해독 성공
          <br />
          [09:43] 제주도 인공강우 실험 시작
          <br />
          [09:44] 충청도 산불 진압 성공
        </div>
      </div>
    </div>
  );
}