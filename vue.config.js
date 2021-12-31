
module.exports = {
    "publicPath": process.env.NODE_ENV === 'production' ? '' : './',
    "assetsDir": 'assets',
    "outputDir": 'dist',
    "productionSourceMap": process.env.NODE_ENV === 'development',
    "chainWebpack": (config) => {
        if (process.env.NODE_ENV === 'production') { // 生产环境配置
            config.mode = 'production'
            // config.performance = {
            //     hints:'warning',
            //     maxEntrypointSize: 10000000,
            //     maxAssetSize: 30000000
            // }
        } else { // 开发环境配置
            config.devtool = 'source-map';
        }
        config.resolve.alias
            .set('assets', '@/assets')
            .set('components', '@/components')
            .set('routes', '@/routes')
            .set('utils', '@/utils')
            .set('layout', '@/layout')
            .set('views', '@/views')
        // config.module
        //     .rule('html-loader')
        //     .test(/\.(html)$/)
        //     .use('html-loader')
        //     .loader('html-loader')
        //     .end();
    }
}
