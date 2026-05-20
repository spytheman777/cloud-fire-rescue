const styles = {
  page: {
    minHeight: "100vh",

    background: `
      radial-gradient(circle at top left, rgba(255,255,255,0.7), transparent 30%),
      radial-gradient(circle at top right, rgba(186,230,253,0.8), transparent 35%),
      linear-gradient(180deg, #7dd3fc 0%, #c4f1ff 35%, #f0fbff 100%)
    `,

    padding: "40px",

    fontFamily: "Pretendard, sans-serif",

    overflowX: "hidden",
  },

  center: {
    minHeight: "100vh",

    background: `
      radial-gradient(circle at top left, rgba(255,255,255,0.7), transparent 30%),
      radial-gradient(circle at top right, rgba(186,230,253,0.8), transparent 35%),
      linear-gradient(180deg, #7dd3fc 0%, #c4f1ff 35%, #f0fbff 100%)
    `,

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    padding: "30px",

    fontFamily: "Pretendard, sans-serif",

    overflowX: "hidden",
  },

  glass: {
    background: "rgba(255,255,255,0.28)",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.35)",

    borderRadius: "36px",

    boxShadow:
      "0 20px 60px rgba(15,23,42,0.14)",

    padding: "42px",

    width: "100%",

    maxWidth: "900px",
  },

  title: {
    fontSize: "58px",

    fontWeight: "900",

    color: "#0f172a",

    marginBottom: "28px",

    textAlign: "center",

    letterSpacing: "-1px",
  },

  text: {
    fontSize: "24px",

    lineHeight: 1.7,

    color: "#334155",

    fontWeight: "600",

    textAlign: "center",
  },

  button: {
    padding: "18px 32px",

    borderRadius: "24px",

    border: "none",

    background:
      "linear-gradient(135deg,#0ea5e9,#0284c7)",

    color: "white",

    fontSize: "22px",

    fontWeight: "900",

    cursor: "pointer",

    boxShadow:
      "0 12px 28px rgba(14,165,233,0.35)",
  },

  grid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit,minmax(260px,1fr))",

    gap: "28px",

    maxWidth: "1200px",

    margin: "0 auto",
  },

  card: {
    background:
      "linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.22))",

    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.45)",

    borderRadius: "34px",

    boxShadow:
      "0 15px 40px rgba(15,23,42,0.10)",

    minHeight: "140px",

    padding: "24px 28px",

    display: "flex",

    flexDirection: "row",

    justifyContent: "flex-start",

    alignItems: "center",

    gap: "20px",

    cursor: "pointer",

    transition: "all 0.25s ease",
  },
};

export default styles;