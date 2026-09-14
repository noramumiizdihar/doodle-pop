# DoodlePop 🎨✨

> **A Fun, Colorful, Child-Friendly Kids Drawing & Coloring Web App**

DoodlePop is a polished, production-ready creative web application designed for young children who love drawing, coloring, creating characters, and experimenting with digital art. Built mobile-first with touch & stylus priority (iPhone, iPad, Android, desktop), tactile bubbly controls, procedural sound effects, and offline PWA capability.

---

## 🌟 Key Features

### 1. 🖌️ Rich Drawing Engine
- **Touch, Stylus & Pointer Native**: Smooth single-finger drawing, Apple Pencil, Android stylus, and mouse/trackpad support.
- **Accidental Touch Protection**: Differentiates 1-finger drawing strokes from 2-finger pan & pinch zoom without leaving accidental marks.
- **Artistic Tools**:
  - **Pencil**: Crisp, smooth line with round caps.
  - **Crayon**: Textured waxy strokes with granular micro-particle jitter and soft edges.
  - **Marker**: Fluid semi-translucent watercolor blend.
  - **Brush**: Rich calligraphic stroke.
  - **Magic Rainbow Brush**: Cycles dynamically through rainbow hues with animated trailing star sparkles.
  - **Fill (Bucket)**: Fast scanline BFS flood-fill with anti-aliased edge tolerance to fill enclosed coloring regions cleanly without boundary leaks.
  - **Eraser**: Clean destination-out erase.
- **Visual Brush Size Previews**: Tactile size circles for Tiny, Small, Medium, Large, and Super Big (XL).
- **Undo / Redo Stack**: State checkpoints for stroke drawing, erasing, and flood fills.

### 2. 🎨 50+ Magic Coloring Pages (15 Categories)
- Animals, Cute Things, Ocean, Dinosaurs, Space, Fantasy, Princess, Vehicles, Food, Nature, Flowers, Houses, Family, Seasons, and Holidays.
- Enclosed SVG vector illustrations supporting both 1-tap bucket fill and freehand coloring.

### 3. 🧩 Creative Studio & Character Builder
- **Build Your Own Character**: Mix-and-match body bases (Friend, Kitty, Robot, Alien) with customizable eyes, mouths, hair, hats, wizard caps, dragon wings, and fluffy tails, plus a "Surprise Me!" randomizer.
- **Stickers & Shapes**: 30+ vector stickers across 6 categories + 8 configurable geometric/whimsical shapes with custom color fills.
- **Full Object Manipulation**: Drag, scale, rotate, duplicate, delete, and layer ordering (Bring Forward ⬆️, Send Back ⬇️).
- **Make It Alive**: Controlled animation presets (Happy Bounce / Wiggle, Dreamy Float, Sunny Spin, Magic Glow, Cute Peep).

### 4. 🌟 Challenges, Connect-the-Dots & Finish-the-Picture
- **20 Creative Challenges**: Positive prompts with encouraging praise (e.g. "Draw a butterfly", "Add something to the sky", "Draw your favorite animal").
- **10 Connect the Dots Puzzles**: Guided numbered dots with musical chimes, sequential tracking, automatic picture reveal, and transition to coloring mode.
- **10 Finish the Picture Templates**: Incomplete illustrations (House without windows, Lion without mane, Butterfly without wings, Car without wheels, etc.).

### 5. 🚀 Multi-Step Drawing Adventures
- **5 Themed Story Worlds**:
  - *Enchanted Forest*
  - *Deep Blue Ocean*
  - *Cosmic Space Odyssey*
  - *Dinosaur Volcano Valley*
  - *Fairy Tale Garden*
- Step-by-step guided story prompts with persistent scene accumulation and celebratory fanfare.

### 6. 🖼️ My Art Gallery, Persistence & Export
- **Continuous Auto-Save**: Automatically debounces and saves artwork to client-side IndexedDB (`idb-keyval`).
- **Session Recovery**: "Continue your drawing?" modal recovers unfinished work if the browser is closed.
- **Gallery Management**: Thumbnail grid, Continue, Duplicate, Inline Rename, Delete, PNG export download, and native Web Share API.

### 7. 🛡️ Child-Safe Parent Mode & Procedural Audio
- **Web Audio API Synthesizer**: Produces pops, brush whooshes, fill bloops, sparkle arpeggios, and celebration fanfare. Works 100% offline with zero external audio assets.
- **Parent Gate**: Protected by a random single-digit addition lock (`3 + 4 = ?`), sound volume & mute controls, and local storage statistics.
- **PWA & Offline Ready**: Standalone manifest, touch prevention, and service worker offline caching.

---

## 🛠️ Tech Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React icons, Google Fonts (Fredoka)
- **Audio**: Web Audio API Procedural Synthesizer
- **Storage**: IndexedDB via `idb-keyval`
- **Celebrations**: `canvas-confetti`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/noramumiizdihar/doodle-pop.git

# Navigate into the project folder
cd doodle-pop

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
```

The production-ready assets will be generated in the `dist` directory.

---

## 📱 PWA & Mobile Installation

- **iOS Safari**: Tap the Share button → "Add to Home Screen"
- **Android Chrome**: Tap the menu (three dots) → "Install app" or "Add to Home screen"

---

## 📄 License

MIT License. Designed with ❤️ for kids and young artists everywhere!
