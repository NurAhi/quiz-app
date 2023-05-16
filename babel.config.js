module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', 'next/babel'],
  plugins: [['styled-components', { ssr: true, displayName: true }]],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: 'current node',
          },
        ],
      ],
    },
  },
};
