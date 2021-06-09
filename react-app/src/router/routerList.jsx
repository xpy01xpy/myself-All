import A from "@/pages/A"
import B from "@/pages/B"

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
];
 
export default routerList;