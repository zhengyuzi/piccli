# Piccli - Agent Guide

Piccli is a CLI tool to process images with [sharp](https://github.com/lovell/sharp).

## Sharp Docs

Refer to the [docs](./vendor/sharp/docs/src/content/docs) folder for more details.

### Contents

| File | Description |
| --- | --- |
| [api-constructor.md](./vendor/sharp/docs/src/content/docs/api-constructor.md) | **Sharp constructor** - Creates image processing instances from Buffer, file path, or stream. Supports multi-page images, animated images, raw pixel data. Options: failOn, limitInputPixels, unlimited, autoOrient, sequentialRead, density, ignoreIcc, pages, page, animated, raw, create (generate blank/noise/text images), join (combine images), format-specific (tiff, svg, pdf, jp2, openSlide) |
| [api-channel.md](./vendor/sharp/docs/src/content/docs/api-channel.md) | **Channel manipulation** - `removeAlpha()` removes alpha channel; `ensureAlpha([alpha])` adds alpha channel; `extractChannel(channel)` extracts single channel to greyscale; `joinChannel(images, options)` joins images as channels; `bandbool(boolOp)` bitwise AND/OR/XOR on all channels |
| [api-colour.md](./vendor/sharp/docs/src/content/docs/api-colour.md) | **Colour operations** - `tint(tint)` tints image; `greyscale()` / `grayscale()` converts to 8-bit greyscale; `pipelineColourspace(colourspace)` sets pipeline colourspace; `toColourspace(colourspace)` sets output colourspace |
| [api-composite.md](./vendor/sharp/docs/src/content/docs/api-composite.md) | **Image compositing** - `composite(images)` overlays images. Options: input, blend mode (clear, source, over, in, out, atop, dest, multiply, screen, overlay, darken, lighten, colour-dodge, colour-burn, hard-light, soft-light, difference, exclusion), gravity, top, left, tile, premultiplied, density, animated |
| [api-input.md](./vendor/sharp/docs/src/content/docs/api-input.md) | **Input metadata** - `metadata()` returns format, size, width, height, space, channels, depth, density, chromaSubsampling, isProgressive, isPalette, bitsPerSample, pages, pageHeight, loop, delay, hasProfile, hasAlpha, orientation, exif, icc, iptc, xmp; `stats()` returns per-channel min/max/sum/mean/stdev, isOpaque, entropy, sharpness, dominant colour |
| [api-operation.md](./vendor/sharp/docs/src/content/docs/api-operation.md) | **Image operations** - `rotate([angle])`, `autoOrient()`, `flip()`, `flop()`, `affine(matrix)`, `sharpen([options])`, `median([size])`, `blur([sigma])`, `dilate([width])`, `erode([width])`, `flatten([background])`, `unflatten()`, `gamma([gamma, gammaOut])`, `negate([options])`, `normalise()` / `normalize()`, `clahe(options)`, `convolve(kernel)`, `threshold([threshold])`, `boolean(operand, operator)`, `linear([a, b])`, `recomb(matrix)`, `modulate([options])` |
| [api-output.md](./vendor/sharp/docs/src/content/docs/api-output.md) | **Output options** - Write: `toFile(fileOut)`, `toBuffer([options])`; Metadata: `keepExif()`, `withExif(exif)`, `withExifMerge(exif)`, `keepIccProfile()`, `withIccProfile(icc)`, `keepXmp()`, `withXmp(xmp)`, `keepMetadata()`, `withMetadata([options])`; Format: `toFormat(format)`, `jpeg([options])`, `png([options])`, `webp([options])`, `gif([options])`, `jp2([options])`, `tiff([options])`, `avif([options])`, `heif(options)`, `jxl([options])`, `raw()`; Other: `tile([options])`, `timeout(options)` |
| [api-resize.md](./vendor/sharp/docs/src/content/docs/api-resize.md) | **Image resizing** - `resize([width, height, options])` with fit modes (cover, contain, fill, inside, outside), position/gravity, strategy (entropy, attention), kernel (lanczos3, mitchell, cubic, linear, nearest, mks2013, mks2021), background, withoutEnlargement, withoutReduction, fastShrinkOnLoad; `extend(options)`, `extract({left, top, width, height})`, `trim([options])` |
| [api-utility.md](./vendor/sharp/docs/src/content/docs/api-utility.md) | **Global properties** - Properties: `versions`, `interpolators`, `format`, `queue`; Methods: `cache([options])`, `concurrency([n])`, `counters()`, `simd([enabled])`, `block(options)`, `unblock(options)` |
| [performance.md](./vendor/sharp/docs/src/content/docs/performance.md) | **Performance optimization** - libuv thread pool (UV_THREADPOOL_SIZE), libvips thread pool, per-image concurrency (sharp.concurrency()), memory management (MALLOC_ARENA_MAX) |
