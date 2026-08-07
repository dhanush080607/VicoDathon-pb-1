# 🤖 PROMPTS.md — ABTalks 60-Day Coding Challenge

> Documentation of the AI-assisted development workflow used to design, build, refine, test, and deploy the ABTalks hackathon submission.

---

## 🎯 Project

**ABTalks — 60-Day Coding Challenge**

ABTalks is a mobile-first coding challenge experience for Indian college students. The platform encourages students to build consistently for 60 days and create public proof of work through GitHub commits and LinkedIn posts.

### Required Routes

```text
/
/dashboard
/day/12
```

### Product Goals

* Build daily coding consistency
* Encourage real project development
* Create public proof of work
* Track learning progress
* Motivate students through streaks and achievements
* Help students become more visible to recruiters

---

# 🧠 AI-Assisted Development

AI was used as a development partner throughout the project.

The workflow included:

```text
Product Understanding
        ↓
UX Planning
        ↓
Design Direction
        ↓
Initial Implementation
        ↓
Feature Development
        ↓
Interaction Improvements
        ↓
Mobile Optimization
        ↓
Accessibility & Edge Cases
        ↓
Visual Polish
        ↓
Testing
        ↓
Deployment
```

AI assistance was used for:

* Product ideation
* UX architecture
* UI design
* React component development
* TypeScript implementation
* Responsive design
* Animation ideas
* Interaction design
* Accessibility improvements
* Error handling
* Debugging
* Documentation

The developer reviewed, tested, modified, and integrated the generated implementation.

---

# 1. 🏁 Initial Product Prompt

### Prompt

```text
Build a premium mobile-first web application redesign for ABTalks called:

"ABTalks 60-Day Coding Challenge"

ABTalks runs a 60-day coding challenge for Indian college students.

Students choose a technology track, build something every day, and submit:

1. GitHub commit proof
2. LinkedIn post proof

The platform should help students:

- Build consistency
- Create public proof of work
- Build portfolio-ready projects
- Become more visible to recruiters

Most users access the platform from mobile phones after college.

Design mobile-first for a 390px viewport.

Create exactly these routes:

/
/dashboard
/day/12

Use:

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide icons

The product should feel like a premium startup rather than a basic dashboard.

Use design inspiration from:

- Linear
- GitHub
- Apple
- Notion
- Duolingo

Prioritize:

1. Visual excellence
2. User experience
3. Innovation
4. Clear student journey

Create:

- Landing page
- Student dashboard
- Challenge Day experience
- Streak tracking
- Progress tracking
- Achievement system
- Momentum score
- AI Coding Coach
- GitHub proof submission
- LinkedIn proof submission
- Reflection journal
- Empty states
- Missed-day states
- First-day states

Use realistic mock data.
```

---

# 2. ⚙️ Make the Application Fully Functional

### Prompt

```text
Make the application fully interactive.

Do not create a static visual prototype.

Every important button and interaction shown in the interface should have meaningful behavior.

Implement:

- Route navigation
- Dashboard navigation
- Challenge Day navigation
- Interactive checklist
- Form validation
- GitHub proof submission
- LinkedIn proof submission
- Reflection journal
- Progress updates
- Streak updates
- Achievement updates
- AI Coach interaction
- Loading states
- Success states
- Error states

Use React state and localStorage where appropriate.

Make the application feel like a real working product even though authentication and production database functionality are out of scope.
```

---

# 3. 📱 Mobile-First UX Prompt

### Prompt

```text
Optimize the entire application for a 390px mobile viewport.

Mobile is the primary experience.

Prioritize:

- Thumb-friendly interactions
- Large touch targets
- Clear typography
- Comfortable spacing
- Short readable content blocks
- Easy navigation
- Minimal horizontal scrolling
- Sticky or accessible primary actions
- Strong visual hierarchy
- Fast access to today's task

The experience should feel natural for a college student using the application late at night on a phone.

Keep desktop responsive but treat mobile as the primary design target.
```

---

# 4. 🎨 Premium Visual Design Prompt

### Prompt

