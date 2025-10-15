export const getPlan = async (goal) => {
  try {
    const res = await fetch("http://localhost:5000/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error fetching plan:", err);
    return { plan: "Unable to fetch plan" };
  }
};
