<template>
  <div class="list1">

    <div class="search">
      <el-input v-model="input1" placeholder="¥" class="e-input"></el-input>
        <span>-</span>
      <el-input v-model="input2" placeholder="¥" class="e-input"></el-input>
      <el-button type="primary" size="small" @click="searchClick">搜索</el-button>
    </div>

    <div class="list">
      <book-list-item v-for="(item,index) in list" :key="index" 
        :item="item"  @change="change(index)"></book-list-item>
    </div>


  </div>
</template>
<script>
import BookListItem from "./BookListItem"
import axios from "axios"
export default {
  name: "component_name",
  data() {
    return {
      list:[],
      input1:"",
      input2:"",
      indexs:0,
      listSX:[]
    }
  },
  components: {
    BookListItem
  },
  methods: {
    change(index) {
      this.list[index].isCollected = !this.list[index].isCollected;
      this.listSX = this.list.filter((n => {
        return n.isCollected == true
      }))
      this.$emit("SC",this.listSX)
    },
    searchClick() {
      if(this.input1&&this.input2||this.input1==false&&this.input2==false)
      axios.get(`/v1/book/detail?low=${this.input1}&high=${this.input2}`)
        .then((res) => {
          this.list = res.data
        })
    }
  },
  
  mounted() {
    axios.get("/v1/book/detail")
    .then((res) => {
      this.list = res.data
      // console.log(this.list);
    })
  },
  
}
</script>
<style scoped>
  .list {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }
  .e-input {
    width: 200px;
    margin-left: 10px;
    margin-right: 10px;
  }

</style>