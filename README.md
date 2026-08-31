# Partner PPC — Country vs Commission Dashboard

Affiliate acquisition analysis: country vs commission, composite scoring (Scale / Test), and Deriv-side LTV → CPA caps by country and region.

## Source data (local only)

CSV is **not** committed (contains partner user IDs). Place exports under `Partner PPC/`:

- `ppc-partners-2024-01-01-to-2026-08-31.csv`

## HTML dashboard

- **Live site:** https://shivank-vibecode.github.io/partner-ppc-country-commission/
- **File on GitHub:** [`index.html`](./index.html) — download and open locally if needed

## Dashboard (source)


- Cursor canvas (open beside chat in this workspace):  
  `~/.cursor/projects/Users-shivank-Downloads-Cohort/canvases/country-commission-affiliate-acquisition.canvas.tsx`
- Snapshot in this repo: `dashboards/country-commission-affiliate-acquisition.canvas.tsx`

### Whale split

Toggle **All / Whales / Non-whales** at the top of `index.html`.

- **Whale** = `Commissions USD` ≥ p75 of earning affiliates (currently ≥ ~$962)
- ~25 whales (all Vietnam) drive ~72% of program commission
- Non-whale blended CPA50 collapses to near-zero outside thin Vietnam residual

### Tabs

1. **Vietnam deep dive** — full column walkthrough, LTV inversion, CPA layers  
2. **LTV & CPA** — country / region / program toggle with three-layer CPA math  
3. **Scale & Test** — acquisition priority lists  
4. **Country league** — composite score top 25  
5. **Patterns** — channels, campaigns, correlations  

### LTV method

From [Deriv Partners](https://deriv.com/partners): Options revenue share up to 45% of Deriv revenue →  
`Deriv gross LTV ≈ Commission ÷ 0.45`, `net keep ≈ gross × 55%`.  
CPA caps = net keep × payback share (30% / 50% / 100%).

## Specs & plan

- `docs/superpowers/specs/2026-08-31-country-commission-affiliate-dashboard-design.md`
- `docs/superpowers/plans/2026-08-31-country-commission-affiliate-dashboard.md`
