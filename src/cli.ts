import { defineCommand, runMain } from 'citty'
import { description, name, version } from '../package.json'
import { FORMATS } from './config'
import { processEntries } from './processor'

const main = defineCommand({
  meta: {
    name,
    version,
    description,
  },
  args: {
    entries: {
      type: 'positional',
      description: 'Input file or directory path',
      required: true,
    },
    outputDir: {
      type: 'string',
      alias: ['o'],
      description: 'Output directory',
      required: false,
    },
    width: {
      type: 'string',
      alias: ['w'],
      description: 'Target width in pixels',
      required: false,
    },
    height: {
      type: 'string',
      alias: ['h'],
      description: 'Target height in pixels',
      required: false,
    },
    format: {
      type: 'enum',
      alias: ['f'],
      description: 'Output image format',
      options: FORMATS,
      required: false,
    },
    quality: {
      type: 'string',
      alias: ['q'],
      description: 'Image quality (1-100)',
      required: false,
    },
  },
  async run({ args }) {
    const { entries, outputDir, width, height, format, quality } = args

    /**
     * citty >= 0.2.1
     * ./images/a.png,./images/b.png -> entries: './images/output/a.png ./images/output/b.png'
     */
    const ENTRIES = entries.split(' ')

    const processOptions = {
      format,
      outputDir,
      width: width ? Number(width) : undefined,
      height: height ? Number(height) : undefined,
      quality: quality ? Number(quality) : undefined,
    }

    await processEntries(ENTRIES, processOptions)
  },
})

runMain(main)
