# 🎮 Tic Tac Toe - React Game

Un juego clásico de **Tres en Raya** (Tic Tac Toe) desarrollado con React y Vite. Disfruta de una interfaz moderna, animaciones suaves y efectos visuales como confeti cuando ganas.

![Tic Tac Toe Preview](https://img.shields.io/badge/Status-Completed-brightgreen)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite)

## ✨ Características

- 🎯 **Juego clásico** de Tres en Raya para dos jugadores
- 🎨 **Interfaz moderna** con CSS variables y animaciones
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

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React reutilizables
│   ├── Board.jsx        # Componente del tablero de juego
│   ├── Square.jsx       # Componente de cada casilla
│   ├── TurnIndicator.jsx # Indicador de turno actual
│   └── WinnerModal.jsx  # Modal para mostrar el ganador
├── constants/           # Constantes del juego
│   ├── gameConstants.js # Combinaciones ganadoras
│   └── turns.js         # Definición de turnos (✖, ◯)
├── utils/              # Utilidades y lógica del juego
│   └── gameLogic.js    # Funciones para verificar ganador
├── App.jsx             # Componente principal
├── App.css             # Estilos específicos del componente
├── index.css           # Estilos globales optimizados con variables CSS
└── main.jsx            # Punto de entrada de la aplicación
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

```

## 👨‍💻 Autor y atribuciones

Desarrollado como proyecto de aprendizaje de React inspirado en el curso de React de [midudev](https://github.com/midudev/aprendiendo-react/blob/master/projects/02-tic-tac-toe/src/App.jsx)

---