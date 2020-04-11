<template>
  <div class="wrap333" @click="pIClick(item.id)">
    <div class="wrap">
      <div class="image">
        <img :src="item.image" alt="" >
      </div>
      <div class="price">¥{{item.price}}</div>
      <p class="des">{{item.description}}</p>
      <p class="comment">{{item.comment}}</p>
      <span><el-tag size="mini" type="danger" hit>自营</el-tag></span>
    
   
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props:["item"],
  methods: {
    pIClick(id) {
      // console.log(id);
      this.$router.push(`/home/detail/${id}`)
    }
  },

}
</script>
<style scoped>
.wrap333 {
  width: 25%;
  padding: 20px 0;
  
}
.wrap {
  width: 220px;
  margin: 0 auto;
  font-size: 12px;
}
.wrap333:hover {
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

.comment {
  font-weight: 700;
  color:#646fb0;
}
</style>