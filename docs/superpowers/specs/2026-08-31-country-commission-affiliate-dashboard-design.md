# Country vs Commission Affiliate Acquisition Dashboard

**Date:** 2026-08-31  
**Status:** Approved design (pending user review of this spec)  
**Deliverable:** Cursor canvas (single `.canvas.tsx` file)  
**Data source:** `Partner PPC/ppc-partners-2024-01-01-to-2026-08-31.csv`

## Goal

Help decide **which countries to acquire affiliates from** based on ability to generate commission — not signup volume alone. Surface both markets to **scale** and markets to **test**, then use remaining columns for pattern and correlation context.

## Decisions locked

| Decision | Choice |
|---|---|
| Primary ranking | Composite score (volume + earn rate + commission) |
| Acquisition strategy | Both: “Scale these” and “Test these” side by side |
| Deliverable | Cursor canvas beside chat |
| Architecture | Country command center (country-first, patterns secondary) |

## Data snapshot (as of export)

- ~58,360 affiliate rows · 168 countries  
- Onboarded range in file: 2025-05-15 → 2026-08-30  
- ~95 affiliates with commission > 0 · ~$58.9k total commission  
- Vietnam ≈ 99% of commission (~$58.6k); high-volume markets (e.g. Nigeria, Bangladesh) contribute near-zero commission  
- Columns used: Country, Partner User ID, Campaign, Ad Group, Source, Medium, join/onboard dates, Active, deposit/client timing fields, Direct Sub-Affiliates, Clients Acquired, deposit/PnL fields, Funded, Commissions USD

## Composite score

Per country, score **0–100** as a weighted sum of normalized components:

| Component | Weight | Definition |
|---|---|---|
| Commission share | 40% | Country commission / total commission |
| Earn rate | 35% | Affiliates with commission > 0 / affiliates in country |
| Volume signal | 25% | Log-scaled affiliate count, min–max normalized across countries |

Normalization: each component is scaled 0–1 across countries before weighting, then multiplied by 100 for display.

## Priority lists

### Scale these

Include a country if **all** of:

- Commission USD > 0  
- Composite score in the top quartile **or** commission share ≥ 1% of total  

Rank by composite descending. Cap display at ~10 rows.  
**Action:** increase acquisition spend / partner outreach.

### Test these

Include a country if **all** of:

- Not already in Scale  
- Affiliates ≥ 50  
- Commission share < 1% of total (includes $0)  
- At least one early signal: clients acquired > 0 **or** client deposits > 0 **or** funded count > 0 **or** earners ≥ 1  
- Composite score above the median of countries that meet the sample-size floor (≥ 50 affiliates)

Rank by composite descending. Cap display at ~10 rows.  
**Action:** small test budgets / limited outreach.

### Avoid / deprioritize (callout only)

Countries with affiliates ≥ 500, commission = 0, clients acquired = 0 (or earn rate = 0 with clients but zero funded/commission). Short callout of top volume offenders — not a third full ranked table.

## Canvas layout

### Top strip — KPIs

- Total affiliates  
- Countries  
- Total commission (USD)  
- Earners (count and %)  
- Active rate  
- Top-country commission concentration (Vietnam share flag)

### Block A — Dual priority tables

Side-by-side **Scale** and **Test** tables. Columns:

- Country  
- Affiliates  
- Earners  
- Earn rate  
- Commission (USD)  
- Clients acquired  
- Client deposits (USD)  
- Composite score  
- Suggested action (Scale / Test)

### Block B — Country league table

Top ~25 countries by composite score with volume vs quality columns so the user can scan beyond the two shortlists.

### Block C — Pattern / correlation panels

1. **Funnel by country** — onboarded → active → clients → funded → commission for Scale + Test countries (conversion rates).  
2. **Channel mix** — Source × Medium composition for earning vs non-earning country cohorts.  
3. **Campaign concentration** — top campaigns by commission, labeled with country (expect SEA/Vietnam dominance).  
4. **Speed signals** — days-to-affiliate-deposit and days-to-first-client for earners vs non-earners (where data exists).  
5. **Correlation callouts** — short text findings from the data (e.g. client deposits strongly tied to commission; affiliate own deposits weakly tied; volume ≠ commission).

## Technical constraints

- Single file under the workspace `canvases/` directory: `country-commission-affiliate-acquisition.canvas.tsx`  
- Import only from `cursor/canvas`  
- Embed pre-aggregated JSON inline (no `fetch`, no CSV parse at runtime)  
- Precompute aggregates with a one-off Python pass from the CSV before writing the canvas  
- No empty placeholder sections; omit panels if a slice has no data  
- Charts/tables labeled with metric names, units, and source/time-range caption  
- Theme via `useHostTheme()` tokens only (no hardcoded hex, no gradients/emojis/box-shadows)

## Out of scope

- Live refresh against the CSV  
- Spend / CAC / ROI (spend not in this file)  
- Standalone HTML export  
- Per-affiliate drill-down UI beyond aggregated country/campaign views  
- Predictive ML models

## Success criteria

A user can open the canvas and within one screen answer:

1. Which countries should we scale affiliate acquisition in?  
2. Which countries are worth small tests?  
3. Which high-volume markets look like poor commission bets?  
4. What channel/campaign/funnel patterns accompany commission (so acquisition tactics can match)?

## Implementation notes (for plan)

1. Aggregate CSV → country metrics, channel splits, campaign tops, funnel rates, correlations.  
2. Compute composite scores and assign Scale / Test / Avoid buckets with documented thresholds.  
3. Build canvas sections in order: KPIs → dual lists → league → patterns.  
4. Verify TypeScript canvas diagnostics and visual hierarchy (primary = Scale/Test; patterns secondary).
