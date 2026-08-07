# ABTalks — 60-Day Coding Challenge

> **60 Days. One Commit. One Future.**

A mobile-first redesign of the ABTalks 60-Day Coding Challenge, built as a hackathon project to help college students build coding consistency, create public proof of work, and showcase their progress.

---

## 🚀 Live Demo

**Live App:**
https://build60.lovable.app

**GitHub:**
https://github.com/dhanush080607/VicoDathon-pb-1

**LinkedIn:**
https://www.linkedin.com/in/h-dhanush-189565327/

---

## 🎯 About the Project

ABTalks runs a 60-day coding challenge for college students.

Students choose a coding track, build something every day, and submit proof of their work through:

* GitHub repository / commit
* LinkedIn post

The goal is to turn daily coding into a visible learning journey.

This redesign focuses on making that journey:

* Motivating
* Simple
* Mobile-first
* Progress-driven
* Career-oriented
* Engaging

---

## 💡 The Problem

Students often struggle with consistency.

They may:

* Start learning but stop after a few days
* Build projects without documenting them
* Have difficulty maintaining coding streaks
* Lack public proof of their skills
* Struggle to see their overall progress

ABTalks addresses this by combining **daily challenges, progress tracking, achievements, streaks, and proof of work** into one experience.

---

## 🧠 Product Concept

The core journey is:

```text
Choose a Track
      ↓
Build Today's Project
      ↓
Complete the Task
      ↓
Commit to GitHub
      ↓
Share on LinkedIn
      ↓
Reflect on What You Learned
      ↓
Maintain Your Streak
      ↓
Complete 60 Days
```

---

# 📱 Mobile-First Design

The primary design target is **390px mobile width**.

The product is designed around the real usage scenario of a college student using the platform on their phone after college.

### Design priorities

* Mobile-first layout
* Touch-friendly controls
* Clear information hierarchy
* Short, scannable content
* Strong visual feedback
* Dark-first interface
* Responsive components
* Smooth interactions

Desktop layouts are treated as a secondary experience.

---

# 🎨 Design System

The visual style combines a modern developer-product aesthetic with motivational gamification.

### Visual direction

* Deep dark backgrounds
* Electric blue accents
* Purple highlights
* Glass-style surfaces
* Rounded cards
* Strong typography
* Subtle gradients
* Motion-based feedback

The design direction is inspired by modern products such as Linear, GitHub, Apple, and Duolingo.

---

# 🗺️ Required Routes

The application implements the three routes required by the hackathon.

```text
/
/dashboard
/day/12
```

### `/`

Landing page introducing ABTalks and the 60-day challenge.

### `/dashboard`

Student progress dashboard containing the current challenge state and daily mission.

### `/day/12`

Detailed Day 12 challenge experience with task information and proof-of-work submission.

---

# ✨ Key Features

## 🏠 Landing Page

The landing page is designed for a student who has never heard of ABTalks.

It communicates:

* What the challenge is
* Why students should participate
* How the challenge works
* Available coding tracks
* Benefits of consistent building
* Social proof
* AI Coding Coach concept

### Hero Message

> **60 Days. One Commit. One Future.**

---

# 📊 Student Dashboard

The dashboard acts as the student's daily home screen.

### Includes

* Student profile
* Current coding streak
* Challenge progress
* Today's mission
* Achievement badges
* Rank information
* Momentum score
* 60-day progress tracker
* AI Coding Coach

The dashboard is designed to answer three questions immediately:

```text
Where am I?
What should I do today?
How close am I to my goal?
```

---

# 🔥 Streak & Progress

Daily consistency is represented through a visual progress system.

Students can see:

* Current streak
* Completed days
* Current challenge day
* Remaining days
* Overall completion

The 60-day journey is represented visually so students can understand their progress at a glance.

---

# ⚡ Momentum Score

The dashboard includes a **Momentum Score** concept that summarizes the student's current progress and consistency.

Example:

```text
87 / 100

You're ahead of 74% of participants.
```

The score is presented as a motivational product feature within the prototype.

---

# 🏆 Achievements

Students can unlock achievement badges as they progress.

Examples include:

```text
🏆 First Commit
🔥 7 Day Warrior
🚀 Project Builder
```

Achievement cards communicate:

* Locked state
* Unlocked state
* Progress
* Completion

---

# 💻 Challenge Day

### Route

```text
/day/12
```

The Challenge Day screen provides everything a student needs to complete a daily challenge.

### Example Challenge

**AI Resume Analyzer**

### Learning Goals

* File upload handling
* AI API integration
* Resume scoring
* Application deployment

---

# ✅ Interactive Build Checklist

Students can track the individual parts of their daily task.

Example:

```text
☑ Setup project
☑ Build interface
☐ Connect AI API
☐ Deploy project
```

