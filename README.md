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
npx piccli ./photo.jpg --width 800 --height 600 -f webp

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
| `--width` | - | Target width in pixels | Original |
| `--height` | - | Target height in pixels | Original |
| `--format` | `-f` | Output format | Original |
| `--quality` | `-q` | Image quality (1-100) | jpeg/webp: 80, png: 100, avif: 50 |
| `--help` | `-h` | Show help | - |
| `--version` | `-v` | Show version | - |

## Skills

```bash
npx skills add https://github.com/zhengyuzi/piccli --skill piccli
```
