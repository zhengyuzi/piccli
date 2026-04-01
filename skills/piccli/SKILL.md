---
name: piccli
description: |
  A CLI tool for image compression and conversion. Use when you need to:
  (1) Reduce image file size / compress images
  (2) Convert images to different formats
  (3) Batch process multiple images at once
  (4) Resize images to specific dimensions
  (5) Optimize images for web or mobile
---

# piccli - Image Processing CLI

## Quick Usage

```bash
npx piccli <input> [options]
```

## Common Use Cases

| Need | Command |
|------|---------|
| Compress image | `piccli ./photo.jpg -q 50` |
| Convert to WebP | `piccli ./photo.jpg -f webp` |
| Convert to AVIF | `piccli ./photo.jpg -f avif` |
| Resize image | `piccli ./photo.jpg --width 800` |
| Resize with height | `piccli ./photo.jpg --height 600` |
| Resize and convert | `piccli ./photo.jpg --width 800 --format webp` |
| Batch compress folder | `piccli ./images/ -q 70` |
| Output to specific folder | `piccli ./photo.jpg -o ./dist` |

## Options

| Flag | Alias | Description | Default |
|------|-------|-------------|---------|
| `--outputDir` | `-o` | Output directory | `<input>/output` |
| `--width` | | Target width in pixels | Original |
| `--height` | | Target height in pixels | Original |
| `--format` | `-f` | Output format (jpg/jpeg/png/webp/avif/gif/tiff/svg) | Original |
| `--quality` | `-q` | Image quality (1-100) | jpeg/webp: 80, png: 100, avif: 50 |
