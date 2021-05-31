module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/pendulum/" : "/",
  css: {
    sourceMap: true
  },
  chainWebpack: config => config.resolve.symlinks(false)
};
