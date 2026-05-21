import {
  useState,
  useEffect,
} from "react";

import {
  subscribeMission,
  resetMission,
} from "../firebaseHelpers";

import styles from "./styles";

const teams = [
  "경기도",
  "강원도",
  "충청도",
  "전라도",
  "경상도",
  "제주도",
];

export default function CentralDashboardPage() {
  const [teamData, setTeamData] =
    useState({});

  // 실시간 구독
  useEffect(() => {
    const unsubscribes =
      teams.map((team) =>
        subscribeMission(
          team,
          (data) => {
            setTeamData(
              (prev) => ({
                ...prev,

                [team]: data,
              })
            );
          }
        )
      );

    return () => {
      unsubscribes.forEach(
        (unsubscribe) =>
          unsubscribe()
      );
    };
  }, []);

  // 완료 개수
  function getCount(team) {
    const data =
      teamData[team] || {};

    return Object.values(
      data
    ).filter(
      (value) =>
        value === true
    ).length;
  }

  // 전체 완료
  const allCompleted =
    teams.every(
      (team) =>
        getCount(team) >= 5
    );

  // 전체 초기화
  async function handleAllReset() {
    for (const team of teams) {
      await resetMission(
        team
      );
    }

    alert(
      "전체 초기화 완료!"
    );
  }

  return (
    <div
      style={{
        ...styles.page,

        background:
          "linear-gradient(180deg,#0f172a,#111827)",

        color: "white",
      }}
    >
      {/* 제목 */}
      <div
        style={{
          textAlign: "center",

          marginBottom: "50px",
        }}
      >
        <div
          style={{
            fontSize: "64px",

            fontWeight: "900",

            marginBottom: "14px",
          }}
        >
          🚨 중앙 재난본부
        </div>

        <div
          style={{
            fontSize: "28px",

            color: "#cbd5e1",

            fontWeight: "700",
          }}
        >
          대한민국 기상과학소방청
        </div>
      </div>

      {/* 지역 카드 */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",

          gap: "28px",

          maxWidth: "1400px",

          margin: "0 auto",
        }}
      >
        {teams.map((team) => {
          const count =
            getCount(team);

          const completed =
            count >= 5;

          return (
            <div
              key={team}
              style={{
                background:
                  completed
                    ? "linear-gradient(135deg,#38bdf8,#0ea5e9)"
                    : "rgba(255,255,255,0.06)",

                border:
                  completed
                    ? "2px solid rgba(255,255,255,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",

                borderRadius:
                  "30px",

                padding: "32px",

                transition:
                  "0.3s",

                boxShadow:
                  completed
                    ? "0 18px 40px rgba(14,165,233,0.28)"
                    : "0 12px 28px rgba(0,0,0,0.2)",
              }}
            >
              {/* 지역명 */}
              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems:
                    "center",

                  marginBottom:
                    "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "38px",

                    fontWeight:
                      "900",
                  }}
                >
                  {team}
                </div>

                <div
                  style={{
                    fontSize: "54px",
                  }}
                >
                  {completed
                    ? "🌧️"
                    : "🔥"}
                </div>
              </div>

              {/* 상태 */}
              <div
                style={{
                  fontSize: "24px",

                  lineHeight: 1.8,

                  color:
                    completed
                      ? "white"
                      : "#cbd5e1",

                  fontWeight:
                    "700",

                  marginBottom:
                    "24px",
                }}
              >
                진행 상황 :
                {" "}
                {count}/5
                <br />

                상태 :
                {" "}
                {completed
                  ? "인공강우 성공"
                  : "작전 진행 중"}
              </div>

              {/* 진행바 */}
              <div
                style={{
                  width: "100%",

                  height: "24px",

                  borderRadius:
                    "999px",

                  background:
                    "rgba(255,255,255,0.12)",

                  overflow:
                    "hidden",
                }}
              >
                <div
                  style={{
                    width: `${
                      (count /
                        5) *
                      100
                    }%`,

                    height:
                      "100%",

                    background:
                      completed
                        ? "white"
                        : "#38bdf8",

                    transition:
                      "0.4s",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 최종 성공 */}
      {allCompleted && (
        <div
          style={{
            marginTop: "70px",

            background:
              "linear-gradient(135deg,#22c55e,#16a34a)",

            borderRadius:
              "34px",

            padding: "40px",

            textAlign: "center",

            boxShadow:
              "0 20px 50px rgba(34,197,94,0.28)",
          }}
        >
          <div
            style={{
              fontSize: "90px",

              marginBottom: "20px",
            }}
          >
            🌈
          </div>

          <div
            style={{
              fontSize: "54px",

              fontWeight: "900",

              marginBottom: "20px",
            }}
          >
            전국 인공강우 성공
          </div>

          <div
            style={{
              fontSize: "30px",

              lineHeight: 1.8,

              fontWeight: "700",
            }}
          >
            모든 지역의 산불 진압 완료
            <br />
            최종 자물쇠를 해제하세요.
          </div>
        </div>
      )}

      {/* 하단 버튼 */}
      <div
        style={{
          textAlign: "center",

          marginTop: "60px",
        }}
      >
        <button
          style={{
            ...styles.button,

            background:
              "linear-gradient(135deg,#7f1d1d,#991b1b)",

            fontSize: "28px",

            padding:
              "22px 40px",
          }}
          onClick={
            handleAllReset
          }
        >
          🔄 전체 시스템 초기화
        </button>
      </div>
    </div>
  );
}