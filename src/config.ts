import type sharp from 'sharp'

export const FORMATS = [
  'jpg',
  'jpeg',
  'png',
  'webp',
  'svg',
  'gif',
  'tiff',
  'v',
  'avif',
] as (keyof sharp.FormatEnum)[]
