<template>
  <div class="menu-page">
    <div v-for="(item,key) in menus" :key="key">
      <div class="main-title">{{item.title}}</div>
      <div>
        <div v-for="(item1,key1) in item.cats" :key="key1">
          <div class="main-cat-item flex-between-center">
            <div>{{item1.code}} {{item1.title}} {{item1.price}}/{{item1.mount}}{{item1.unit}}</div>
            <div class="flex-between-center">
              <img src="/static/add.svg" class="add-del-button" @click="add(item1.code)"/>
              <div class="order-monut">{{order[item1.code].count}}</div>
              <img src="/static/del.svg" class="add-del-button" @click="del(item1.code)"/>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>
    <div class="order-frame">
      <div class="main-title order-title">订单详情</div>
      <div v-if="!refresh">
        <div v-for="(item,key) in orderList" class="flex-between-center order-list-item">
          <div>{{item.code}}*{{item.count}} ({{item.title}})</div>
          <div>{{item.amount}}</div>
        </div>
        <br>
        <div class="flex-between-center order-list-item">
          <div>总计</div>
          <div>{{this.total}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShopData from '../config/shops/lsy.js'
export default {
  data(){
    return {
      menus:[],
      welware:[],
      order:{},
      orderList:[],
      total:0,
      refresh: false
    }
  },
  mounted(){

    const { menus, welware } = ShopData

    this.menus = menus

    this.welware = welware

    for (let i = 0; i < this.menus.length; i++) {

      let cats = this.menus[i].cats
      
      for (let j = 0; j < cats.length; j++) {

        let code = cats[j].code

        let price = cats[j].price

        let title = cats[j].title

        this.order[code] = { code, price, title, count: 0, amount: 0 }
      }
    }
  },
  methods:{
    add(code){
      
      this.order[code].count = this.order[code].count + 1

      this.order[code].amount = this.order[code].count*this.order[code].price

      this.freshCount()
    },
    del(code){

      if (this.order[code].count<=0) {

        return 
      }

      this.order[code].count = this.order[code].count - 1

      this.order[code].amount = this.order[code].count*this.order[code].price

      this.freshCount()
    },
    freshCount(){

      let total = 0

      this.orderList = []

      for (let i in this.order) {

        if (this.order[i].count>0) {

          total = total + this.order[i].amount

          this.orderList.push(this.order[i])
        }
      }

      this.total = total

      console.log(this.orderList,this.total)

      this.refresh = true

      setTimeout(()=>{

        this.refresh = false

      })
    }
  }
}
</script>
<style scoped>
  .menu-page{
    background-color: #333333;
    height: 100vh;
    color: #ffffff;
    overflow: auto;
    padding: 10px;
  }
  .main-title{
    font-size: 20px;
    font-weight: bold;
  }
  .main-cat-item{
    margin-top: 10px;
  }
  .add-del-button{
    width: 20px;
    height: 20px;
    fill: red;
  }
  .order-monut{
    width: 40px;
  }
  .order-frame{
    min-height: 200px;
  }
  .order-title{
    color: red;
  }
</style>