This helps break a large project into smaller actions.

---

# 🔗 Proof of Work

Students can provide proof of their work through:

### GitHub

* Repository URL
* Commit URL

### LinkedIn

* LinkedIn post URL

The interface provides submission and validation states so students can understand whether their proof has been entered correctly.

---

# 📝 Reflection Journal

After working on a challenge, students can reflect on their learning.

The interface asks:

> **What did you learn today?**

and:

> **What challenge did you overcome?**

The prototype uses client-side state/local persistence for the experience.

---

# 🤖 AI Coding Coach

A dedicated AI Coach interface provides motivational and progress-oriented guidance.

The feature is designed around the idea of having a lightweight coding mentor available throughout the 60-day journey.

The coach experience focuses on:

* Progress
* Momentum
* Daily motivation
* Next actions
* Challenge completion

---

# 🧩 Edge Cases

The interface includes states for different student situations.

### First Day

```text
Welcome Explorer 🚀

Your first commit starts your journey.
```

### Missed Day

```text
You missed yesterday.

Complete today's task to recover momentum.
```

### Empty Profile

```text
Choose your first challenge track.
```

These states ensure the interface remains useful even when a student has little or no previous activity.

---

# 🛠️ Tech Stack

| Technology    | Usage                   |
| ------------- | ----------------------- |
| React         | Frontend                |
| TypeScript    | Type safety             |
| Tailwind CSS  | Styling                 |
| shadcn/ui     | UI components           |
| Framer Motion | Animations              |
| Lucide React  | Icons                   |
| Vite          | Build tooling           |
| Local Storage | Client-side persistence |
| Mock Data     | Prototype data          |

---

# 🏗️ Project Structure

```text
VicoDathon-pb-1/
│
├── .lovable/
├── public/
├── src/
│
├── .gitignore
├── .prettierignore
├── .prettierrc
├── AGENTS.md
├── bun.lock
├── bunfig.toml
├── components.json
├── eslint.config.js
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

---

# ⚙️ Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/dhanush080607/VicoDathon-pb-1.git
```

## 2. Navigate into the project

```bash
cd VicoDathon-pb-1
```

## 3. Install dependencies

Using npm:

```bash
npm install
```

Or using Bun:

```bash
bun install
```

## 4. Start the development server

```bash
npm run dev
```

Or:

```bash
bun run dev
```

## 5. Open the application

Use the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

---

# 🧪 Testing

The hackathon evaluates the application at **390px width**.

Before submission, verify all three routes:

```text
/
 /dashboard
 /day/12
```

Also check:

* Navigation
* Buttons
* Forms
* Checklist interactions
* Progress states
* Achievement states
* Proof submission
* Reflection input
* Mobile responsiveness
* No horizontal scrolling

---

# 📦 Build

Create a production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

---

# 🌐 Deployment

The project is deployed as a web application.

### Live URL

https://build60.lovable.app

### Source Code

https://github.com/dhanush080607/VicoDathon-pb-1

---

# 🔐 Scope

This hackathon prototype intentionally does not include:

* Authentication
* Production user accounts
* Production database
* Recruiter dashboard
* Admin panel

Mock data and client-side persistence are sufficient for demonstrating the required product experience.

---

# 📈 Future Improvements

If developed beyond the hackathon, the platform could be extended with:

### GitHub Integration

Automatically verify repositories and commits.

### LinkedIn Integration

Support easier proof sharing and verification.

### Authentication

Allow students to create persistent accounts.

### Real Database

Store challenge progress, achievements, submissions, and reflections.

### Leaderboards

Create real-time student rankings.

### AI Personalization

Use student progress to recommend tasks and projects.

### Portfolio Generation

Automatically turn completed challenge work into a developer portfolio.

### Recruiter Visibility

Allow verified student profiles to become discoverable by recruiters.

---

# 🏆 Hackathon Submission

## Project

**ABTalks — 60-Day Coding Challenge**

## Repository

https://github.com/dhanush080607/VicoDathon-pb-1

## Live Deployment

https://build60.lovable.app

## LinkedIn

https://www.linkedin.com/in/h-dhanush-189565327/

## Route Map

```text
/
/dashboard
/day/12
```

---

# 👨‍💻 Developer

**Dhanush Kumar**

CSE — Data Science

Frontend Developer | UI Designer | AI & ML Enthusiast

LinkedIn:
https://www.linkedin.com/in/h-dhanush-189565327/

GitHub:
https://github.com/dhanush080607

---

# 💙 Final Thought

ABTalks is built around one simple idea:

> **Don't just learn. Build. Commit. Share. Repeat.**

Because after 60 days, the goal isn't just to have completed a challenge.

The goal is to have **60 days of proof that you showed up.**

### **60 Days. One Commit. One Future.**
