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
      <br/>
      <div v-if="!refresh">
        <div v-for="(item,key) in orderList" :key="`order-${key}`" class="flex-between-center order-list-item">
          <div class="flex-start-center" style="width: 60%">
            <div style="width: 40%;text-align: left;">{{item.code}}*{{item.count}}</div>
            <div style="width: 60%;text-align: left;">{{item.title}}</div>
          </div>
          <div>{{item.amount}}</div>
        </div>
        <div v-for="(item,key) in welwareList" :key="`free-${key}`" class="flex-between-center order-list-item">
          <div class="flex-start-center" style="width: 60%">
            <div style="width: 40%;text-align: left;">{{item.code}}*{{item.count}}</div>
            <div style="width: 60%;text-align: left;">{{item.title}}</div>
          </div>
          <div>{{item.amount}}</div>
        </div>
        <br>
        <div class="flex-between-center order-list-item">
          <div>总计</div>
          <div>{{this.total}}</div>
        </div>
        <div style="padding: 50px">
          <mt-button type="primary" size="small" v-clipboard:copy="orderContent" v-clipboard:success="onCopy">复制订单信息</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShopData from '../config/shops/lsy.js'
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      menus:[],
      welware:[],
      order:{},
      orderList:[],
      welwareList:[],
      orderContent:'',
      total:0,
      refresh: false,
      wait:false
    }
  },
  mounted(){

    const { menus, welware } = ShopData

    this.menus = menus

    this.welware = welware

    console.log(this.welware)

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
    onCopy(){

      Toast({ message: '复制成功',iconClass: 'icon icon-success' })
    
    },
    add(code){

      if (this.wait) {

        return
      
      }
      
      this.wait = true

      this.order[code].count = this.order[code].count + 1

      this.order[code].amount = this.order[code].count*this.order[code].price

      this.freshCount()
    },
    del(code){

      if (this.wait) {
      
        return
      
      }

      if (this.order[code].count<=0) {

        return 
      }

      this.wait = true

      this.order[code].count = this.order[code].count - 1

      this.order[code].amount = this.order[code].count*this.order[code].price

      this.freshCount()
    },
    freshCount(){

      let total = 0

      this.orderList = []

      this.welwareList = []

      this.orderContent = ''

      for (let i in this.order) {

        if (this.order[i].count>0) {

          total = total + this.order[i].amount

          this.orderList.push(this.order[i])

          this.orderContent = `${this.orderContent}${this.order[i].code}*${this.order[i].count}  ${this.order[i].amount}\n`
        }
      }

      this.total = total

      for (let i = 0; i < this.welware.length ; i++) {

        let { min, max, free } = this.welware[i]

        if (this.total>=min&&this.total<max) {

          this.welwareList = free
        }
      }

      for (let i = 0; i < this.welwareList.length; i++) {

        this.orderContent = `${this.orderContent}${this.welwareList[i].code}*${this.welwareList[i].count}  ${this.welwareList[i].amount}\n`
      }

      this.orderContent = `${this.orderContent}\n总计  ${this.total}`

      this.refresh = true

      setTimeout(()=>{

        this.refresh = false

        this.wait = false

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