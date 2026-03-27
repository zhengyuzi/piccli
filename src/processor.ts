import path from 'node:path'
import consola from 'consola'
import fs from 'fs-extra'
import sharp from 'sharp'
import { FORMATS } from './config'

export interface ProcessOptions {
  width?: number
  height?: number
  format?: keyof sharp.FormatEnum
  quality?: number
  outputDir?: string
}

export async function processImage(
  entry: string,
  options: ProcessOptions = {},
): Promise<void> {
  const stat = await fs.stat(entry)

  if (stat.isFile()) {
    const image = sharp(entry)
    const metadata = await image.metadata()

    const {
      width = metadata.width,
      height = metadata.height,
      format = metadata.format,
      quality,
      outputDir = `${path.dirname(entry)}/output`,
    } = options

    const baseName = path.basename(entry, path.extname(entry))

    const outputPath = `${outputDir}/${baseName}.${format}`

    await fs.ensureDir(outputDir)

    await image
      .resize(Number(width), Number(height))
      .toFormat(format, { quality })
      .toFile(outputPath)

    consola.success(`Processed: ${entry} -> ${outputPath}`)
  }
  else if (stat.isDirectory()) {
    await processDirectory(entry, options)
  }
}

export async function processDirectory(
  dirPath: string,
  options: ProcessOptions = {},
): Promise<void> {
  const files = await fs.readdir(dirPath)

  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase()
    return FORMATS.some(format => ext === `.${format}`)
  })

  for (const file of imageFiles) {
    const filePath = path.join(dirPath, file)
    await processImage(filePath, options)
  }
}

export async function processEntries(
  entries: string[],
  options: ProcessOptions = {},
): Promise<void> {
  for (const entry of entries) {
    try {
      await processImage(entry, options)
    }
    catch (error) {
      consola.error(`Error processing ${entry}:`, error)
    }
  }
}
