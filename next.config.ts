import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: '@wyw-in-js/webpack-loader',
          options: {
            sourceMap: dev,
            displayName: dev,
            babelOptions: {
              presets: ['@wyw-in-js/babel-preset'],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
