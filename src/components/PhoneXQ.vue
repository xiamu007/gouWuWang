<template>
  <div class="XQ" v-if="data">
    <div class="img">
      <img :src="data.image[index]" alt="">
    </div>
    <div class="describe">
      <p>{{data.description}}</p>
      <!-- <p class="price">价格：¥{{data.price}}</p> -->
      <p>
        <span>价格：</span>
        <span class="price">¥{{data.price}}</span>
      </p>
      <p>型号：{{data.type}}</p>
      <p>Rom：{{data.rom}}</p>
      <p>Ram：{{data.ram}}</p>
      <p>系统：{{data.os}}</p>
      <p>重量：{{data.weight}}</p>
      <p>
        颜色：
         <el-radio  v-model="radio1" border  :label="item"
         v-for="(item,index) in data.color" :key="index"
         @change="colorClick(index)">
          </el-radio >
      </p>

      <p><el-button type="primary">加入购物车</el-button></p>
    </div>

    
  </div>
</template>
<script>
import axios from "axios"
  
export default {
  name: "component_name",
  props:["id"],
  data() {
    return {
      data:"",
      index:0,
      radio1:""
    }
  },
  methods: {
    colorClick(index) {
      this.index = index
    }
  },
  created() {
    axios.get(`/v1/home/phoneDetail?id=${this.id}`)
        .then((res) => {
          console.log(res.data);
          this.data = res.data
          // console.log(this.data);
        })
  },
}
</script>
<style scoped>
  .XQ {
    display: flex;
  }
  .img {
    border: 1px solid #eee;
    padding: 10px 0;
    margin-right: 20px;
  }
  .describe {
    margin-top: 30px;
    font-size: 14px;
  }
  .describe>:nth-child(1) {
    font-size: 18px;
  }
  .describe p {
    margin-bottom: 20px;
  }
  .price {
    font-size: 20px;
    color: #f00;
  }
</style>