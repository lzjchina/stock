<template>
  <div class="header">
    <div class="header_box">
      <!-- logo -->
      <router-link class="header_logo" to="/">{{header_logo}}</router-link>
      <div class="header_city">
        <span class="header_cityName">深圳</span>
        <span class="header_cityChange">[切换城市]</span>
        <span class="header_cityLocal"></span>
      </div>
      <!-- 导航 -->
      <ul class="header_nav">
        <li v-for="(items, index) in header_nav" :key="index" :class="{active: items.isActive}" @click="h_navAction(items)">
          <router-link class="header_nav_items" :to="items.url" >{{items.name}}</router-link>
        </li>
      </ul>
      <!-- 个人、企业会员 -->
      <div class="header_login">
        <span v-if="!getLoginSuccess" class="header_login_personal">个人会员</span>
        <span v-if="!getLoginSuccess" class="header_login_company">企业会员</span>
        <img v-if="getLoginSuccess" :src="this.$store.state.visitorImg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      loginSuccess: false,
      header_logo: '股往金来',
      header_nav: [
        {
          name: '首页',
          url: '/',
          isActive: true
        },
        {
          name: '股权发布',
          url: '/StockPublic',
          isActive: false
        },
        {
          name: '股权学院',
          url: '/StockSchool',
          isActive: false
        },
        {
          name: '关于我们',
          url: '/Aboutus',
          isActive: false
        }
      ]
    }
  },
  methods: {
    h_navAction: function (items) {
      for (var i = this.header_nav.length - 1; i >= 0; i--) {
        this.header_nav[i].isActive = false
      }
      items.isActive = true
    }
  },
  computed: {
    getLoginSuccess: function () {
      return this.$store.state.visitor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #2D2D2D;
  position: fixed;
  top: 0;
  z-index: 999;
}
.header_box {
  width: 1100px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /*background-color: #2D2D2D;*/
}
.header_logo {
  font-size: 30px;
  color: #FEFEFE;
  cursor: pointer;
  font-family: "FZZYJW--GB1-0";
}
.header_city {
  display: flex;
  align-items: center;
  margin-left: 18px;
}
.header_cityName {
  font-size: 16px;
  color: #FFE4AA;
  cursor: pointer;
  margin-left: 15px;
}
.header_cityChange {
  font-size: 16px;
  color: #777;
  cursor: pointer;
  margin-left: 15px;
}
.header_cityLocal {
  cursor: pointer;
  width: 15px;
  height: 15px;
  background: url(../../assets/header_cityLocal.png) center/12px 15px no-repeat;
  margin-left: 15px;
}
.header_nav {
  display: flex;
  height: 80px;
  margin: 0 42px 0 142px;
}
.header_nav li.active {
  background: #222;
}
.header_nav_items {
  display: inline-block;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  color: #FFE4AA;
  cursor: pointer;
  font-size: 18px;
}
.header_login {
  display: flex;
  justify-content: center;
}
.header_login_personal, .header_login_company {
  margin: 0 9px;
  font-size: 16px;
  color: #777;
  cursor: pointer;
}
</style>
