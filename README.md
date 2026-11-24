# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/satriax30-commits/makefun-say-what-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/satriax30-commits/makefun-say-what-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

A program that writes one line of error copy to `/output/entry.txt` — the
brutal truth about what broke, told funny enough to repeat to a colleague.

## The entry

> Your upload died at 99% — the server tripped one step from the finish line. Your file is still safe on your device; try again.

## Why this line

- **One specific failure, not a vague one.** It names exactly what broke:
  an upload that died at 99%. No "something went wrong", no generic apology.
- **Brutal truth in plain words.** The server failed at the last step — the
  most infuriating moment to fail, and the line says so outright instead of
  hiding behind "an error occurred".
- **Funny on a single read, with a repeatable image.** "Tripped one step
  from the finish line" is a picture a reader can say out loud to a
  colleague. The joke lands in the same breath as the truth, with no
  throat-clearing and no padding.
- **It tells the user what to do next.** The file is still safe on their
  device; the fix is simply to try again. The reassurance and the next step
  are built into the line, not bolted on after it.
- **Shippable in a real product dialog.** No shock value, no blame, no
  swearing, nothing that embarrasses the team. A user who screenshots this
  passes it around because it is funny, not because it is unprofessional.

## Run

```sh
node main.ts   # Node 22; writes /output/entry.txt (or ./output/entry.txt)
```

Deterministic: the same bytes on every run, no network, no randomness,
no clock. The program validates the line first (1–200 characters, one
line, not only whitespace) and writes it with no trailing newline.
