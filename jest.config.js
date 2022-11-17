module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/.github/",
  ],
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/file-transformer.js",
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
};
