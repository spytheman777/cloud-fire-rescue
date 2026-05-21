import { useState } from "react";

// 시작화면
import StartPage from "./pages/StartPage";

// 학생용
import TeamPage from "./pages/TeamPage";
import RolePage from "./pages/RolePage";
import OXQuizPage from "./pages/OXQuizPage";
import MultipleChoicePage from "./pages/MultipleChoicePage";
import SequencePage from "./pages/SequencePage";
import ResultPage from "./pages/ResultPage";

// 교사용
import TeacherStartPage from "./pages/TeacherStartPage";
import TeacherMainPage from "./pages/TeacherMainPage";

// 중앙본부
import CentralDashboardPage from "./pages/CentralDashboardPage";

export default function App() {
  const [page, setPage] =
    useState("start");

  // 학생용
  const [selectedTeam, setSelectedTeam] =
    useState("");

  const [selectedRole, setSelectedRole] =
    useState("");

  // 교사용
  const [teacherTeam, setTeacherTeam] =
    useState("");

  const [members, setMembers] =
    useState([]);

  // 시작 화면
  if (page === "start") {
    return (
      <StartPage setPage={setPage} />
    );
  }

  // 학생 팀 선택
  if (page === "team") {
    return (
      <TeamPage
  setPage={setPage}
  selectedTeam={
    selectedTeam
  }
  setSelectedTeam={
    setSelectedTeam
  }
      />
    );
  }

  // 역할 선택
  if (page === "role") {
    return (
      <RolePage
        setPage={setPage}
        setSelectedRole={
          setSelectedRole
        }
      />
    );
  }

  // OX 퀴즈
  if (page === "ox") {
    return (
      <OXQuizPage
        setPage={setPage}
      />
    );
  }

  // 객관식
  if (
    page === "multiple"
  ) {
    return (
      <MultipleChoicePage
        setPage={setPage}
      />
    );
  }

  // 순서 배열
  if (
    page === "sequence"
  ) {
    return (
      <SequencePage
        setPage={setPage}
      />
    );
  }

  // 결과 화면
  if (page === "result") {
    return (
      <ResultPage
        selectedRole={
          selectedRole
        }
        selectedTeam={
          selectedTeam
        }
      />
    );
  }

  // 교사용 로그인
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

  // 중앙 재난본부
  if (
    page === "dashboard"
  ) {
    return (
      <CentralDashboardPage />
    );
  }

  return null;
}