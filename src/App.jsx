import { useState } from "react";

import StartPage from "./pages/StartPage";
import TeamPage from "./pages/TeamPage";
import RolePage from "./pages/RolePage";
import OXQuizPage from "./pages/OXQuizPage";
import MultipleChoicePage from "./pages/MultipleChoicePage";
import SequencePage from "./pages/SequencePage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  const [page, setPage] =
    useState("start");

  const [selectedTeam, setSelectedTeam] =
    useState("");

  const [selectedRole, setSelectedRole] =
    useState("");

  if (page === "start") {
    return (
      <StartPage setPage={setPage} />
    );
  }

  if (page === "team") {
    return (
      <TeamPage
        setPage={setPage}
        setSelectedTeam={setSelectedTeam}
      />
    );
  }

  if (page === "role") {
    return (
      <RolePage
        setPage={setPage}
        setSelectedRole={setSelectedRole}
      />
    );
  }

  if (page === "ox") {
    return (
      <OXQuizPage setPage={setPage} />
    );
  }

  if (page === "multiple") {
    return (
      <MultipleChoicePage
        setPage={setPage}
      />
    );
  }

  if (page === "sequence") {
    return (
      <SequencePage
        setPage={setPage}
      />
    );
  }

  if (page === "result") {
    return (
      <ResultPage
        selectedRole={selectedRole}
        selectedTeam={selectedTeam}
      />
    );
  }

  return null;
}