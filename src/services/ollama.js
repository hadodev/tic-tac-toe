import { Ollama } from "ollama";
import { SYSTEM_PROMPT } from "./prompts";

// Configurar la URL de Ollama
const ollama = new Ollama({ host: "http://localhost:11434" });

export async function getOllamaChatCompletion(board, model = "gemma3:1b") {
  const response = await ollama.chat({
    model: model,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Analiza el siguiente tablero de tres en raya y devuelve
                  una jugada válida: ${JSON.stringify(board)}`,
      },
    ],
    options: {
      temperature: 0,
    },
  });
  console.log("Response:", response.message.content);
  return response.message.content;
}
