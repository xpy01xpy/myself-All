/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-05-27 19:59:35
 * @LastEditTime: 2021-06-25 11:51:07
 */
import styles from './index.less';
import Home from './Home'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Home />
    </div>
  );
}
