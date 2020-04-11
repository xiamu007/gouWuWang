<template>
  <div>
    <div>
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel trigger="click" :height="height + 'px'">
        <el-carousel-item v-for="(item,index) in list" :key="index" class="bar">
          <p class="p">{{item.text}}</p>
          <div v-if="num">
            <span class="num">{{index+1}}</span>
            <span class="num2">/5</span>
          </div>
          <img :src="item.image" alt="" class="img">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>
<script>
export default {
  name: "component_name",
  props:["list","height","num"]
}
</script>
<style scoped>
.bar {
  text-align: center;
}
.p {
  font-size: 20px;
  margin-bottom: 5px;
}
.img {
  /* width: 100%; */
}
.num {
  font-size: 20px;
  color: #f00;
}
.num2 {
  font-size: 12px;
}
</style>