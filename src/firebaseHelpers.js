import {
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

// 학생 제출
export async function submitMission(
  team,
  role
) {
  const ref = doc(
    db,
    "missions",
    team
  );

  await setDoc(
    ref,
    {
      [role]: true,
    },
    { merge: true }
  );
}

// 실시간 감지
export function subscribeMission(
  team,
  callback
) {
  const ref = doc(
    db,
    "missions",
    team
  );

  return onSnapshot(
    ref,
    (snapshot) => {
      callback(
        snapshot.data() || {}
      );
    }
  );
}

// 전체 리셋
export async function resetMission(
  team
) {
  const ref = doc(
    db,
    "missions",
    team
  );

  await setDoc(ref, {
    seed: false,
    wind: false,
    cloud: false,
    humidity: false,
    captain: false,
  });
}