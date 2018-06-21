<template>
  <div class="StockPublic">
    <Header propRouternum="1" getBgcolor="#fff" isConmonStyle=true></Header>
    <Footer></Footer>
    {{msg}}
  </div>
</template>

<script>
import Header from '../Common/Header'
import Footer from '../Common/Footer'
export default {
  name: 'StockPublic',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      msg: 'StockPublic'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
