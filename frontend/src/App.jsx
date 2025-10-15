import React, { useState } from "react";
import GoalInput from "./components/GoalInput";
import { getPlan } from "./api";

export default function App() {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGoalSubmit = async (goal) => {
    setLoading(true);
    const result = await getPlan(goal);
    setPlan(result);
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: 20,
        fontFamily: "sans-serif",
      }}
    >
      <h1>🧩 Smart Task Planner</h1>
      <GoalInput onSubmit={handleGoalSubmit} />
      {loading && <p>⏳ Generating plan...</p>}
      {plan && (
        <div style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
          <h3>📅 Plan for: {plan.goal}</h3>
          {plan.plan}
        </div>
      )}
    </div>
  );
}
