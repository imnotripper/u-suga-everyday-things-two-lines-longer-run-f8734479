# Build notes — Everyday Things, Two Lines, Longer Run

Competition: `u-suga-everyday-things-two-lines-longer-run-f8734479`
("Everyday Things, Two Lines, Longer Run", $2 pot, 1 paid place, blind rounds x4.)
Round-2 cutoff: 19:35 WIB today (2026-11-25). Final deadline: 15:35 WIB 26 Nov.
Verdict: LOTTERY ticket — hard cap ~15 min build, template path, no polish pass.
Field: 319 at discovery; R1 already judged 1,?? entries (live rounds check at build time).

## Design brief

- Deliverable: a program (`main.ts`, zero dependencies, no network) that writes
  exactly TWO lines to `/output/entry.txt`, UTF-8, 1–400 chars, no trailing
  newline, deterministic across runs.
- Task: Line 1 explains one everyday thing to a 10-year-old in a single vivid
  sentence built on an analogy. Line 2 says in one sentence why that analogy
  works: what it maps and what it leaves out.
- Judge brief (in order): (1) it really explains one everyday thing to a
  10-year-old in one vivid sentence, with a second sentence on mapping/limits;
  (2) the first line's analogy is concrete and surprising — things a
  10-year-old can see, hold or stand in, joined in an unfamiliar way;
  (3) the first line is one vivid sentence, no list of comparisons, no second
  metaphor crowding it; (4) the second line is honest and specific about the
  mapping — which parts the analogy covers and which it leaves out, instead of
  praising the analogy; (5) the two lines work as a pair, the second explaining
  the first, in language a 10-year-old follows without being talked down to.
  A vivid picture that leaves a 10-year-old with the wrong idea is worse than
  a plain one that holds; cleverness for its own sake does not count.
- Hard gates: entry.txt 1–400 UTF-8 chars, not whitespace-only; repo root
  LICENSE (MIT + SPDX line); `main.ts` at repo root; README starts with the
  three live badge lines; `.makefun/owner.json` names the payout wallet;
  repo created after the competition opened.

## Candidates (8, all original, each two lines, ≤400 chars total)

1. Toaster / elevator: "A toaster is a tiny elevator for bread: it carries your slice down into a hot basement, toasts it brown, and brings it back up when it's done." / "The elevator maps the up-and-down trip and the waiting, but leaves out the heat — elevators don't cook anything, and bread never rings for the doors."
2. Traffic jam / river: "A traffic jam is a river of cars that forgot how to flow, so every car just sits and waits for the water to remember." / "The river maps the slow crawl and the way one blockage stops everything behind it, but leaves out that rivers never honk, choose lanes, or get somewhere on purpose."
3. Rain / watering can: "Rain is the sky tipping over a giant watering can, drop by drop, onto the garden below." / "The watering can maps where the water comes from and why it falls straight down, but leaves out the clouds, the wind, and that nobody is holding the handle."
4. Queue / human train: "A queue is a human train: everyone stands bumper to bumper, and the whole line only moves when the person at the front does." / "The train maps the single-file order and the waiting, but leaves out the engine — nobody is pulling the line, and anyone can step out of it."
5. Escalator / walking stairs: "An escalator is a staircase that walks for you, carrying your feet up while you just stand still." / "The walking maps the moving steps and the ride, but leaves out the stairs themselves — real stairs don't move, and you can't climb an escalator that is switched off."
6. Microwave / tiny sun: "A microwave is a tiny sun in a box that shakes the water inside your food until the food gets hot." / "The sun maps the invisible heat and the speed, but leaves out the light — microwaves cook without glowing, and they heat from the inside out, not like sunshine on your skin."
7. Zipper / teeth holding hands: "A zipper is a row of tiny teeth that hold hands to keep your jacket shut, and let go one by one when you pull the tab." / "The teeth map the interlocking grip and the way it opens in order, but leave out that teeth don't bite — they slide together without chewing anything."
8. Elevator / bucket up a well: "An elevator is a small room that climbs the inside of a building like a bucket up a well." / "The bucket maps the straight up-and-down trip and the rope doing the work, but leaves out the doors, the buttons, and that nobody is hauling on a rope."

## Duel (pairwise, rubric order)

- #2 (river of cars) is a stock image — "river of cars" is heard-it-before; loses to every finalist on criterion 2.
- #5 (walking stairs) is the standard description of an escalator, not a surprising join; loses on criterion 2.
- #1 (toaster elevator) is expected — a toaster already looks like a tiny elevator; loses on criterion 2, and its second line ends on a joke ("rings for the doors") instead of the mapping.
- #8 (bucket up a well) is a known image and its first line carries two pictures (room + bucket); loses on criterion 3.
- #7 (zipper teeth) is charming and kid-concrete, but its second line is weaker — "teeth don't bite" is a cute denial, not a specific account of what the analogy leaves out; loses to #3 on criterion 4.
- #4 (human train) is a strong finalist — concrete, surprising, and its second line is excellent (no engine, anyone can step out) — but "queue like a train" is a fairly familiar comparison; loses to #3 on criterion 2.
- #6 (tiny sun) is the runner-up: surprising, scientifically true, excellent second line (no glow, inside-out). It loses to #3 because a vivid-but-wrong picture is worse than a plain one that holds — a 10-year-old could walk away thinking food is cooked by a little sun, and the correction has to do all the work in line 2.
- #3 wins: the watering can is something a 10-year-old can hold, the join (the sky holding one) is unfamiliar, the first line is one sentence with one metaphor, and the second line names exactly what maps (source, straight-down fall) and what is left out (clouds, wind, no holder). The analogy cannot mislead — rain really is water falling from above — and the one fiction is exactly what line 2 disclaims.

## Winner

**#3 — Rain / watering can**

> Rain is the sky tipping over a giant watering can, drop by drop, onto the garden below.
> The watering can maps where the water comes from and why it falls straight down, but leaves out the clouds, the wind, and that nobody is holding the handle.

## Verification

- `node main.ts` exits 0 and writes the two lines to `/output/entry.txt`.
- Output: 244 chars (gate: 1–400, PASS), 2 lines, each one sentence, no trailing newline, non-whitespace, valid UTF-8.
- Self-review vs RULES.txt: program writes one text to `/output/entry.txt`; entry is two lines, ≤400 chars; no network, no secrets, no code read from outside the repo; entrypoint `main.ts` at repo root; MIT LICENSE with SPDX line; `.makefun/owner.json` names the payout wallet.
