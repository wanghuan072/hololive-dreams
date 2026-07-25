# Video Image Asset Ledger

Date: 2026-07-24

Six YouTube-provided thumbnails were downloaded from videos published by the official hololive Dreams channel. No video, audio, creator-uploaded frame extraction, or community-video image was downloaded. Each image is presented as a linked preview of its source video and is not represented as original site artwork.

| Local asset | Source video | Intended use | Alt text |
| --- | --- | --- | --- |
| `/images/video/hololive-dreams-full-game-trailer.jpg` | `KWkNV57HJe4` | Team-building and Create Chart guides | Official hololive Dreams full game trailer preview |
| `/images/video/hololive-dreams-rhythm-game-pv.jpg` | `QGKxCTMnl78` | Rhythm Timing guide | Official hololive Dreams rhythm game preview |
| `/images/video/hololive-dreams-hoppin-rope-video.jpg` | `u-QXXcO2Wzg` | Minigames guide | Official Hoppin' Rope gameplay demonstration preview |
| `/images/video/hololive-dreams-cooking-video.jpg` | `9OxaIDpEhXo` | Minigames guide | Official Colliect Cooking gameplay demonstration preview |
| `/images/video/hololive-dreams-mega-circuit-video.jpg` | `-8QISHiERDI` | Minigames guide | Official MEGA CIRCUIT gameplay demonstration preview |
| `/images/video/hololive-dreams-gameplay-stage-video.jpg` | `J1uOs1pAQMw` | Getting Started and Dream Park guides | Official hololive Dreams gameplay stage preview |

## Rendering and provenance rules

- Images render inside a fixed 16:9 responsive container through Next.js Image.
- Every preview links to the official source video instead of embedding playback.
- Source video URL, original thumbnail URL, byte size, MIME type, usage, and public path are recorded in `video-image-assets.json`.
- Thumbnails are evidence-led editorial previews. They should be removed or replaced if the publisher changes its usage policy or requests removal.
- The official English spelling `Colliect Cooking` is retained pending an in-game English screen or official correction.

