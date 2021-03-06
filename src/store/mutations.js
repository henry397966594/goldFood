/* 直接更新state的多个方法对象 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEVIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS](state, {
    address
  }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {
    categorys
  }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {
    shops
  }) {
    state.shops = shops
  },
  [RECEVIVE_USER_INFO](state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },

  [RECEIVE_INFO](state, {
    info
  }) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {
    ratings
  }) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {
    goods
  }) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state, {
    food
  }) {
    if (!food.count) {
     // food.count = 1
     /* 
     对象
     属性名
     属性值
     */
     Vue.set(food,'count',1) //让新增的属性也有数据绑定
     state.cartFoods.push(food)
    } else {
      food.count++

    }
  },
  [DECREMENT_FOOD_COUNT](state, {
    food
  }) {
    if (food.count) {
      food.count--
      if(food.count ===0){
        //将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
}
