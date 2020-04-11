<template>
  <div class="books">
    <navBar :list = "imgData" :height="height" :num="num" class="navBar"></navBar>
    <book-list :list="List" @SC="SCChange"></book-list>
    <book-collection :bookLists = "bookLists"></book-collection>
    <br><br><br>
    <br><br><br>
    <br><br><br>
    <br><br><br>
  </div>
</template>

<script>
import axios from "axios"
import navBar from "../components/Nav-bar"
import BookList from "../components/book/BookList"
import BookCollection from "../components/book/BookCollection"
export default {
  name: '',
  components: {
    navBar,
    BookList,
    BookCollection,
  },
  props: {
    
  },
  data() {
    return {
      imgData:"",
      height:450,
      num:1,
      List:{},
      bookLists:[]
    }
  },
  methods: {
    SCChange(list) {
      this.bookLists = list
      console.log(this.bookLists);
      
    }
  },
  mounted() {
    axios.get("/v1/book/banner")
      .then((res) => {
        this.imgData = res.data;
      })

  },
}
</script>


<style scoped>
  .books {


  }
  .navBar {
    
    border-bottom: 1px solid #eee;
  }
</style>
