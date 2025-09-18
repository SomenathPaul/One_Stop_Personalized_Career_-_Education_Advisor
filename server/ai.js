import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

async function main() {
  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "best cse college in kolkata",
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    }
  });
  console.log(response.text);
}

await main();