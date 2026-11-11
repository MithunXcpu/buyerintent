# IntentSight (BuyerIntent)

**Demo / prototype** for a sales-engineering walkthrough. The UI presents a buyer-intent product: sample emotion timelines, engagement patterns, and lead scores for sales calls, retail interactions, and similar conversations. Playback, scores, and charts are simulated in the browser with hardcoded data. This project does not analyze real video, process anything on-device, store recordings, or implement security, privacy, or compliance controls.

**Live Demo**: [buyerintent.vercel.app](https://buyerintent.vercel.app)

## SE Workflow

### Pre-Demo
1. Open the [Dashboard](https://buyerintent.vercel.app/dashboard) to review sample analytics and metrics
2. Familiarize yourself with the 5 use cases: Sales Calls, Retail, Real Estate, Car Dealerships, Trade Shows
3. Review the [Pricing](https://buyerintent.vercel.app/pricing) tiers (Starter $99, Professional $299, Enterprise Custom)

### Demo
1. Start on the [Home Page](https://buyerintent.vercel.app) — walk through the hero and "How It Works" section
2. Navigate to the [Interactive Demo](https://buyerintent.vercel.app/demo):
   - Play the simulated video analysis
   - Walk through the Emotion Timeline (9 labeled moments from Curious → Ready to Buy)
   - Show the Engagement Heatmap (color-coded grid)
   - Highlight the Buy Signal Score (78%) — explain 47 behavioral indicators
   - Point out Key Metrics: Attention Span, Positive Reactions, Objection Moments, Peak Engagement
3. Switch to the [Dashboard](https://buyerintent.vercel.app/dashboard) for aggregate analytics:
   - 147 sessions analyzed, 72% avg buy signal, 23% conversion rate
   - Weekly trends bar chart
   - Recent sessions table with prospect details
4. Show the [Pricing](https://buyerintent.vercel.app/pricing) page when the conversation moves to next steps

### Post-Demo
1. Use the [Contact](https://buyerintent.vercel.app/contact) form to capture prospect interest
2. Follow up with a tailored proposal based on their use case
3. Reference specific metrics from the demo dashboard in follow-up emails

## Features

What the prototype screens show (sample data, not a live analysis pipeline):

- Simulated emotion and behavior playback over a fake video player
- Buy Signal Score display (0–100%; the interactive demo uses 78%)
- Emotion timeline with labeled moments (Curious through Ready to Buy)
- Engagement heatmap (color-coded grid)
- Analytics dashboard with weekly trends and a recent-sessions table
- Pricing page (Starter $99, Professional $299, Enterprise custom) and a contact form
- Walkthrough narrative for 5 use cases: Sales Calls, Retail, Real Estate, Car Dealerships, Trade Shows

## Tech Stack
Next.js 16 | React 19 | TypeScript | Tailwind CSS 4 | Framer Motion | Lucide React

## Setup
```bash
npm install
npm run dev
```
