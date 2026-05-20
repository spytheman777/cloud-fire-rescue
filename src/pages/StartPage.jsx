import styles from "./styles";

export default function StartPage({
  setPage,
}) {
  return (
    <div style={styles.center}>
      <div
        style={{
          ...styles.glass,

          textAlign: "center",

          maxWidth: "920px",
        }}
      >
        <h1
          style={{
            ...styles.title,

            marginBottom: "20px",
          }}
        >
          🌩️ 구름 생성
          재난 대응 시스템
        </h1>

        <div
          style={{
            fontSize: "28px",

            lineHeight: 1.7,

            color: "#475569",

            fontWeight: "700",

            marginBottom: "60px",
          }}
        >
          대한민국 기상과학소방청과 함께
          <br />
          인공강우 작전을 수행하세요
        </div>

        {/* 버튼 */}
        <div
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "24px",

            alignItems: "center",
          }}
        >
          {/* 상황실 */}
          <button
            style={{
              ...styles.button,

              width: "460px",

              fontSize: "32px",

              padding:
                "28px 34px",
            }}
            onClick={() =>
              setPage(
                "teacherStart"
              )
            }
          >
            📺 조별 상황실
          </button>

          {/* 중앙본부 */}
          <button
            style={{
              ...styles.button,

              width: "460px",

              fontSize: "32px",

              padding:
                "28px 34px",

              background:
                "linear-gradient(135deg,#7f1d1d,#dc2626)",

              boxShadow:
                "0 14px 32px rgba(127,29,29,0.3)",
            }}
            onClick={() =>
              setPage(
                "dashboard"
              )
            }
          >
            🚨 중앙 재난본부
          </button>
        </div>
      </div>
    </div>
  );
}