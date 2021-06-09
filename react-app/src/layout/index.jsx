/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-12 19:57:11
 * @LastEditTime: 2021-04-26 10:13:35
 */
import Header from '../component/Header/index'
import Left from '../component/Left'
import styles from "./styles.module.css"


const Layout = (props) =>{
  const Router = props.content;
  return <div className={styles['layout-warrper']}>
    <div className={styles['layout-left']}>
      <Left />
    </div>
    <div className={styles['layout-right']}>
      <div className={styles["layout-header"]}>
        <Header />
      </div>
      <div className={styles["layout-content"]}>
        {Router}
      </div>
    </div>
  </div>
}

export default Layout;