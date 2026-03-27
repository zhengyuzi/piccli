# piccli

A CLI tool to process images with [sharp](https://github.com/lovell/sharp).

## Usage

```bash
npx piccli <input> [options]
```

### Examples

```bash
# Process single image
npx piccli ./photo.jpg

# Resize and convert format
npx piccli ./photo.jpg -w 800 -h 600 -f webp

# Specify output directory
npx piccli ./photo.jpg -o ./dist

# Set quality
npx piccli ./photo.jpg -q 50

# Process directory
npx piccli ./images/

# Multiple files
npx piccli ./a.jpg,./b.png
```

## Options

| Flag | Alias | Description | Default |
|------|-------|-------------|---------|
| `--outputDir` | `-o` | Output directory | `<input>/output` |
| `--width` | `-w` | Target width in pixels | Original |
| `--height` | `-h` | Target height in pixels | Original |
| `--format` | `-f` | Output format (jpeg/png/webp/avif/gif) | Original |
| `--quality` | `-q` | Image quality (1-100) | jpeg/webp: 80, png: 100, avif: 50 |
| `--help` | `-h` | Show help | - |
| `--version` | `-v` | Show version | - |
