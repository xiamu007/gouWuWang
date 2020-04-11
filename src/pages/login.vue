<template>
  <div class="wrap">
    
    <div class="frame">
      <div class="first">
        <el-row>
          <el-col :span = "4">
            <span>用户：</span>
          </el-col>
          <el-col :span = "20">
            <el-input v-model="name" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </div>

      <div class="last">
        <el-row>
          <el-col :span = "4">
            <span>密码：</span>
            </el-col>
          <el-col :span = "20">
            <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
          </el-col>
        </el-row>
      </div>

      <div class="btn1">
        <el-row>
          <el-col :span = "24">
            <el-button @click="btnClick"  type="primary">
              <span>登录</span>
            </el-button>
          </el-col>
        </el-row>
      </div>

      <div class="error" v-if = "aa">
        <h2>账号或密码错误</h2>
      </div>

    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: '',
  data(){
    return {
      name:"",
      password:"",
      code:"",
      message:"",
      aa:false
    }
  },
  methods: {
    btnClick(){
      axios.post("/v1/login",{
        name: this.name,
        password: this.password,
      }).then((res)=>{
        console.log(res.data);
        
        
        if(res.data.code == 1) {
          this.$router.push({path:"/home"})
        }else {
          this.aa = true
        }
        
        
      })
    }
  },
}
</script>

<style scoped>
  .wrap {
    height: 100vh;
    /* background-color: #efefef; */
  }
  .frame {
    position: relative;
    top: 200px;
    /* margin-top: 300px; */
    width: 300px;
    /* background: #ccc; */
    margin-top: 200px;
    margin:0 auto;
    /* border: 1px solid #666; */
    font-size: 12px;
  }
  .first,.last,.btn1 {
    margin-bottom: 20px;
  }
  .first span,.last span {
    display: inline-block;
    margin-top: 9px;
  }


</style>
