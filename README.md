# 🚀 ABTalks — 60-Day Coding Challenge

### **60 Days. One Commit. One Future.**

A premium, mobile-first redesign of **ABTalks**, built for the VicoDathon hackathon.

ABTalks is designed around a simple idea:

> **Don't just learn to code. Build something every day and create public proof of your progress.**

Students follow a 60-day coding journey, build projects, submit GitHub proof, share their progress on LinkedIn, and track their growth through streaks, achievements, and momentum.

---

## 🌐 Live Demo

**Live Application:**
https://build60.lovable.app

**GitHub Repository:**
https://github.com/dhanush080607/VicoDathon-pb-1

**LinkedIn:**
https://www.linkedin.com/in/h-dhanush-189565327/

---

# 🎯 The Problem

College students learn programming through courses, tutorials, assignments, and projects — but maintaining consistency is difficult.

Many students struggle with:

* Starting projects but not finishing them
* Losing motivation after a few days
* Not documenting their learning
* Having little public proof of their skills
* Building portfolios only when placements are approaching

ABTalks addresses this through a structured **60-day build-in-public journey**.

---

# 💡 The Solution

ABTalks turns daily coding into a measurable journey:

```text
Choose a Track
      ↓
Build Something
      ↓
Commit to GitHub
      ↓
Share on LinkedIn
      ↓
Reflect on Learning
      ↓
Build Your Streak
      ↓
Grow Your Portfolio
```

The product is designed to make progress visible, motivating, and career-oriented.

---

# 🏆 What Makes This Experience Different?

Instead of creating another course dashboard, the redesign focuses on **momentum**.

The student should feel:

```text
"I started."
      ↓
"I'm making progress."
      ↓
"I don't want to break my streak."
      ↓
"I have proof of what I built."
      ↓
"I'm becoming a better developer."
```

---

# 📱 Mobile-First Design

The primary experience is designed for a **390px mobile viewport**.

This reflects the real usage context:

> Students accessing the platform from their phones, often late at night after college.

### Design priorities

* Mobile-first layouts
* Large touch targets
* Fast content scanning
* Clear visual hierarchy
* Dark-first interface
* Strong progress feedback
* Smooth interactions
* Responsive components
* Minimal cognitive load

Desktop is treated as a secondary experience.

---

# 🎨 Visual Direction

The interface combines ideas from modern developer and consumer products such as:

* Linear
* GitHub
* Apple
* Notion
* Duolingo

### Design language

```text
Deep Black
     +
Electric Blue
     +
Purple Highlights
     +
Glassmorphism
     +
Motion
     +
Developer-focused UI
```

The goal is to make the platform feel like a **real startup product**, rather than a college project.

---

# 🗺️ Route Map

The hackathon requires these three routes:

```text
/
/dashboard
/day/12
```

### `/`

Landing page for students discovering ABTalks for the first time.

### `/dashboard`

Personal student progress and daily mission center.

### `/day/12`

Complete Day 12 challenge and proof-of-work experience.

---

# ✨ Core Features

## 1. 🚀 Landing Page

### Route

```text
/
```

The landing page introduces ABTalks to a student who has never used the platform.

### Hero

> **60 Days. One Commit. One Future.**

Supporting message:

> Build every day. Showcase your progress. Become visible to recruiters.

### Includes

* Primary challenge CTA
* Track exploration
* Coding streak visualization
* GitHub proof concept
* LinkedIn proof concept
* Project-building benefits
* Challenge statistics
* AI Coding Coach introduction
* Challenge workflow

---

# 2. 📊 Student Dashboard

### Route

```text
/dashboard
```

The dashboard acts as the student's daily command center.

### Includes

* Student profile
* Current streak
* Challenge progress
* Today's mission
* 60-day progress tracker
* Achievement badges
* Rank information
* Momentum score
* AI Coding Coach
* Recovery states

---

# 🔥 Momentum Score

A central gamification concept in the experience.

The score communicates how actively a student is progressing through the challenge.

Example:

```text
87 / 100

You're ahead of 74% of participants.
```

