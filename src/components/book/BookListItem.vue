<template>
  <div class="items">
    <div class="image">
      <img :src="item.image" alt="" >
    </div>
    <div class="wrap">
      <div class="price">¥{{item.price}}</div>
      <p class="des">{{item.description}}</p>
      <p class="comment">{{item.comment}}</p>
      <span><el-tag size="mini" type="danger" hit>自营</el-tag></span>
      <img src="../../assets/心.png" alt="" v-if="isActive1" class="xin" @click="img1Click">
      <img src="../../assets/心-active.png" alt="" v-if="isActive2" class="xin" @click="img2Click">
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props: ["item"],
  data() {
    return {
      isActive1:true,
      isActive2:false,
    }
  },
  methods: {
    img1Click() {
      this.isActive1 = false;
      this.isActive2 = true;
      this.$emit("change");
    },
    img2Click() {
      this.isActive1 = true;
      this.isActive2 = false;
      this.$emit("change");
    }
  },
}
</script>
<style scoped>
  .items {
    width: 25%;
    padding-top: 10px;
  }
  .items:hover {
  cursor: pointer;
  box-shadow: 0 0 3px #bbb;
  }
  .image {
   text-align: center;
  }
  .price {
    font-size: 22px;
    color:#f00;  
  }
  .wrap {
    width: 220px;
    margin: 0 auto;
    font-size: 12px;
  }
  .comment {
    font-weight: 700;
    color:#646fb0;
  }
  .xin {
    margin-left: 160px;
    width: 20px;
  }
</style>