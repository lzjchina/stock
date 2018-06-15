<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header></Header>
    <!-- <PersonLogin></PersonLogin> -->
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Common/Header'
// import PersonLogin from './components/Common/PersonLogin'
export default {
  name: 'App',
  components: {
    Header
    // PersonLogin
  }
}
</script>

<style>
body,p,h1,h2,h3,h4,h5,h6,ul,dl,dd,td,input,fieldset,textarea,option{ margin:0; padding:0;font-family: "MicrosoftYaHei";}
li{list-style:none;}
a{text-decoration:none; color:#333;}
img{border:none; vertical-align:middle;object-fit: cover;max-width: 100%;max-height: 100% }
a,input{outline:none;}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:100;}
i,em{font-style:normal;}
body{font:12px "MicrosoftYaHei";}
.slid .swiper-pagination-bullet {
  background: #8f9cb2;
  opacity: 1;
}
.slid .swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}
#app {
  width: 100%;
}
</style>
