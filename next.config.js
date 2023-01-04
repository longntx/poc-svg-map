/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: 'cleanupIDs',
                      active: false,
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          test: require.resolve('snapsvg/dist/snap.svg.js'),
          use: [
            {
              loader: 'imports-loader',
              options: {
                type: 'module',
                wrapper: 'window',
                additionalCode: 'module.exports = 0;',
              },
            },
          ],
        },
      ],
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      snapsvg: 'snapsvg/dist/snap.svg.js',
    };

    return config;
  },
};

module.exports = nextConfig;
