/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-07-01 21:00:48
 * @LastEditTime: 2021-07-02 10:26:11
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { 
    target: 'http://47.111.207.250:9045',
    changeOrigin:true,
    pathRewrite: {
                "^/api": "" // 把/api 变成空
            }
     })
  );
};
