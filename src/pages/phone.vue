<template>
  <div>
    <div class="wrap">
      <!-- 轮播图组件 -->
      <navBar :list = "list"></navBar>
      <!-- choose组件 -->
      <choose :menu1 = "menu1" :menu2 = "menu2" :menu3 = "menu3" 
      @change="handChange"></choose>
      <!-- phoneList组件 -->
      <phoneList :choiceTag="choiceTag" class="phones"></phoneList>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import phoneList from "../components/PhoneList"
import navBar from "../components/Nav-bar"
import choose from "../components/Choose"
export default {
  name: '',
  components: {
    phoneList,
    navBar,
    choose
  },
  props: {
  },
  data() {
    return {
      list:[],
      menu1:[],
      menu2:[],
      menu3:[],
      phones:{},
      choiceTag:{}

    }
  },
  methods: {
    handChange(List) {
      this.choiceTag = List;
      console.log(this.choiceTag);
      
      // let query = "";
      // List.map((item) =>{
      //   query += `${item.type}=${item.value}&`
      // });
      // console.log("-----",query);
      // axios.get(`/v1/home/phoneList?${query}`)
      // .then((res =>{
      //   this.phones = res.data
      // }))
    }
  },
    mounted() {
    axios.get("/v1/home/banner")
    .then((res)=>{
      // if(res.data.retcode == -90001){
        // this.$router.push({path:"/login"})
      // }
      // console.log(res.data);
      // console.log(res.data.retcode);
      this.list = res.data;
    })
    axios.get("/v1/home/filterMenu")
    .then((res)=>{
      // console.log(res);
      this.menu1 = res.data.brand;
      this.menu2 = res.data.rom;
      this.menu3 = res.data.os;
    })
    axios.get("/v1/home/phoneList")
    .then((res)=>{
 
      this.phones = res.data;   
      // console.log(this.phones);
      
    })
  }
}
</script>


<style scoped>
.wrap {
  /* background-color: #f00; */
}



</style>