The prototype models momentum around:

```text
GitHub Proof              +40
LinkedIn Proof            +30
Daily Checklist           +20
Reflection                +10
──────────────────────────────
Maximum                   100
```

The score is designed to turn consistency into something students can immediately understand.

---

# 🏅 Achievement System

Students can unlock milestones throughout their journey.

Examples:

```text
🏆 First Commit
🔥 7 Day Warrior
🚀 Project Builder
```

The interface supports:

* Locked achievements
* Unlocked achievements
* Progress indicators
* Visual feedback
* Achievement states

---

# 🧑‍💻 Challenge Day

### Route

```text
/day/12
```

The Challenge Day screen provides the complete experience required to finish a daily challenge.

### Example Mission

**AI Resume Analyzer**

Students can see:

* Today's mission
* Project description
* Learning goals
* Difficulty
* Estimated time
* Build checklist

---

# ✅ Interactive Build Checklist

Students can track their work as they build.

Example:

```text
☑ Setup project
☑ Build interface
☐ Connect AI API
☐ Deploy project
```

Checklist interactions update the student's progress state.

---

# 🔗 Proof of Work

A core principle of ABTalks is:

> **Show what you built.**

Students provide:

### GitHub

```text
Repository URL
Commit URL
```

### LinkedIn

```text
LinkedIn Post URL
```

The interface includes validation states for:

* Empty fields
* Invalid URLs
* Valid submissions
* Successful proof state

---

# 📝 Reflection Journal

Completing a challenge isn't only about submitting code.

Students are encouraged to reflect:

### What did you learn today?

### What challenge did you overcome?

Reflection data is stored locally in the prototype and presented as part of the student's learning history.

This creates a record of **how the student grew**, not just what they submitted.

---

# 🤖 AI Coding Coach

The platform includes an interactive AI-style coaching experience.

The coach provides contextual encouragement around:

* Streaks
* Progress
* Next milestones
* Daily motivation
* Recommended next actions

Example:

> **"Your streak is strong. Complete today's commit to stay ahead."**

The goal is to make the student feel guided throughout the 60-day journey.

---

# 🎮 Gamification

The experience uses several lightweight gamification mechanisms:

### 🔥 Streak

Encourages daily consistency.

### 📈 Progress

Shows how far the student has travelled.

### 🏆 Achievements

Turns milestones into visible rewards.

### 🏅 Rank

Creates a sense of competitive progress.

### ⚡ Momentum

Communicates the student's current activity level.

The objective is not to gamify coding for its own sake.

The objective is to make **consistent building feel rewarding**.

---

# 🧠 Thoughtful UX Decisions

## First-Day Experience

A new student should not feel lost.

Example:

```text
Welcome, Explorer 🚀

Your first commit starts your journey.
```

---

## Missed-Day Experience

Instead of simply showing failure:

```text
You missed yesterday.

Recover your momentum today.
```

The design focuses on **recovery rather than punishment**.

---

## Empty Profile

Students without a configured track are guided toward:

```text
Choose your first challenge track.
```

This gives every state a useful next action.

---

# 🏗️ Product Architecture

```text
                         ABTalks
                            │
                            ▼
                    React Application
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
          Landing       Dashboard     Challenge
              │             │             │
              └─────────────┼─────────────┘
                            ▼
                     Shared UI State
                            │
                ┌───────────┴───────────┐
                ▼                       ▼
            Mock Data               LocalStorage
                │                       │
                └───────────┬───────────┘
                            ▼
                      Student Journey
```

---

# 🛠️ Technology Stack

| Technology    | Role                             |
| ------------- | -------------------------------- |
| React         | Frontend application             |
| TypeScript    | Type-safe development            |
| Tailwind CSS  | Styling and responsive layouts   |
| shadcn/ui     | Reusable UI components           |
| Framer Motion | Animations and transitions       |
| Lucide React  | Interface icons                  |
| Vite          | Development and build tooling    |
| LocalStorage  | Client-side persistence          |
| Mock Data     | Prototype student/challenge data |

