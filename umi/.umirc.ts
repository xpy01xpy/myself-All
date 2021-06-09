/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-05-27 19:59:35
 * @LastEditTime: 2021-05-27 20:02:38
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/2', component: '@/pages/index2' },
  ],
  fastRefresh: {},
});
