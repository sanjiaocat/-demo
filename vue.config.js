

module.exports = {
    // 代理配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://m.you.163.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '', // 去掉path前面的/api
                },
            }
        }
    }
}