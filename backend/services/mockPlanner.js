import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function generatePlan(goal) {
  try {
    const prompt = `Break down this goal into actionable tasks with timelines and dependencies: ${goal}`;

    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "groq/compound-mini", // ✅ free-tier model you have access to
        messages: [
          { role: "system", content: "You are an expert project planner AI assistant." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    console.log("🔹 Groq response:", JSON.stringify(data, null, 2));

    const text = data?.choices?.[0]?.message?.content || "⚠️ No result returned from Groq.";
    return { goal, plan: text };
  } catch (error) {
    console.error("❌ Error calling Groq API:", error);
    return { goal, plan: "❌ Error generating plan. Please try again." };
  }
}

// Example usage:
(async () => {
  const result = await generatePlan("Launch a personal website in 2 weeks");
  console.log("Generated Plan:", result);
})();
