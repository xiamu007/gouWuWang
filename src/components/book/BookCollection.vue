<template>
  <div class="Collection">
    <div class="top">我的收藏 (共{{bookLists.length}}本)：</div>

    <div class="main">
      <div class="wz">
        <div class="wzItem">图片</div>
        <div class="wzItem">描述</div>
      </div>

      <div v-if="bookLists.length == 0" class="zw">
        <span>暂无数据</span>
      </div>

      <div v-for="(item,index) in bookLists" :key="index">
        <div class="aa">
          <img :src="item.image" alt="" class="image3">
          <span class="ms">{{item.description}}</span>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: "component_name",
  props:["bookLists"],
  data() {
    return {
      aa:"",
      isShow:true,
      num:this.bookLists.length
    }
  },
}
</script>
<style scoped>
  /* 整个的css */
  .Collection {
    margin-top: 50px;
  }
  /* 共几本的css */
  .top {
    text-align: center;
    font-size: 20px;
    color: #2d8cf0;
    margin-bottom: 30px;
  }
  /* 头的css */
  .main {
    width: 1400px;
    left: 0;
    right: 0;
    margin: 0 auto;
    outline: 1px solid #aaa;
  }
  .wz {
    display: flex;
     background-color: #f8f8f9;
  }
  .wzItem {
    flex: 1;
    height: 40px;
    line-height: 40px;
    margin-left: 20px;
    font-weight: 700;
    font-size: 14px;
  }
  /* 循环每行的 */
  .aa {
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .image3 {
    width: 100px;
    margin-left: 20px;
  }
  .ms {
    line-height: 100px;
    margin-left: 600px;
    font-size: 14px;
    color: #515a6e;
  }
  /* 暂无数据的css */
  .zw {
    text-align: center;
    line-height: 100px;
    font-size: 14px;
    color: #515a6e;
  }
</style>