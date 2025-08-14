import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "../services/prompts";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  maxRetries: 0,
  dangerouslyAllowBrowser: true, // Permite el uso en navegador. Sólo para desarrollo.
});

export async function getGroqChatCompletion(board, model = "openai/gpt-oss-20b") {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: `Analiza el siguiente tablero de tres en raya y devuelve
                  una jugada válida: ${JSON.stringify(board)}`,
      },
    ],
    model: model,
  });
  return response.choices[0]?.message?.content;
}
