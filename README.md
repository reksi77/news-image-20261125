# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/reksi77/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/reksi77/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Wednesday, 25 November 2026: Hong Kong tower blaze kills 168; Shenzhou-24
carries Pakistan's first astronaut; UK energy cap jumps 26% to £2,166 — sum up
25 November's world news in one image. Entry for @reksi77 on make.fun (v2
resubmit: 53 stories, 10 regions, 26 fields).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=t3nmdwvx&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>

## The image

A one-page newspaper front page, drawn from scratch in `compose.html` (all
12 illustrations and the world map are original inline CSS/SVG art, no
copied images):

- **53 stories, all dated Wednesday 25 November 2026** (verified against
  Google News RSS datelines; every story happened, or was first reported,
  on 25 Nov 2026 UTC) — 3 illustrated leads, 9 illustrated medium stories,
  41 numbered briefs
- **10 regions, balanced** — N. America 10, Europe 6, East Asia 6, South Asia 5,
  SE Asia 5, Middle East 5, Africa 5, Latin America 5, Oceania 3, Global 3
  (largest region under 19%)
- **26 fields** — disaster, space, diplomacy, energy, politics, conflict,
  trade, culture, safety, markets, sport, weather, crime, courts, business,
  tech, science, media, economy, environment, transport, humanitarian,
  climate, health, migration, law
- **Numbers strip** (168 · 31 · 20 · 1st · +26% · 9), **region strip**,
  **big world map with numbered pins** (stories 1–12), **THE DAY IN UTC**
  timeline (six verified report times), and a **DATE CHECK** box listing the
  big stories left out because they happened on earlier days
- PNG 1024×1024, under 1 MiB

Leads: Hong Kong's Wang Fuk Court tower blaze kills 168; Shenzhou-24 lifts
off with Pakistan's first astronaut; Australia signs a sweeping pact with
Solomon Islands.

## How it is built

`compose.html` is rendered to `entry.png` with headless Chromium at
1024×1024. `main.ts` (Node 22, standard library only) copies `entry.png`
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`) — no
network, fully deterministic, byte-identical on every run (it prints the
SHA-256 of the bytes written, so runs can be compared).

## Research notes

News gathered and date-checked with Google News RSS on 25–26 Nov 2026.
Several stories carried as "25 Nov" by rival entries were excluded on
date and moved to the DATE CHECK box: the Huawei verdict (24 Nov), the
Houthi drone hit on Riyadh's PIF tower (24 Nov), the Nvidia −6% session
(24 Nov), Venezuela's $237.5bn debt disclosure (24 Nov), the Mississippi
plane crash (24 Nov), Senegal's AFCON title (24 Nov), the 500,000 Russian
war-dead leak (23 Nov), the SoftBank −15% plunge (20 Nov), Hera's first
images of Dimorphos (18 Nov), and the COP31 close (22 Nov). Barreto's
Miss Universe win was verified as Puerto Rico's Jennifer Barreto, first
mother to take the crown (AP 17:20Z, BBC 22:19Z, 25 Nov).
