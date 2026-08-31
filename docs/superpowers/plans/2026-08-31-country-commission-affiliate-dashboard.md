# Country vs Commission Dashboard — Implementation Plan

> **For agentic workers:** Execute inline in this session. Checkbox steps for tracking. Commits are optional (only if user requests).

**Goal:** Build a Cursor canvas that ranks countries for affiliate acquisition using a composite score, with Scale / Test lists and pattern panels.

**Architecture:** One-off Python aggregation of the Partner PPC CSV → embed JSON aggregates in a single `.canvas.tsx` under the Cohort canvases directory. Country-first layout with secondary pattern analysis.

**Tech Stack:** Python 3 (stdlib csv/math) · Cursor canvas (`cursor/canvas`) · React via canvas SDK

## Global Constraints

- Data: `Partner PPC/ppc-partners-2024-01-01-to-2026-08-31.csv` (utf-8-sig)
- Canvas path: `/Users/shivank/.cursor/projects/Users-shivank-Downloads-Cohort/canvases/country-commission-affiliate-acquisition.canvas.tsx`
- Import only from `cursor/canvas`; embed all data inline; no fetch
- Composite: 40% commission share + 35% earn rate + 25% log volume (normalized 0–100)
- Scale / Test / Avoid thresholds per design spec `2026-08-31-country-commission-affiliate-dashboard-design.md`
- No gradients, emojis, box-shadows, hardcoded hex; use `useHostTheme()` tokens
- Do not commit unless user asks

---

### Task 1: Aggregate CSV → scored country metrics + pattern slices

**Files:**
- Create (ephemeral): run Python in shell; output JSON printed/saved for embedding
- Spec: `/Users/shivank/Downloads/Cohort & LTV/docs/superpowers/specs/2026-08-31-country-commission-affiliate-dashboard-design.md`

**Produces:**
- `kpis`, `scaleList`, `testList`, `avoidList`, `leagueTop25`, `funnelCountries`, `channelMix`, `topCampaigns`, `speedSignals`, `correlations`

- [x] **Step 1:** Run aggregation script implementing score + Scale/Test/Avoid rules from the spec
- [x] **Step 2:** Sanity-check: Vietnam dominates Scale; total commission ~$58.9k; earners ~95

---

### Task 2: Build canvas UI

**Files:**
- Create: `/Users/shivank/.cursor/projects/Users-shivank-Downloads-Cohort/canvases/country-commission-affiliate-acquisition.canvas.tsx`

- [x] **Step 1:** Embed aggregated data + default-export component
- [x] **Step 2:** Sections — KPIs, dual Scale/Test tables, Avoid callout, league table, funnel chart, channel mix, campaigns, speed + correlation callouts
- [x] **Step 3:** Confirm canvas TypeScript check reports no errors

---

### Task 3: Verify against success criteria

- [x] Openable canvas answers: scale countries, test countries, avoid high-volume duds, channel/campaign patterns
- [x] Mark plan tasks complete; link canvas to user
