<template>
  <div>
    <div class="wrap">
      <phoneItem v-for = "(item,index) in phones" 
      :key="index+item" 
      :item = "item" class="box"
      />
    </div>
  </div>
</template>
<script>
import phoneItem from "./PhoneItem"
import axios from "axios"
export default {
  name: "component_name",
  data(){
    return {
      phones:{}
    }
  },
  props:["choiceTag"],
  components:{
    phoneItem
  },
  created() {
    this.$bus.on("change",this.filter)
  },
  mounted() {
    axios.get("/v1/home/phoneList")
    .then((res)=>{
      this.phones = res.data;   
      // console.log(this.phones);
    })
  },
  methods: {
    filter(change) {
      let query = "";
      change.map((item) =>{
        query += `${item.type}=${item.value}&`
      });
      console.log("-----",query);
      axios.get(`/v1/home/phoneList?${query}`)
      .then((res =>{
        this.phones = res.data
      }))
    },
    // pIClick(id) {
    //   console.log("aaa");
      
    //   console.log(id);
      
    // }
  },
  // watch: {
  //   choiceTag(val,oldVal) {
  //     let query = "";
  //     val.map((item) =>{
  //       query += `${item.type}=${item.value}&`
  //     });
  //     console.log("-----",query);
  //     axios.get(`/v1/home/phoneList?${query}`)
  //     .then((res =>{
  //       this.phones = res.data
  //     }))
  //   }
  // },
}
</script>
<style scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  /* border: 1px solid #999; */
}
.box {
  /* width: 25%; */
  /* margin-left: 10px; */
  
}
</style>