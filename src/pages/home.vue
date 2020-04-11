<template>
  <div class="wrap">
    <el-header>
      <cHeadMenu></cHeadMenu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import cHeadMenu from "../components/HeadMenu2"
export default {
  name: '',
  components:{
    cHeadMenu
  },
  props: {
    
  }
}
</script>


<style scoped>
  .el-header {
    padding: 0;
  }
  .wrap {
    height: 100%;
  }
</style>
