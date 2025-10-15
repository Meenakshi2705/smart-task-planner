import React, { useState } from "react";

export default function GoalInput({ onSubmit }) {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      onSubmit(goal);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Enter your goal (e.g. Build a portfolio in 1 week)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ width: "100%", padding: 10, fontSize: 16 }}
      />
      <button type="submit" style={{ marginTop: 10, padding: "10px 20px" }}>
        Generate
      </button>
    </form>
  );
}
