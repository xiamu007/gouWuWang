<template>
  <div>
    <div class="menus">
      <el-tag
        v-for="(tag,index) in List"
        :key="tag.name"
        closable
        @close = closeClick(index,tag.type)>
        {{tag.value}}
      </el-tag>

      <div class="item1 item2" v-if="isShow1" >
        <div class="left1">
          <span>品牌</span>
        </div>
        <div class="right1">
          <div v-for = "(item,index) in menu1" :key="index+item" class="rights1">
              <span @click="spanClick(item,'brand')">{{item}}</span>
          </div>
        </div>
      </div>

      <div class="item1" v-if="isShow2" >
        <div class="left1">
          <span>机身内存</span>
        </div>
        <div class="right1">
          <div v-for = "(item,index) in menu2" :key="index+item" class="rights1">
              <span @click="spanClick(item,'rom')">{{item}}</span>
          </div>
        </div>
      </div>

      <div class="item1" v-if="isShow3" >
        <div class="left1">
          <span>操作系统</span>
        </div>
        <div class="right1">
          <div v-for = "(item,index) in menu3" :key="index+item" class="rights1">
              <span @click="spanClick(item,'os')" >{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props:["menu1","menu2","menu3"],
  data () {
    return {
      List:[],
      isShow1:true,
      isShow2:true,
      isShow3:true,

    }
  },
  methods: {
    spanClick(item,type) {
      if(type == 'brand') {
        this.isShow1 = false
      }else if (type == 'rom') {
        this.isShow2 = false
      }else {
        this.isShow3 = false
      }
      this.List.push({
        value:item,
        type
      });

      // this.$emit("change",this.List)
      this.$bus.emit("change",this.List)
      // console.log(this.List);
    },
    closeClick(index,type) {
      this.List.splice(index,1);
      if(type == 'brand') {
        this.isShow1 = true
      }else if (type == 'rom') {
        this.isShow2 = true
      }else {
        this.isShow3 = true
      }
      this.$bus.emit("change",this.List)
    }
  },
}
</script>
<style scoped>

.menus {
  margin-top: 100px;
}
.menus .item1 {
  display: flex;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}
.menus>:nth-child(1) {
  background-color: #f00;
}
.menus .item2 {
  border-top: 1px solid #ddd;
}

.menus .left1 {
  background-color: #ececec;
  width: 200px;

}
.menus .right1 {
  display: flex;
  flex: 1;
  font-size: 14px;
  color: #005aa0;
}
.menus .right1 span:hover {
  cursor: pointer;
}
.menus .rights1 {
  margin-right: 15px;
  margin-left: 5px;
}

</style>