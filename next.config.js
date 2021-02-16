// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({})

// // old way for versions lower than 9.4
// const nextEnv = require('next-env')
// const dotenvLoad = require('dotenv-load')

// dotenvLoad()

// const withNextEnv = nextEnv()
// module.exports = withNextEnv()

// you can export an object
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
// module.exports = {
//   webpack: {
//     plugins: [new BundleAnalyzerPlugin({})],
//   },
//   env: {
//     MY_ENV_VAR: process.env.SECRET,
//   },
// }

// or, you can export a function
// const { PHASE_PRODUCTION_SERVER } = require('next/constants')

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_SERVER) {
//     return {
//       ...defaultConfig,
//       webpack: {
//         plugins: [new BundleAnalyzerPlugin()],
//       },
//     }
//   }

//   return defaultConfig
// }
