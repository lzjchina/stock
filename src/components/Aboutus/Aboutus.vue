<template>
  <div class="Aboutus">
    <!-- <Header></Header> -->
    <Footer></Footer>
    {{msg}}
  </div>
</template>

<script>
// import Header from '../Common/Header'
import Footer from '../Common/Footer'
export default {
  name: 'Aboutus',
  components: {
    // Header,
    Footer
  },
  data () {
    return {
      msg: 'Aboutus'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
