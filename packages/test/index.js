/*
 * @Author: 林娴
 * @LastEditors: 林娴
 */
// 为组件提供 install 方法，供组件对外按需引入
import LxTest from './src/test'
LxTest.install = Vue => {
  Vue.component(LxTest.name, LxTest)
}
export default LxTest

