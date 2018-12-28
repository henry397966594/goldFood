/* 包含多个基于state的getter计算属性的对象 */
export default {
  totalCount(state) {
    return state.cartFoods.reduce((preToatl, item) =>
      preToatl + item.count,0
    )
  },
  totalPrice(state) {
    return state.cartFoods.reduce((preToatl, item) =>
      preToatl + item.count*item.price,0
    )
  },
}
