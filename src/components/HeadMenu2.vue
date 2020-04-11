<template>
  <div>
    <div class="wrap">
      <div class="item1 item">购物网</div>
      <div class="item2">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#515a6e"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">手机</el-menu-item>
          <el-menu-item index="2">服饰</el-menu-item>
          <el-menu-item index="3">生鲜</el-menu-item>
          <el-menu-item index="4">图书</el-menu-item>
        </el-menu>
      </div>
      <div class="item3 item">购物车</div>
      <div class="item4 item">admin</div>
    </div>
  </div>

</template>
<script>
export default {
  name: "component_name",
  data() {
    return {
      activeIndex: location.pathname,
      paths:["/phone","/clothes","/fresh","/book"],
    }
  },
  methods: {
    handleSelect(index) {
      if(this.$router.currentRoute.path !== "/home"+this.paths[index-1]){
        this.$router.push({path:"/home"+this.paths[index-1]})
      }
    console.log(location.pathname);
    
    }
  },
}
</script>
<style scoped>
.wrap {
  display: flex;
  height: 60px;
  line-height: 60px;
  background-color: #515a6e;
  color:#fff
}
.item {
  width: 200px;
  font-size: 20px;
  text-align: center;
}
.item2 {
  flex: 1;
}
</style>