---

# 📂 Project Structure

```text
VicoDathon-pb-1/
│
├── .lovable/
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   └── routeTree.gen.ts
│
├── .gitignore
├── .prettierrc
├── AGENTS.md
├── bun.lock
├── bunfig.toml
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

# ⚙️ Functional Experience

This is designed as an interactive prototype rather than a static visual mockup.

### State & Persistence

The application uses React state and local storage for client-side persistence.

### Navigation

The required routes are implemented:

```text
/
/dashboard
/day/12
```

### Interactive Elements

The experience includes interactions for:

* Track selection
* Dashboard navigation
* Progress tracking
* Achievement states
* Challenge checklist
* Proof submission
* Reflection inputs
* AI Coach
* Rank information
* Responsive UI elements

---

# 🔐 Scope & Constraints

The hackathon explicitly keeps several production systems out of scope.

Therefore, this prototype does **not** require:

* Authentication
* Production user accounts
* Production database
* Recruiter dashboard
* Admin panel

Mock data and client-side persistence are used to demonstrate the complete product experience.

---

# 🧪 Local Development

## Prerequisites

Install:

* Node.js
* npm

The repository also contains Bun configuration and a `bun.lock` file.

---

## Clone

```bash
git clone https://github.com/dhanush080607/VicoDathon-pb-1.git
```

```bash
cd VicoDathon-pb-1
```

---

## Install Dependencies

Using npm:

```bash
npm install
```

Or using Bun:

```bash
bun install
```

---

## Start Development Server

```bash
npm run dev
```

Or:

```bash
bun run dev
```

Then open the local development URL shown in the terminal.

---

# 🏭 Production Build

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 📱 Recommended Testing

The hackathon evaluates the application at:

```text
390px width
```

Before submission, verify:

* No horizontal scrolling
* All text is readable
* Buttons are easily tappable
* Cards fit the viewport
* Navigation works
* Forms work
* Animations do not obstruct content
* All required routes load correctly

---

# 📈 Development History

The repository contains an iterative development history with multiple UI and feature improvements.

Examples include:

```text
AI Coach
AnimatedNumber
BadgeGrid
Confetti
ExportFlow
Onboarding
ProgressTracker
RankCard
```

The repository currently contains **33 commits**, reflecting iterative development of the application.

---

# 🌐 Deployment

Recommended deployment architecture:

```text
Local Development
       ↓
Git
       ↓
GitHub
       ↓
Vercel / Lovable
       ↓
Live Application
```

### Current Live Prototype

https://build60.lovable.app

---

# 🚀 Future Roadmap

The current implementation is a hackathon-focused prototype.

A production version could expand into:

## Phase 1 — MVP

* 60-day challenges
* Streak tracking
* GitHub proof
* LinkedIn proof
* Achievements
* Reflection journal
* AI Coach

## Phase 2 — Real Integrations

* GitHub API
* Authentication
* Cloud database
* Real-time leaderboard
* Verified submissions

## Phase 3 — AI Personalization

* AI project recommendations
* Skill-gap analysis
* Personalized challenge paths
* AI portfolio feedback
* Adaptive difficulty

## Phase 4 — Career Platform

* Verified developer profiles
* Recruiter discovery
* Skill-based opportunities
* Portfolio generation
* Career analytics

---

# 🏆 Hackathon Submission

### Project

**ABTalks — 60-Day Coding Challenge**

### Repository

https://github.com/dhanush080607/VicoDathon-pb-1

### Live Application

https://build60.lovable.app

### LinkedIn

https://www.linkedin.com/in/h-dhanush-189565327/

### Route Map

```text
/
/dashboard
/day/12
```

---

# 💭 Our Product Principle

ABTalks isn't about asking:

> **"Did you study today?"**

It asks:

> **"What did you build today?"**

Because 60 days of passive learning can be forgotten.

But 60 days of commits, projects, reflections, and public proof can become a portfolio.

---

# 🚀 ABTalks

### **60 Days. One Commit. One Future.**

Built for the VicoDathon Hackathon.

---
