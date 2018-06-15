<template>
  <div class="StockSchool">
    <!-- <Header></Header> -->
    <Footer></Footer>
    {{msg}}
  </div>
</template>

<script>
// import Header from '../Common/Header'
import Footer from '../Common/Footer'
export default {
  name: 'StockSchool',
  components: {
    // Header,
    Footer
  },
  data () {
    return {
      msg: 'StockSchool'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
