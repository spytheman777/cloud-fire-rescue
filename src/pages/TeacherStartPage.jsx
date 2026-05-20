import { useState } from "react";
import styles from "./styles";

const teams = [
  "경기도",
  "강원도",
  "충청도",
  "전라도",
  "경상도",
  "제주도",
];

export default function TeacherStartPage({
  setPage,
  setTeacherTeam,
  setMembers,
}) {
  const [teamNumber, setTeamNumber] =
    useState("");

  const [team, setTeam] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [memberInputs, setMemberInputs] =
    useState([
      "",
      "",
      "",
      "",
      "",
    ]);

  function handleStart() {
    const filtered =
      memberInputs.filter(
        (m) => m.trim() !== ""
      );

    if (
      !team ||
      !teamNumber ||
      filtered.length < 4
    ) {
      alert(
        "조 번호, 지역, 조원 이름 4명 이상을 입력하세요."
      );
      return;
    }

    setTeacherTeam(team);

    setMembers(filtered);

    // 부팅 연출
    setLoading(true);

    setTimeout(() => {
      setPage("teacherMain");
    }, 2600);
  }

  // 부팅 화면
  if (loading) {
    return (
      <div style={styles.center}>
        <div
          style={{
            ...styles.glass,

            textAlign: "center",

            maxWidth: "900px",

            padding: "80px",
          }}
        >
          <div
            style={{
              fontSize: "110px",

              marginBottom: "30px",
            }}
          >
            🌩️
          </div>

          <div
            style={{
              fontSize: "44px",

              fontWeight: "900",

              color: "#0f172a",

              marginBottom: "30px",
            }}
          >
            대한민국 기상과학소방청
          </div>

          <div
            style={{
              fontSize: "28px",

              fontWeight: "700",

              color: "#475569",

              lineHeight: 1.8,
            }}
          >
            {team} 상황실 연결 중...
            <br />
            인공강우 작전 시스템 초기화...
          </div>

          {/* 로딩 바 */}
          <div
            style={{
              width: "100%",

              height: "18px",

              borderRadius: "999px",

              background:
                "rgba(148,163,184,0.25)",

              marginTop: "50px",

              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",

                height: "100%",

                background:
                  "linear-gradient(90deg,#38bdf8,#0ea5e9)",

                animation:
                  "loading 2s linear",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.center}>
      <div
        style={{
          ...styles.glass,

          maxWidth: "900px",
        }}
      >
        <h1 style={styles.title}>
          🌩️ 대한민국 기상과학소방청
        </h1>

        <div
          style={{
            textAlign: "center",

            fontSize: "24px",

            fontWeight: "700",

            color: "#475569",

            marginBottom: "40px",

            lineHeight: 1.6,
          }}
        >
          산불 진압용 인공강우
          작전 상황실
        </div>

        {/* 조 번호 */}
        <div
          style={{
            marginBottom: "26px",
          }}
        >
          <div
            style={{
              fontSize: "22px",

              fontWeight: "800",

              marginBottom: "12px",
            }}
          >
            조 번호
          </div>

          <input
            value={teamNumber}
            onChange={(e) =>
              setTeamNumber(
                e.target.value
              )
            }
            placeholder="예: 3"
            style={{
              width: "100%",

              padding: "18px",

              borderRadius: "20px",

              border:
                "2px solid rgba(125,211,252,0.4)",

              fontSize: "24px",

              fontWeight: "700",
            }}
          />
        </div>

        {/* 지역 선택 */}
        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: "22px",

              fontWeight: "800",

              marginBottom: "14px",
            }}
          >
            지역 선택
          </div>

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(3,1fr)",

              gap: "14px",
            }}
          >
            {teams.map((t) => (
              <button
                key={t}
                onClick={() =>
                  setTeam(t)
                }
                style={{
                  padding: "18px",

                  borderRadius: "20px",

                  border:
                    team === t
                      ? "3px solid #0284c7"
                      : "2px solid rgba(125,211,252,0.35)",

                  background:
                    team === t
                      ? "rgba(125,211,252,0.22)"
                      : "rgba(255,255,255,0.6)",

                  fontSize: "24px",

                  fontWeight: "900",

                  cursor: "pointer",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 조원 입력 */}
        <div>
          <div
            style={{
              fontSize: "22px",

              fontWeight: "800",

              marginBottom: "14px",
            }}
          >
            조원 이름 입력
          </div>

          <div
            style={{
              display: "flex",

              flexDirection: "column",

              gap: "14px",
            }}
          >
            {memberInputs.map(
              (member, index) => (
                <input
                  key={index}
                  value={member}
                  onChange={(e) => {
                    const copy = [
                      ...memberInputs,
                    ];

                    copy[index] =
                      e.target.value;

                    setMemberInputs(
                      copy
                    );
                  }}
                  placeholder={`${index + 1}번 조원`}
                  style={{
                    width: "100%",

                    padding: "18px",

                    borderRadius:
                      "18px",

                    border:
                      "2px solid rgba(125,211,252,0.35)",

                    fontSize: "22px",

                    fontWeight: "700",
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* 버튼 */}
        <div
          style={{
            textAlign: "center",

            marginTop: "42px",
          }}
        >
          <button
            style={{
              ...styles.button,

              fontSize: "28px",

              padding:
                "22px 42px",
            }}
            onClick={handleStart}
          >
            🚨 상황실 접속
          </button>
        </div>
      </div>
    </div>
  );
}