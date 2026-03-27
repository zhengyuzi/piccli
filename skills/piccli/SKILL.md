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
| Compress image | `npx piccli ./photo.jpg -q 50` |
| Convert to WebP | `npx piccli ./photo.jpg -f webp` |
| Resize image | `npx piccli ./photo.jpg -w 800` |
| Batch compress folder | `npx piccli ./images/ -q 70` |
| Output to specific folder | `npx piccli ./photo.jpg -o ./dist` |

## Options

| Flag | Alias | Description | Default |
|------|-------|-------------|---------|
| `--outputDir` | `-o` | Output directory | `<input>/output` |
| `--width` | `-w` | Target width in pixels | Original |
| `--height` | `-h` | Target height in pixels | Original |
| `--format` | `-f` | Output format (jpeg/png/webp/avif/gif) | Original |
| `--quality` | `-q` | Image quality (1-100) | jpeg/webp: 80, png: 100, avif: 50 |
