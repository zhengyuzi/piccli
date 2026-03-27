import sharp from 'sharp'

export const FORMATS = ['jpg', ...Object.keys(sharp.format)] as (keyof sharp.FormatEnum)[]
