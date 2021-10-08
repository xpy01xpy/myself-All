import A from "@/pages/A"
import B from "@/pages/B"
import TC from "@/pages/threeChildren"
import Exp from "@/pages/export_com"

const routerList = [
  {
    path: '/A',
    component: A,
    exact: true,
    MenuName:'列表页'
  },
  {
    path: '/B',
    component: B,
    exact: true,
    MenuName:'详情页'
  },
  {
    path: '/threeChildren',
    component: TC,
    exact: false,
    MenuName:'多个页面',
  },
  {
    path: '/export',
    component: Exp,
    exact: true,
    MenuName:'导出页面',
  },
];
 
export default routerList;