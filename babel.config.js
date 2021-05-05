module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: 'current'}} ],
    "@babel/preset-typescript"
  ],
  plugins: [
   [
    "module-resolver",
    {
      alias: {
        "@core":  "./src/core",
        "@modules": "./src/modules",
        "@infra": "./src/infra"
      }
    }
   ],
   "babel-plugin-transform-typescript-metadata",
   ["@babel/plugin-proposal-decorators", { legacy: true }],
   ["@babel/plugin-proposal-class-properties", { loose: true }]
  ]
  }
