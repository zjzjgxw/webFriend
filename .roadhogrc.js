const path = require('path');
import pxtorem from 'postcss-pxtorem';
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
];

export default {
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "style": "css" }],
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 75,
          propWhiteList: [],
        }),
      ],
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "style": "css" }],
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 75,
          propWhiteList: [],
        }),
      ],
    },
    svgSpriteLoaderDirs: svgSpriteDirs,
  }
}
