module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    })

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    })

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })

    return config
  },
  env: {
    /**
     * Development: (NODE_ENV === 'development')
     * Staging:     (NODE_ENV === 'production')  && (RELEASE !== 'production')
     * Production:  (NODE_ENV === 'production') && (RELEASE === 'production')
     */
    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:8081/v1/graphql',
    NEXT_PUBLIC_RELEASE: process.env.NEXT_PUBLIC_RELEASE || 'development',
  },
}
