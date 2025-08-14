import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAIMove } from '../ollama.js';

// Mock de ollama
vi.mock('ollama', () => ({
  default: {
    generate: vi.fn()
  }
}));

import ollama from 'ollama';

describe('getAIMove', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Limpiar console logs para tests más limpios
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('debería devolver una jugada válida cuando Ollama responde correctamente', async () => {
    // Arrange
    const mockBoard = ['X', '', 'O', '', 'X', '', '', '', ''];
    const mockTurn = 'O';
    const mockResponse = {
      message: {
        content: JSON.stringify({
          posicion: 8,
          simbolo: 'O',
          razonamiento: 'Bloqueo la diagonal principal para evitar que X gane'
        })
      }
    };

    ollama.generate.mockResolvedValue(mockResponse);

    // Act
    const result = await getAIMove(mockBoard, mockTurn);

    // Assert
    expect(result).toEqual({
      posicion: 8,
      simbolo: 'O',
      razonamiento: 'Bloqueo la diagonal principal para evitar que X gane'
    });

    expect(ollama.generate).toHaveBeenCalledWith({
      model: 'llama3.1:latest',
      system: expect.stringContaining('Prompt para IA - Juego Tres en Raya'),
      messages: [
        {
          role: 'user',
          content: JSON.stringify({
            board: mockBoard,
            turn: mockTurn
          })
        }
      ]
    });
  });

  it('debería devolver una jugada aleatoria válida cuando Ollama responde con JSON inválido', async () => {
    // Arrange
    const mockBoard = ['X', '', 'O', '', '', '', '', '', ''];
    const mockTurn = 'X';
    const mockResponse = {
      message: {
        content: 'Respuesta inválida no JSON'
      }
    };

    ollama.generate.mockResolvedValue(mockResponse);

    // Act
    const result = await getAIMove(mockBoard, mockTurn);

    // Assert
    expect(result).toHaveProperty('posicion');
    expect(result).toHaveProperty('simbolo', mockTurn);
    expect(result).toHaveProperty('razonamiento', 'Jugada aleatoria debido a error en respuesta de IA');
    
    // Verificar que la posición es válida (casilla vacía)
    const availablePositions = [1, 3, 4, 5, 6, 7, 8];
    expect(availablePositions).toContain(result.posicion);
  });

  it('debería devolver una jugada aleatoria válida cuando hay error de conexión', async () => {
    // Arrange
    const mockBoard = ['', 'X', '', 'O', '', '', '', '', ''];
    const mockTurn = 'X';

    ollama.generate.mockRejectedValue(new Error('Error de conexión'));

    // Act
    const result = await getAIMove(mockBoard, mockTurn);

    // Assert
    expect(result).toHaveProperty('posicion');
    expect(result).toHaveProperty('simbolo', mockTurn);
    expect(result).toHaveProperty('razonamiento', 'Jugada aleatoria debido a error de conexión');
    
    // Verificar que la posición es válida (casilla vacía)
    const availablePositions = [0, 2, 4, 5, 6, 7, 8];
    expect(availablePositions).toContain(result.posicion);
  });

  it('debería manejar tableros con pocas casillas disponibles', async () => {
    // Arrange
    const mockBoard = ['X', 'O', 'X', 'O', 'X', 'O', '', 'X', 'O'];
    const mockTurn = 'O';
    const mockResponse = {
      message: {
        content: JSON.stringify({
          posicion: 6,
          simbolo: 'O',
          razonamiento: 'Única casilla disponible'
        })
      }
    };

    ollama.generate.mockResolvedValue(mockResponse);

    // Act
    const result = await getAIMove(mockBoard, mockTurn);

    // Assert
    expect(result.posicion).toBe(6);
    expect(result.simbolo).toBe('O');
  });

  it('debería manejar tablero vacío correctamente', async () => {
    // Arrange
    const mockBoard = ['', '', '', '', '', '', '', '', ''];
    const mockTurn = 'X';
    const mockResponse = {
      message: {
        content: JSON.stringify({
          posicion: 4,
          simbolo: 'X',
          razonamiento: 'Tomo el centro como primera jugada estratégica'
        })
      }
    };

    ollama.generate.mockResolvedValue(mockResponse);

    // Act
    const result = await getAIMove(mockBoard, mockTurn);

    // Assert
    expect(result.posicion).toBe(4);
    expect(result.simbolo).toBe('X');
    expect(result.razonamiento).toBe('Tomo el centro como primera jugada estratégica');
  });

  it('debería validar que la posición devuelta esté en el rango válido', async () => {
    // Arrange
    const mockBoard = ['X', '', '', '', '', '', '', '', ''];
    const mockTurn = 'O';

    // Simular error de JSON parsing para forzar fallback
    ollama.generate.mockResolvedValue({
      message: { content: 'invalid json' }
    });

    // Act
    const result = await getAIMove(mockBoard, mockTurn);

    // Assert
    expect(result.posicion).toBeGreaterThanOrEqual(0);
    expect(result.posicion).toBeLessThanOrEqual(8);
    expect(['X', 'O'].includes(result.simbolo)).toBe(true);
  });

  it('debería llamar a Ollama con el prompt correcto', async () => {
    // Arrange
    const mockBoard = ['X', '', '', '', '', '', '', '', ''];
    const mockTurn = 'O';
    
    ollama.generate.mockResolvedValue({
      message: { content: JSON.stringify({ posicion: 1, simbolo: 'O', razonamiento: 'Test' }) }
    });

    // Act
    await getAIMove(mockBoard, mockTurn);

    // Assert
    expect(ollama.generate).toHaveBeenCalledWith(
      expect.objectContaining({
        model: 'llama3.1:latest',
        system: expect.stringContaining('Eres una IA experta en el juego de tres en raya'),
        messages: expect.arrayContaining([
          expect.objectContaining({
            role: 'user',
            content: expect.stringContaining('"board"')
          })
        ])
      })
    );
  });
});
