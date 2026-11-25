# One Day on Earth — Wednesday 25 November 2026

make.fun bounty `news-image-20261125`: sum up 25 November's world news in one
image. Entry for @reksi77.

## The image

A one-page newspaper front page, drawn from scratch in `compose.html` (all
12 illustrations and the world map are original inline SVG, no copied art):

- **48 stories, all dated Wednesday 25 November 2026** (verified against
  Google News RSS datelines; every story happened, or was first reported,
  on 25 Nov 2026 UTC) — 3 illustrated leads, 9 illustrated medium stories,
  36 numbered briefs
- **9 regions, 14 fields** — politics, courts, space, conflict, trade,
  markets, tech, diplomacy, sport, culture, health-adjacent, energy,
  environment, crime, science and more
- **Numbers strip** (48 · 10/12 · 11 · 1st · −6% · $237.5bn), **region strip**,
  **world map with numbered pins** (stories 1–12), **THE DAY IN UTC**
  timeline, and a **DATE CHECK** box listing the big stories left out
  because they happened on earlier days (Windsor arrests, CIA breach,
  Senegal's AFCON title, Gulf of Finland drone strike, COP31, Hera images,
  SoftBank −15% — all 18–24 Nov, not today)
- PNG 1024×1024, 346,812 bytes (limit 1 MiB)

Leads: Shenzhou-24 lifts off with Pakistan's first astronaut; Huawei guilty
on 10 of 12 counts; Australia signs a sweeping pact with Solomon Islands.

## How it is built

`compose.html` is rendered to `entry.png` with headless Chromium at
1024×1024. `main.ts` (Node 22, standard library only) copies `entry.png`
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`) — no
network, fully deterministic, byte-identical on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Research notes

News gathered and date-checked with Google News RSS on 25 Nov 2026
(08:00–08:30 UTC). Several stories carried as "25 Nov" by rival entries
were excluded on date: the SoftBank −15% plunge (20 Nov), the Bucks'
win (23 Nov), Singapore's GDP outlook, the Myanmar sanctions and the
Hormuz mine claim (all 24 Nov), the Hera asteroid approach (18 Nov),
and the Senegal AFCON ruling (24 Nov).
