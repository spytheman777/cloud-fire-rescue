import styles from "./styles";

const teams = [
  "경기도",
  "강원도",
  "충청도",
  "전라도",
  "경상도",
  "제주도",
];

export default function TeamPage({
  setPage,
  setSelectedTeam,
}) {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        🌩️ 지역 기상과학소방청 선택
      </h1>

      <div style={styles.grid}>
        {teams.map((team) => (
          <div
            key={team}
            onClick={() => {
              setSelectedTeam(team);
              setPage("role");
            }}
            style={{
              ...styles.card,

              minHeight: "180px",

              justifyContent:
                "center",

              alignItems: "center",

              background:
                "linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0.20))",

              border:
                "1px solid rgba(255,255,255,0.45)",

              boxShadow:
                "0 15px 40px rgba(15,23,42,0.08)",

              transition:
                "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.03)";

              e.currentTarget.style.boxShadow =
                "0 25px 50px rgba(14,165,233,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0) scale(1)";

              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(15,23,42,0.08)";
            }}
          >
            <div
              style={{
                fontSize: "34px",

                fontWeight: "900",

                color: "#0f172a",

                textAlign: "center",

                whiteSpace: "nowrap",
              }}
            >
              {team}
            </div>

            <div
              style={{
                marginTop: "10px",

                fontSize: "16px",

                color: "#475569",

                fontWeight: "600",

                whiteSpace: "nowrap",
              }}
            >
              기상과학소방청
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}