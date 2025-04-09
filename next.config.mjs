import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com', 'cdn.dribbble.com', 'emitra-bugsquashers.netlify.app'], // Add domains as needed
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevents build from failing on ESLint warnings
  },
  typescript: {
    ignoreBuildErrors: true, // Prevents build from failing on TS errors (use only if you're sure!)
  },
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
