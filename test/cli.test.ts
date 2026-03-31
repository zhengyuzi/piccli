import path from 'node:path'
import { execa } from 'execa'
import fs from 'fs-extra'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

const FIXTURES = 'vendor/sharp/test/fixtures'

describe('cLI', () => {
  const testDir = path.resolve('./test-output')

  beforeAll(async () => {
    await fs.ensureDir(testDir)
    await fs.emptyDir(testDir)
  })

  afterAll(async () => {
    await fs.remove(testDir)
  })

  it('should show help', async () => {
    const { stdout } = await execa('esno', ['src/cli.ts', '--help'])
    expect(stdout).toContain('piccli')
    expect(stdout).toContain('--width')
    expect(stdout).toContain('--height')
    expect(stdout).toContain('--format')
  })

  it('should show version', async () => {
    const { stdout } = await execa('esno', ['src/cli.ts', '--version'])
    expect(stdout).toMatch(/\d+\.\d+\.\d+/)
  })

  it('should process jpg to webp', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '-f', 'webp'])

    const output = `${testDir}/Landscape_1.webp`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should process jpg to png', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '-f', 'png'])

    const output = `${testDir}/Landscape_1.png`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should process jpg to jpg', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '-f', 'jpg'])

    const output = `${testDir}/Landscape_1.jpg`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should resize with width only', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '--width', '100'])

    const output = `${testDir}/Landscape_1.jpg`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should resize with height only', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '--height', '100'])

    const output = `${testDir}/Landscape_1.jpg`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should resize with both width and height', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '--width', '100', '--height', '100'])

    const output = `${testDir}/Landscape_1.jpg`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should apply quality option', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '-f', 'jpg', '-q', '50'])

    const output = `${testDir}/Landscape_1.jpg`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should process directory', async () => {
    await fs.emptyDir(testDir)
    await execa('esno', ['src/cli.ts', FIXTURES, '-o', testDir, '-f', 'webp'])

    const files = await fs.readdir(testDir)
    expect(files.length).toBeGreaterThan(0)
    expect(files.some(f => f.endsWith('.webp'))).toBe(true)
  })

  it('should process png to webp', async () => {
    const input = `${FIXTURES}/2x2_fdcce6.png`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '-f', 'webp'])

    const output = `${testDir}/2x2_fdcce6.webp`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should handle gif', async () => {
    const input = `${FIXTURES}/Crash_test.gif`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '-f', 'png'])

    const output = `${testDir}/Crash_test.png`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should handle webp input', async () => {
    const input = `${FIXTURES}/4.webp`
    await execa('esno', ['src/cli.ts', input, '-o', testDir, '-f', 'png'])

    const output = `${testDir}/4.png`
    expect(await fs.pathExists(output)).toBe(true)
  })

  it('should output to default output directory', async () => {
    const input = `${FIXTURES}/Landscape_1.jpg`
    const defaultOutputDir = path.resolve(`${path.dirname(input)}/output`)

    await execa('esno', ['src/cli.ts', input])

    const output = `${defaultOutputDir}/Landscape_1.jpg`
    expect(await fs.pathExists(output)).toBe(true)
    await fs.remove(defaultOutputDir)
  })
})
