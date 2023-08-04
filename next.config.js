/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const { parsed: localEnv } = require('dotenv').config({
  path: '.env.local',
});

const { parsed: buildEnv } = require('dotenv').config({
  path: '.env.build',
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    ...localEnv,
    ...buildEnv, 
  },
  async redirects () {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  },
  i18n,
  images: {
    domains: ['api.topemlak.az'],
  },
}

module.exports = nextConfig


