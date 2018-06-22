<template>
  <div class="header" :class="{commonClass:isConmonStyle}">
    <div class="header_box">
      <!-- logo -->
      <span class="header_logo" @click="initNav('/')">{{header_logo}}</span>
      <div class="header_city" @click="showChangeCity">
        <span class="header_cityName_common" >深圳</span>
        <span class="header_cityChange">[切换城市]</span>
        <span class="header_cityLocal"></span>
      </div>
      <!-- 导航 -->
      <ul class="header_nav">
        <li v-for="(items, index) in header_nav" :key="index" :class="{active: items.isActive}">
          <router-link class="header_nav_items" :to="items.url">{{items.name}}</router-link>
        </li>
      </ul>
      <!-- 个人、企业会员 -->
      <div class="header_login" @mouseover="showHeader_personNav" @mouseout="hideHeader_personNav">
        <!-- <span v-if="false" class="header_login_personal">个人会员</span>
        <span v-if="false" class="header_login_company">企业会员</span> -->
        <div v-if="getLoginSuccess" class="header_loginState">
          <img :src="this.getLoginSuccessImg" class="header_visitorImg">
          <span class="header_visitorName">mingzi</span>
        </div>
        <transition enter-active-class="slideInDown" leave-active-class="zoomOutLeft">
          <ul class="header_personNav animated" v-if="isShowHeader_personNav">
            <li><router-link to="/">基本信息</router-link></li>
            <li><router-link to="/Aboutus">我的项目</router-link></li>
            <li><router-link to="/">账户安全</router-link></li>
            <li @click="outLogin">安全退出</li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isShowHeader_personNav: false,
      routNun: '',
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
      ],
      visitorMsgCommonOut: {
        isSuccess: false,
        imgUrl: 'static/images/logos/search.png'
      }
    }
  },
  props: ['propRouternum', 'getBgcolor', 'isConmonStyle', 'ConmonActive'],
  methods: {
    h_navAction: function (index) {
      for (var i = this.header_nav.length - 1; i >= 0; i--) {
        this.header_nav[i].isActive = false
        this.header_nav[index] = true
      }
    },
    initNav: function (jumpName) {
      // console.log(12313)
      var _this = this
      for (var i = _this.header_nav.length - 1; i >= 0; i--) {
        _this.header_nav[i].isActive = false
        _this.header_nav[0].isActive = true
      }
      this.$store.commit('getJumpRouterName', 0)
      this.$router.push(jumpName)
    },
    initNavNum: function (num) {
      var _this = this
      for (var i = _this.header_nav.length - 1; i >= 0; i--) {
        _this.header_nav[i].isActive = false
        _this.header_nav[num].isActive = true
      }
    },
    showChangeCity: function () {
      this.$store.commit('emitisShowChangeCity', true)
    },
    showHeader_personNav: function () {
      this.isShowHeader_personNav = true
    },
    hideHeader_personNav: function () {
      this.isShowHeader_personNav = false
    },
    outLogin: function () {
      this.$store.commit('newVisitor', this.visitorMsgCommonOut)
      this.$store.commit('emitisShowCheckIn', true)
    }
  },
  computed: {
    getLoginSuccessImg: function () {
      return this.$store.state.visitorImg
    },
    getLoginSuccess: function () {
      return this.$store.state.visitor
    }
  },
  mounted () {
    this.routNun = this.propRouternum
    var temp = this.routNun
    for (var i = this.header_nav.length - 1; i >= 0; i--) {
      this.header_nav[i].isActive = false
      if (temp <= this.header_nav.length - 1) {
        this.header_nav[temp].isActive = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #D7D7D7;
}
.header_box {
  /*width: 1100px;*/
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /*background-color: #2D2D2D;*/
}
.header_logo {
  font-size: 30px;
  color: #000;
  cursor: pointer;
  font-family: "FZZYJW--GB1-0";
}
.header_city {
  display: flex;
  align-items: center;
  margin-left: 18px;
}
/*.header_cityName {
  font-size: 16px;
  color: #FFE4AA;
  cursor: pointer;
  margin-left: 15px;
}*/
.header_cityName_common {
  font-size: 16px;
  color: #FFE4AA;
  cursor: pointer;
  margin-left: 15px;
}
.header_cityChange {
  font-size: 16px;
  color: #999;
  cursor: pointer;
  margin-left: 15px;
}
.commonClass.header_cityChange {
  color: #999;
}
.header_cityChange_common {
  color: #999;
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
  /*background: -webkit-linear-gradient(#FFE19C, #B58516);
  background: -o-linear-gradient(#FFE19C, #B58516);
  background: -moz-linear-gradient(#FFE19C, #B58516);
  background: linear-gradient(#FFE19C, #B58516);*/
  border-bottom: 3px solid rgb(190, 148, 43);
  color: #fff;
}
.header_nav li.active a {
  color: rgb(190, 148, 43);
}
.commonClass.header_nav li.active {
  /*background: -webkit-linear-gradient(#FFE19C, #B58516);
  background: -o-linear-gradient(#FFE19C, #B58516);
  background: -moz-linear-gradient(#FFE19C, #B58516);
  background: linear-gradient(#FFE19C, #B58516);*/
  border-bottom: 3px solid rgb(190, 148, 43);
  color: #fff;
}
.commonClass.header_nav li.active a {
  color: rgb(190, 148, 43);
}
.header_nav_items {
  display: inline-block;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  color: #222;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}
.header_nav_items_common {
  color: #222;
}
.header_login {
  position: relative;
  display: flex;
  justify-content: center;
}
/*.header_login_personal, .header_login_company {
  margin: 0 9px;
  font-size: 16px;
  color: #777;
  cursor: pointer;
}*/
.header_loginState {
  display: flex;
  align-items: center;
  width: 156px;
  height: 80px;
  cursor: pointer;
}
.header_login:hover .header_loginState{
  background: #FFF8E8;
}
/*.header_login:hover .header_personNav{
  display: block;
}*/
.header_visitorImg {
  width: 50px;
  height: 50px;
}
.header_visitorName {
  font-size: 18px;
  color: #222;
  margin-left: 10px;
}
.header_personNav {
  position: absolute;
  top: 80px;
  width: 100%;
  padding-top: 3px;
  /*display: none;*/
}
.header_personNav li a {
  width: 156px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  font-size: 14px;
  color: #666666;
  display: inline-block;
  background: #fff;
}
.header_personNav li:first-child a {
  border-radius: 4px 4px 0 0 ;
}
.header_personNav li:last-child {
  border-radius:  0 0 4px 4px;
  width: 156px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  font-size: 14px;
  color: #666666;
  display: inline-block;
  background: #fff;
  cursor: pointer;
}
.header_personNav li:last-child:hover {
 background: #FFF8E8;
}
.header_personNav li a:hover {
  background: #FFF8E8;
}
</style>