```text
Transform the interface into a premium startup-quality product.

Use:

- Deep black background
- Electric blue gradients
- Purple highlights
- Glassmorphism
- Premium typography
- Rounded cards
- Subtle shadows
- Gradient borders
- Smooth transitions
- Micro-interactions
- Framer Motion animations

Avoid making the product look like a generic admin dashboard.

The interface should feel like a combination of:

Linear + GitHub + Apple + Duolingo.

Create strong visual hierarchy and make the student's progress feel exciting.
```

---

# 5. 🏠 Landing Page Prompt

### Prompt

```text
Improve the landing page for a student who has never heard of ABTalks.

The page should communicate within seconds:

1. What ABTalks is
2. Why a student should care
3. How the 60-day challenge works
4. What the student gets at the end

Create a strong hero section around:

"60 Days. One Commit. One Future."

Add:

- Strong CTA
- Challenge explanation
- Coding tracks
- Streak visualization
- Proof-of-work explanation
- Student benefits
- Challenge timeline
- Social proof
- AI Coding Coach
- Final CTA

Make the page emotionally motivating without becoming overly promotional.
```

---

# 6. 📊 Dashboard Prompt

### Prompt

```text
Turn /dashboard into a daily motivation center.

The dashboard should immediately answer:

"Where am I?"

"What should I build today?"

"How close am I to Day 60?"

Include:

- Student profile
- Current streak
- Today's mission
- Challenge progress
- Overall completion
- Momentum score
- Achievement badges
- Rank
- 60-day progress tracker
- AI Coding Coach

Create a visual hierarchy where today's mission is the primary action.

Make the dashboard feel motivating rather than like an analytics dashboard.
```

---

# 7. 🎯 Challenge Day Prompt

### Prompt

```text
Design /day/12 as a complete daily coding workspace.

Show:

DAY 12 OF 60

Project:

AI Resume Analyzer

Include:

- Mission description
- Learning goals
- Difficulty
- Estimated time
- Build checklist
- GitHub repository input
- GitHub commit input
- LinkedIn post input
- Submission status
- Reflection journal
- Completion state

The student should clearly understand:

What am I building?

What do I need to learn?

What proof do I need to submit?

What do I need to complete before finishing the day?
```

---

# 8. 🔥 Streak & Progress Prompt

### Prompt

```text
Create a visually engaging 60-day progress system.

Represent:

- Completed days
- Current day
- Future days
- Missed days

Completed days should have a success state.

The current day should have an animated focus state.

Future days should appear locked.

Add:

- Current streak
- Overall completion percentage
- Progress through Day 60

Make progress feel rewarding without overwhelming the user.
```

---

# 9. 🏆 Achievement System Prompt

### Prompt

```text
Create a premium achievement system.

Include achievements such as:

- First Commit
- 7 Day Warrior
- Project Builder
- Consistency Master

Each achievement should support:

- Locked state
- Unlocked state
- Progress indicator
- Visual feedback

Use subtle celebration animations when a new achievement is unlocked.

Keep the gamification career-focused and mature.
```

---

# 10. ⚡ Momentum Score Prompt

### Prompt

```text
Add a Momentum Score to the student dashboard.

Example:

87 / 100

The score should communicate the student's current challenge momentum.

Use factors such as:

- Coding consistency
- Challenge progress
- GitHub activity
- LinkedIn sharing

Also show a contextual message such as:

"You are ahead of 74% of participants."

The feature should feel like useful progress feedback rather than a meaningless number.
```

---

# 11. 🤖 AI Coding Coach Prompt

### Prompt

```text
Create an interactive AI Coding Coach.

The coach should act as a lightweight mentor.

It should provide contextual encouragement based on the student's progress.

Example:

"Your streak is strong. Complete today's commit to keep your momentum."

Another example:

"You're close to completing Day 12. Finish the deployment step next."

Create:

- Floating coach button
- Animated opening interaction
- Chat-style interface
- Suggested actions
- Close/minimize interaction

Keep the AI Coach useful and concise.
```

---

# 12. 📝 Reflection Journal Prompt

### Prompt

```text
Add a Reflection Journal to the Challenge Day experience.

Before completing the day, ask:

"What did you learn today?"

"What challenge did you overcome?"

Allow students to enter their responses.

Persist the responses locally.

Use the reflection as part of the completion experience.

Make reflection feel like a meaningful learning habit rather than another form field.
```

---

# 13. 🔗 Proof-of-Work Prompt

### Prompt

