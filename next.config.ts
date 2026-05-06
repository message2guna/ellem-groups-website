import type { Config } from 'next'

const config: Config = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

export default config
