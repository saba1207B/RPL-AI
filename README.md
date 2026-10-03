# AI-Assisted Skill Assessment Tool for Recognition of Prior Learning (RPL)

> **SIH26242** | **Theme:** Smart Education | **Category:** Software  
> **Sponsor:** Ministry of Skill Development and Entrepreneurship (MSDE) / NCVET

An AI-assisted, offline-first assessment web application designed to evaluate informal workers' prior on-the-job experience against National Skills Qualification Framework (NSQF) qualification packs, while preserving the human assessor's final statutory authority.

---

## 🚀 Key Features

- **Dual-Theme Design System**:
  - **THEME 1 (Portfolio / Creative)**: High-energy creative theme with full-bleed cobalt hero (`#3047E8`), animated geometric shapes, 3D CSS atom/orbital animation, infinite marquee ticker, and dark feature cards.
  - **THEME 2 (Government / Trust & Clarity)**: Formal, accessible institutional interface featuring deep navy (`#1B2A4A`) and teal (`#0D9488`), clean card layouts, and official government typography.
- **Multilingual Inclusivity (22+ Languages)**:
  - 100% native translations across all **22 Eighth Schedule Indian Languages** (Hindi, Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Maithili, Santhali in Ol Chiki, Kashmiri, Nepali, Sindhi, Konkani, Dogri, Manipuri in Meetei Mayek, Bodo, Sanskrit) + English.
  - RTL (Right-to-Left) script layout support for Urdu, Kashmiri, and Sindhi.
- **Guided 4-Step Self-Declaration**:
  - **Step 1**: Low-literacy pictorial trade selection (Electrician, Plumber, Welder, Carpenter, Mason, Tailor, Cook, Driver, Other).
  - **Step 2**: Voice input with animated audio visualizer and low-literacy experience prompts.
  - **Step 3**: Practical task evidence capture (Photo, Video, Paper/Docs) with offline local buffer indicators.
  - **Step 4**: Real-time NSQF Qualification Pack mapping (e.g., Construction Welder `ELE/Q3102` Level 4) with confidence match score and National Occupational Standards (NOS) breakdown.
- **Assessor Scoring Interface**:
  - Standardized 3-state rubrics (`Yes / Competent`, `Partial / Needs Review`, `No / Not Yet Competent`) across specific Performance Criteria (PCs) to minimize evaluator variance across test centers.
  - AI evidence cues (timestamped video highlights, voice keyword matches).
  - Four explicit assessor sign-off decisions (`Save Draft`, `Not Yet Competent`, `Request Evidence`, `Recommend Certification`).
- **Offline-First & Low-Bandwidth Ready**:
  - Live offline status indicators, client-side data buffering, and auto-sync triggers.
- **Demo Mode Transparency**:
  - Persistent sticky banner clarifying functional demonstration boundaries, simulated AI inference endpoints due to GPU constraints, and active assessor interaction.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6)
- **Typography**: Space Grotesk, DM Sans, IBM Plex Mono

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/saba1207B/RPL-AI.git
cd RPL-AI

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` (or the port indicated in your terminal) to explore the application.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🏛️ Pages & Workflows

1. **Landing Page (`/`)**: Dual-themed introduction, trade exploration, and workflow overview.
2. **Self-Declaration Wizard (`/self-declaration`)**: 4-step candidate intake with voice input, media capture, and NSQF QP mapping.
3. **Candidate Dashboard (`/candidate`)**: Application tracking, pending evidence requests, certification download, and offline sync status.
4. **Assessor Dashboard (`/assessor`)**: Candidate search, evidence review panel, NOS/PC standardized scoring, and human-in-the-loop certification sign-off.

---

## 📜 License

This project is developed for the Smart India Hackathon (SIH) under the Ministry of Skill Development and Entrepreneurship (MSDE).
