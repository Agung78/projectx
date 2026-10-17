# Voiceover Brief — intro-v2

**Project:** NewCo intro video (HyperFrames composition `videos/intro-v2/`)
**Duration:** 53s composition; four VO takes (vo-s1…vo-s4), one per scene
**Audio starts:** 0.3s / 14.5s / 28s / 42.5s (composition `index.html`)
**Output:** `assets/voiceover.mp3` — MP3, 44.1kHz, mono

## Voice brief

- **Tone:** calm, precise, confident — operations lead, not agency pitch
- **Style:** measured pace, clear enunciation, slight warmth; not theatrical
- **Model:** ElevenLabs v2 or v2_5 (multilingual)
- **Settings:** stability ~55–65, clarity +0.5

## Script (as recorded)

| Take | Scene window | Audio | Line |
|------|------|------|------|
| vo-s1 | 0–14s | 0.3s, 12.7s | Technology built for independence. We build. We teach. You own. We engineer systems, then hand over everything — code, docs, know-how. No vendor lock-in. |
| vo-s2 | 14–27.5s | 14.5s, 11.8s | Building software is easy. Keeping it running is hard. Most agencies deliver and leave. Project shop. Body shopping. Handover as a ZIP file. |
| vo-s3 | 27.5–42s | 28s, 13.1s | Every project moves through clear stages. Diagnose. Build with. Run with. Hand over. Advise. Handover is a success metric — not a failure. |
| vo-s4 | 42–53s | 42.5s, 10.0s | Own the next stage of your technology. Start with a Technical Diagnostic — fifteen days, fixed fee, yours to keep. Discuss your situation. |

Settings used: Daniel, Eleven Multilingual v2, English, speed 1.0, stability ~60, similarity ~75, style 0, speaker boost on.

Visual beats are cued to the pauses in each take. If you re-record a take, keep the phrasing and a similar length, or the beats need retiming.

## Integration

Already wired in `index.html` (audio on track 1):

```html
<audio id="vo-s1" src="assets/vo-s1.mp3" data-start="0.3"  data-duration="12.72" data-track-index="1"></audio>
<audio id="vo-s2" src="assets/vo-s2.mp3" data-start="14.5" data-duration="11.83" data-track-index="1"></audio>
<audio id="vo-s3" src="assets/vo-s3.mp3" data-start="28"   data-duration="13.09" data-track-index="1"></audio>
<audio id="vo-s4" src="assets/vo-s4.mp3" data-start="42.5" data-duration="10.03" data-track-index="1"></audio>
```

Then run:

```bash
cd videos/intro-v2
npx hyperframes preview --background   # review
npm run render                          # render to MP4
```
