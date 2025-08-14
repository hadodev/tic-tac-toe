import { getGroqChatCompletion } from "./groq";
import { getOllamaChatCompletion } from "./ollama";

// Fallback function para jugadas aleatorias
async function getRandomMove(board) {
  const availablePositions = board
    .map((cell, index) => (cell === null || cell === "" ? index : null))
    .filter((pos) => pos !== null);

  if (availablePositions.length === 0) {
    throw new Error("No hay posiciones disponibles en el tablero");
  }

  return {
    position: availablePositions[Math.floor(Math.random() * availablePositions.length)],
  };
}

export async function getAIMove(getAIResponse, board, attempt = 1) {
  console.log("Solicitando jugada a IA...");
  console.log("Tablero actual:", board);
  console.log("Ejecutando IA.completion con el modelo y el prompt");
  console.log("Intento:", attempt);

  if (attempt > 3) {
    console.warn("Demasiados intentos, eligiendo movimiento aleatorio.");
    return await getRandomMove(board);
  }

  try {
    const response = await getAIResponse(board);
    console.log("Respuesta de IA recibida: ", response);
    // Verificar que la respuesta tenga el formato esperado
    if (!response) {
      console.warn("Respuesta de IA mal formateada:", response);
      const randomMove = await getRandomMove(board);
      return randomMove;
    } else if (response === "fin") {
      console.warn("El juego ya ha terminado, no se puede hacer más jugadas.");
      return null; // O manejar el fin del juego de otra manera
    }
    if (board[response] !== null) {
      console.warn("Posición ya ocupada, reintentando...");
      return await getAIMove(board, attempt + 1);
    }

    return parseInt(JSON.parse(response));
  } catch (error) {
    console.error("Error llamando a IA:", error);
    const randomMove = await getRandomMove(board);
    return randomMove;
  }
}

export async function getGroqAIMove(board, turn) {
  return await getAIMove(getGroqChatCompletion, board, turn);
}

export async function getOllamaAIMove(board) {
  return await getAIMove(getOllamaChatCompletion, board);
}
