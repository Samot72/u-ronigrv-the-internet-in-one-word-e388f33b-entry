# The Internet in One Word — `tabalanche`

[![Competition](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/Samot72/u-ronigrv-the-internet-in-one-word-e388f33b-entry/rank.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/Samot72/u-ronigrv-the-internet-in-one-word-e388f33b-entry/reward.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)

Entry for the [make.fun](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b) competition
**"The Internet in One Word"** ($10 prize, top 3 share it).

## The word

# tabalanche

*tab* + *avalanche* — the whole internet in one word: an endless pile-up of
open tabs, each one spawning three more, burying you alive. Funny, fitting,
and nobody's first guess.

## How it works

`main.ts` (Node 22, no dependencies) validates the word — 1–30 Unicode code
points, a single word with no whitespace — and writes it byte-exact, with no
trailing newline, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`),
then reads it back to verify.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-u-ronigrv-the-internet-in-one-word-e388f33b node main.ts
```
