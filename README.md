# OpportunityRadar 🎯

> **Intelligent Student Opportunity & Career Discovery Platform**  
> Built solo for the **FIT-FEST 2026 Hackathon** at **Flora Institute of Technology, Pune**[span_0](start_span)[span_0](end_span).

[![Live Demo](https://img.shields.io/badge/Live_Demo-student--career--match--qpr9.bolt.host-059669?style=for-the-badge&logo=vercel)](https://student-career-match-qpr9.bolt.host)[span_1](start_span)[span_1](end_span)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/vivekonkarnathbharati/opportunity-radar)[span_2](start_span)[span_2](end_span)
[![Tech Stack](https://img.shields.io/badge/Stack-React_18_•_TypeScript_•_Tailwind_CSS-3b82f6?style=for-the-badge)](https://vitejs.dev/)[span_3](start_span)[span_3](end_span)

PPT = https://gamma.app/docs/OpportunityRadar--azg0t6y4lylyeui


---

## 📌 Executive Summary

Early-stage computer science students face severe **portal fatigue** and **application burnout**[span_4](start_span)[span_4](end_span). Traditional platforms like LinkedIn and Internshala present exhaustive requirement lists tailored to experienced professionals, causing students to abandon applications out of imposter syndrome. Those who do apply often resort to generic copy-pasted cover letters that trigger ATS spam filters.

**OpportunityRadar** reverses this dynamic by providing a **skill-first discovery platform**[span_5](start_span)[span_5](end_span). Instead of searching by job titles, students filter opportunities based on their current technical competencies. The platform provides real-time compatibility scores ($80\%–98\%$) and features a context-aware **AI Application Pitch Generator** that crafts tailored, 3-sentence outreach pitches with 1-click clipboard export[span_6](start_span)[span_6](end_span).

---

## 🚀 Key Features

* 🎓 **Student Profile Context:** Displays verified education (PW IOI Pune), degree details, and active skill inventories[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span).
* 🎯 **Skill-First Compatibility Matching:** Real-time scoring function calculates overlap between student skills and role prerequisites, prioritizing high-probability opportunities[span_9](start_span)[span_9](end_span).
* 🔎 **Dynamic Multi-Select Filtering:** Responsive multi-tag filtering across technical skills (Python, JavaScript, SQL, C++) and opportunity categories[span_10](start_span)[span_10](end_span).
* 🏆 **Regional Opportunity Feed:** Curated listings for hackathons, engineering internships, and developer workshops across Pune and Maharashtra[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span).
* 🤖 **Human-in-the-Loop AI Pitch Generator:** Generates a structured 3-sentence application note connecting the student's background directly to host requirements, preventing ATS bot blacklisting[span_13](start_span)[span_13](end_span).
* ⚡ **Zero-Friction Access:** Fully client-side interactive MVP requiring zero authentication barriers for instant jury evaluation[span_14](start_span)[span_14](end_span).

---

## 🏗️ Technical Architecture & Engineering Highlights



src/
├── components/
│   ├── AICoverLetterModal.tsx  # Context-injection pitch generator & clipboard bridge
│   ├── Header.tsx              # Navigation bar & search state
│   ├── OpportunityCard.tsx     # Match badges, role details & action triggers
│   ├── ProfilePage.tsx         # Academic background & verified skill tags
│   └── Sidebar.tsx             # Multi-select filters for skills & event categories
├── data.ts                     # Strongly typed mock listings with Pune regional context
├── types.ts                    # Strict TypeScript domain interfaces
├── App.tsx                     # Main layout & responsive filter coordination
└── main.tsx                    # Vite React DOM entry point


### 1. Deterministic Match Scoring ($O(N)$ State Reactivity)
The compatibility engine computes set intersections between candidate skills and listing requirements directly within React state[span_24](start_span)[span_24](end_span). It avoids heavy third-party calculation libraries to achieve sub-50ms execution times across complex compound filter selections[span_25](start_span)[span_25](end_span).

### 2. Strict TypeScript Contracts
All domain models (`Opportunity`, `FilterState`, `SkillTag`) are strictly typed in `src/types.ts`[span_26](start_span)[span_26](end_span). Zero usage of `any` types ensures predictable component rendering and eliminates runtime null-pointer exceptions[span_27](start_span)[span_27](end_span).

### 3. Ethical "Human-in-the-Loop" AI Design
Automated application bots trigger recruiter spam detection and violate platform guidelines. OpportunityRadar generates the outreach context deterministically from verified profile variables, keeping the student in control to review, edit, and copy the pitch manually[span_28](start_span)[span_28](end_span).

### 4. Decoupled Data Schema
The mock data in `src/data.ts` adheres to standard REST/GraphQL DTOs (Data Transfer Objects)[span_29](start_span)[span_29](end_span). Integrating live university Training & Placement (T&P) APIs or a PostgreSQL/Supabase backend in Phase 2 requires zero changes to the UI component layer[span_30](start_span)[span_30](end_span).

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | React 18 (Hooks, Functional Components)[span_31](start_span)[span_31](end_span) |
| **Language** | TypeScript (Strict Mode)[span_32](start_span)[span_32](end_span) |
| **Styling & UI** | Tailwind CSS, Lucide React Icons[span_33](start_span)[span_33](end_span) |
| **Build & Tooling** | Vite, PostCSS, ESLint[span_34](start_span)[span_34](end_span) |
| **Hosting & Edge** | Cloud Edge Deployment via Bolt[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span) |

---

## 🚦 Getting Started Locally

### Prerequisites
* Node.js (version 18.0 or higher)
* npm (version 9.0 or higher)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/vivekonkarnathbharati/opportunity-radar.git](https://github.com/vivekonkarnathbharati/opportunity-radar.git)
   cd opportunity-radar
   ```[span_37](start_span)[span_37](end_span)

2. **Install project dependencies:**
   ```bash
   npm install


3. Start the local development server:
   npm run dev
   
4. Build for production:
   npm run build
   

🗺️ Product Roadmap

⚬ Phase 1 (Delivered Hackathon MVP):
  ⚬ Core discovery feed with instant skill-based match scoring.
  ⚬ Multi-factor skill and event category filters.
  ⚬ Context-aware AI application pitch assistant with 1-click copy.
⚬ Phase 2 (Immediate Post-Hackathon):
  ⚬ Direct ATS Webhook integration for real-time vacancy counters.
  ⚬ Google OAuth login with persistent profile saving via Supabase.
  ⚬ Resume upload and automated skill extraction parser.
⚬ Phase 3 (Enterprise & Campus Scale):
  ⚬ College Placement Cell (T&P) admin portal for verified campus postings.
  ⚬ Automated WhatsApp alerts for \ge 90\% skill compatibility matches.

👨‍💻 Developer & Hackathon Attribution

⚬ Developer: Vivek Onkarnath Bharati (PW Institute of Innovation, Hadapsar, Pune)
⚬ Event: FIT-FEST 2026 Hackathon
⚬ Venue: Flora Institute of Technology, Pune
⚬ Challenge: Problem Statement 1 — Student Opportunity Discovery Platform
⚬ Mentions: @the_flora_institutes • @gdg.fit.pune
⚬ Official Hashtags: #FITFEST2026 #FLORAINSTITUTES #GDGFITPUNE #TECHHACKATHON
