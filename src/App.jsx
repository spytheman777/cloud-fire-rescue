import { useState } from "react";

import StartPage from "./pages/StartPage";

import TeacherStartPage from "./pages/TeacherStartPage";

import TeacherMainPage from "./pages/TeacherMainPage";

import CentralDashboardPage from "./pages/CentralDashboardPage";

export default function App() {
  const [page, setPage] =
    useState("start");

  const [teacherTeam, setTeacherTeam] =
    useState("");

  const [members, setMembers] =
    useState([]);

  // 시작
  if (page === "start") {
    return (
      <StartPage setPage={setPage} />
    );
  }

  // 상황실 로그인
  if (
    page === "teacherStart"
  ) {
    return (
      <TeacherStartPage
        setPage={setPage}
        setTeacherTeam={
          setTeacherTeam
        }
        setMembers={setMembers}
      />
    );
  }

  // 조별 상황실
  if (
    page === "teacherMain"
  ) {
    return (
      <TeacherMainPage
        teacherTeam={
          teacherTeam
        }
        members={members}
      />
    );
  }

  // 중앙 대시보드
  if (
    page === "dashboard"
  ) {
    return (
      <CentralDashboardPage />
    );
  }

  return null;
}