# 🎮 Tic Tac Toe - React Game - IA mode

Un juego clásico de **Tres en Raya** (Tic Tac Toe) desarrollado con React y Vite. Disfruta de una interfaz moderna, animaciones suaves y efectos visuales como confeti cuando ganas. Contiene el modo de IA para jugar contra un LLM como gpt-oss o gemini3:1.

![Tic Tac Toe Preview](https://img.shields.io/badge/Status-Completed-brightgreen)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite)

## Demo live (sin el modo IA)
![hadodev-tic-tac-toe.netlify.app](https://hadodev-tic-tac-toe.netlify.app/)

## ✨ Características

- 🎯 **Juego clásico** de Tres en Raya para dos jugadores
- 🎨 **Interfaz moderna** con CSS variables y animaciones
- 🤖 **Inteligencia Artificial** con dos opciones: Groq (nube) y Ollama (local)
- 🎊 **Efectos visuales** con confeti al ganar
- 📱 **Diseño responsivo** que funciona en cualquier dispositivo
- ⚡ **Desarrollo rápido** con Vite y Hot Module Replacement
- 🔄 **Reinicio de partida** en cualquier momento
- 🏆 **Modal animado** para mostrar el ganador
- 💫 **Transiciones suaves** y hover effects
- 🌈 **Título con degradado** usando los colores de los jugadores
- ✨ **Símbolos elegantes** (✖ y ◯) con colores distintivos
- 🎭 **Efectos de resplandor** para mejor contraste visual
- 🏗️ **Arquitectura modular** con componentes separados

## 🛠️ Tecnologías Utilizadas

- **React 18+** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida y moderna
- **CSS3** - Estilos modernos con variables CSS y animaciones
- **JavaScript ES6+** - Sintaxis moderna de JavaScript
- **Canvas Confetti** - Efectos de confeti para celebrar victorias
- **Groq** - API de IA en la nube para modelos avanzados
- **Ollama** - Ejecución local de modelos de IA

## 🚀 Instalación y Uso

### Prerrequisitos

Asegúrate de tener instalado en tu máquina:
- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** o **yarn** (viene incluido con Node.js)

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o si prefieres yarn
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o con yarn
   yarn dev
   ```

4. **Abre tu navegador**
   
   El juego estará disponible en: `http://localhost:5173`

### Comandos disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción
npm run lint         # Ejecuta el linter para revisar el código
```

### 🚀 Construcción para Producción

Para generar una versión optimizada del proyecto:

```bash
# Construir para producción
npm run build
```

Esto generará una carpeta `dist/` con los archivos optimizados:
- **HTML minificado** con meta tags SEO
- **CSS optimizado** (≈3.77 kB, gzip: 1.38 kB)
- **JavaScript minificado** (≈199.93 kB, gzip: 63.90 kB)
- **Cache busting** con hashes en los nombres de archivo

```bash
# Previsualizar la build de producción
npm run preview
# Disponible en: http://localhost:4173/
```

## 🎮 Cómo Jugar

1. **Dos jugadores se alternan** colocando ✖ (coral) y ◯ (cyan) en el tablero
2. **El objetivo** es conseguir tres símbolos iguales en línea (horizontal, vertical o diagonal)
3. **Primer jugador** siempre juega con ✖ (color coral brillante)
4. **Segundo jugador** juega con ◯ (color cyan brillante)
5. **Click en cualquier casilla** vacía para hacer tu movimiento
6. **El indicador de turno** muestra quién debe jugar con colores distintivos
7. **¡Disfruta del confeti** cuando ganes! 🎊
8. **El modal aparece** con un elegante para anunciar el jugador
9. **Usa "Reset Game"** para empezar una nueva partida

## 🤖 Inteligencia Artificial (IA)

El juego incluye **dos opciones de IA** para jugar contra el ordenador:

### 🧠 Funcionamiento de la IA

La IA utiliza una **estrategia inteligente** que sigue esta prioridad:

1. **🏆 Ganar**: Si puede completar tres en línea, lo hace inmediatamente
2. **🛡️ Bloquear**: Si el jugador puede ganar en su próximo turno, lo bloquea
3. **🎯 Estratégica**: Si no hay amenazas inmediatas, juega estratégicamente:
   - Prioriza el **centro** (posición 4)
   - Luego las **esquinas** (posiciones 0, 2, 6, 8)
   - Finalmente los **lados** (posiciones 1, 3, 5, 7)

### ⚡ Groq (Por Defecto) - Recomendado

**Groq** es la opción **por defecto** que funciona con modelos de IA en la nube:

#### 📋 Configuración de Groq:

1. **Obtén una API key gratuita**:
   - Visita [https://console.groq.com/](https://console.groq.com/)
   - Regístrate con tu cuenta (GitHub, Google, etc.)
   - Ve a "API Keys" y crea una nueva clave
   - Copia la clave generada

2. **Configura la variable de entorno**:
   ```bash
   # Crea un archivo .env en la raíz del proyecto
   echo "VITE_GROQ_API_KEY=tu_clave_api_aqui" > .env
   ```

3. **Modelo usado por defecto**:
   - `openai/gpt-oss-20b`


### 🏠 Ollama (Alternativa Local)

**Ollama** permite ejecutar la IA **completamente local** en tu ordenador:

#### 📋 Instalación de Ollama:

1. **Descarga Ollama**:
   - **Windows/Mac**: [https://ollama.ai/download](https://ollama.ai/download)
   - **Linux**: `curl -fsSL https://ollama.ai/install.sh | sh`

2. **Instala el modelo recomendado**:
   ```bash
   # Descarga el modelo usado por defecto
   ollama pull gemma3:1b
   ```

3. **Inicia el servidor**:
   ```bash
   # El servidor se inicia automáticamente, pero puedes verificar:
   ollama serve
   # Disponible en: http://localhost:11434
   ```

4. **Cambia al modo Ollama** (opcional):
   ```javascript
   // En src/App.jsx, cambia el modelo getGroqAIMove por:
   import { getOllamaAIMove } from "./services/aiLogic";;  // En lugar de groq
   ```

### 🎮 Activar el Modo IA

1. **Inicia el juego** con `npm run dev`
2. **Selecciona "VS IA"** en el selector de modo de juego
3. **Juega normalmente** - La IA jugará automáticamente como ◯ (cyan)
4. **¡Disfruta el desafío!** - La IA es un oponente inteligente


## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React reutilizables
│   ├── Board.jsx         # Componente del tablero de juego
│   ├── GameMode.jsx      # Selector de modo (Humano vs IA)
│   ├── Square.jsx        # Componente de cada casilla
│   ├── TurnIndicator.jsx # Indicador de turno actual
│   └── WinnerModal.jsx   # Modal para mostrar el ganador
├── constants/            # Constantes del juego
│   ├── gameConstants.js  # Combinaciones ganadoras
│   └── turns.js          # Definición de turnos y roles (✖, ◯)
├── services/             # Servicios de Inteligencia Artificial
│   ├── aiLogic.js        # Lógica principal de IA y coordinación
│   ├── groq.js           # Servicio Groq (IA en la nube) - Por defecto
│   ├── ollama.js         # Servicio Ollama (IA local)
│   └── prompts.js        # Prompts del sistema para la IA
├── utils/                # Utilidades y lógica del juego
│   └── gameLogic.js      # Funciones para verificar ganador y empate
├── test/                 # Configuración de tests
│   └── setup.js          # Setup para Vitest y testing library
├── App.jsx               # Componente principal de la aplicación
├── App.css               # Estilos específicos del componente
├── index.css             # Estilos globales con variables CSS
└── main.jsx              # Punto de entrada de la aplicación
```

## 🎨 Características Técnicas

- **Componentes funcionales** con React Hooks
- **Estado local** manejado con useState
- **CSS Variables** para temas consistentes y colores de jugadores
- **Degradados CSS** en el título con colores dinámicos
- **Efectos visuales** con text-shadow y resplandor
- **Arquitectura modular** con separación de responsabilidades
- **Símbolos Unicode** elegantes (✖ y ◯) en lugar de texto simple
- **Colores de alto contraste** para mejor accesibilidad
- **Animaciones CSS** con transiciones suaves
- **Código limpio** y bien documentado
- **Patrones de React** modernos y mejores prácticas
- **SEO optimizado** con meta tags descriptivos
- **Internacionalización** configurada para español
- **Build optimizado** con minificación y compresión gzip

## 🎨 Diseño Visual

### Colores de Jugadores
- **Jugador ✖**: Color coral brillante (`#ff6b7a`) con efecto de resplandor
- **Jugador ◯**: Color cyan brillante (`#00d2ff`) con efecto de resplandor

### Efectos Especiales
- **Título degradado**: Combinación de colores de ambos jugadores
- **Símbolos elegantes**: Unicode moderno en lugar de letras simples
- **Alto contraste**: Optimizado para fondo oscuro (#242424)
- **Resplandor sutil**: Text-shadow para mejor visibilidad

## 👨‍💻 Autor y atribuciones

Desarrollado como proyecto de aprendizaje de React inspirado en el curso de React de [midudev](https://github.com/midudev/aprendiendo-react/blob/master/projects/02-tic-tac-toe/src/App.jsx)

**README.md** elaborado por **GitHub Copilot** 🤖
---