```text
Create a professional proof-of-work submission system.

The student must provide:

GitHub Repository URL

GitHub Commit URL

LinkedIn Post URL

Validate the entered URLs.

Display:

Before submission:
"Waiting for proof"

After successful submission:
"Verified Successfully ✓"

Make the proof submission experience simple on mobile.

Do not require real GitHub or LinkedIn API integration for the hackathon prototype.
```

---

# 14. 🧩 Edge Case Prompt

### Prompt

```text
Handle realistic user states.

First Day:

"Welcome Explorer 🚀

Your first commit starts your journey."

Missed Day:

"You missed yesterday.

Recover your momentum today."

Empty Profile:

"Choose your first challenge track."

Incomplete Challenge:

Show which requirements are still missing.

Invalid Submission:

Explain what needs to be corrected.

Make edge cases feel intentional and helpful rather than like error screens.
```

---

# 15. ♿ Accessibility & Quality Prompt

### Prompt

```text
Perform an accessibility and usability pass across the application.

Check:

- Touch target sizes
- Keyboard accessibility
- Form labels
- Color contrast
- Focus states
- Tooltips
- Button states
- Loading states
- Error messages
- Success feedback
- Responsive layouts
- Mobile readability

Ensure the UI remains usable at 390px width.

Do not sacrifice accessibility for visual effects.
```

---

# 16. 🎬 Animation & Microinteraction Prompt

### Prompt

```text
Add subtle premium animations using Framer Motion.

Animate:

- Page transitions
- Cards entering the viewport
- Progress indicators
- Streak states
- Achievement unlocks
- Modal opening
- AI Coach interaction
- Submission success
- Checklist completion

Animations should be:

- Fast
- Smooth
- Purposeful
- Non-distracting

Avoid excessive animations that reduce usability or performance.
```

---

# 17. 🧪 Testing Prompt

### Prompt

```text
Review the application as a hackathon judge.

Test the required routes:

/
/dashboard
/day/12

Check:

- Direct URL access
- Page refresh
- Mobile layout
- Navigation
- Buttons
- Forms
- Checklist
- Submission states
- Reflection
- Progress updates
- Empty states
- Missed-day states
- Animations
- Horizontal scrolling
- Broken UI
- Console errors

Prioritize issues that could affect a screenshot taken at 390px width.
```

---

# 18. 🚀 Final Hackathon Review Prompt

### Prompt

```text
Act as a senior product designer, frontend engineer, UX researcher,
startup founder, and hackathon judge.

Review the entire ABTalks application.

Evaluate:

1. First impression
2. Visual design
3. Mobile UX
4. Product clarity
5. Innovation
6. Emotional engagement
7. Interaction quality
8. Edge-case handling
9. Accessibility
10. Technical quality
11. Route reliability
12. Hackathon submission readiness

Identify the highest-impact improvements.

Prioritize improvements that can make the product feel significantly more
professional without unnecessarily increasing complexity.
```

---

# 🧑‍💻 Developer Review

AI-generated suggestions were reviewed before being integrated into the final application.

The developer manually verified and refined:

* UI behavior
* Routing
* Responsive layouts
* Component structure
* Interactions
* Forms
* Local state
* Visual hierarchy
* Animations
* Deployment
* Documentation

AI was used as an accelerator, not as a replacement for product decisions.

---

# 📦 Final Product

### Required Routes

```text
/
/dashboard
/day/12
```

### Live Deployment

https://vico-dathon-pb-1.vercel.app/

### GitHub Repository

https://github.com/dhanush080607/VicoDathon-pb-1

### Commit History

https://github.com/dhanush080607/VicoDathon-pb-1/commits/main/

---

# 🏁 Final Philosophy

The core product idea behind ABTalks is:

```text
Don't just learn code.

Build proof.
```

A student's 60-day journey becomes:

```text
BUILD
  ↓
COMMIT
  ↓
SHARE
  ↓
REFLECT
  ↓
IMPROVE
  ↓
REPEAT
  ↓
60 DAYS
  ↓
PORTFOLIO + PROOF + MOMENTUM
```

---

## 🏆 Hackathon Submission

**ABTalks — 60-Day Coding Challenge**

Built with an AI-assisted development workflow and refined for a mobile-first student experience.

> **60 Days. One Commit. One Future.**
