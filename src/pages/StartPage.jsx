import styles from "./styles";

export default function StartPage({ setPage }) {
  return (
    <div style={styles.center}>
      <div style={styles.glass}>
        <h1 style={styles.title}>
          🚨 전국 산불 발생
        </h1>

        <p style={styles.text}>
          기상과학소방청은
          <br />
          구름 생성 원리를 활용하여
          <br />
          강수를 유도하고 산불을 진화해야 합니다.
        </p>

        <button
          style={styles.button}
          onClick={() => setPage("team")}
        >
          프로젝트 시작
        </button>
      </div>
    </div>
  );
}