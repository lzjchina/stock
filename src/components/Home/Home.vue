<template>
  <div class="home">
    <!-- 头部 -->
    <Header homenum="0" propRouternum=0 getBgcolor="rgba(45, 45, 45, 0.5)" isConmonStyle=false></Header>
    <!-- 切换城市 -->
    <!-- <ChangeCity></ChangeCity> -->
    <!-- 注册 -->
    <CheckIn></CheckIn>
    <!-- 登录 -->
    <PersonLogin></PersonLogin>
    <!-- 轮播 -->
    <swiper class="slid" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(str, index) in listImg" :style="{ background: 'url(' + str.url + ')' + 'center/100% 100% no-repeat' }" :key="index"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!-- 搜索 -->
    <div class="home_search">
       <div class="home_searchBox">
         <div class="home_search_input">
           <input class="home_inputbox" type="text" name="search" placeholder="请输入搜索关键词" />
           <div class="home_searchbtn">
            <img src="../../assets/search.png">
            <span class="home_searchText">搜索</span>
           </div>
         </div>
         <div class="home_newAddProject">
          本周新增项目
          <span class="home_newAddProjectNum">8</span>
          <span class="home_newAddProjectNum">8</span>
          <span class="home_newAddProjectNum">8</span>
          个
        </div>
       </div>
       <div class="home_search_tip">
         热门搜索：
         <span class="home_search_hotW">股权转让</span>
         <span class="home_search_hotW">实物资产转让</span>
       </div>
    </div>
    <!-- 主体内容 -->
    <div class="home_main">
      <div class="home_main_box">
        <!-- 导航 -->
        <ul class="home_main_nav">
          <li class="home_main_navItems" v-for="(item, index) in home_main_navBtNames" :key="index" :class="{active:item.isClick}">
            <div @click="clickNavBtn(index, item, item.id)" class="home_main_navBtns" :class="{active:item.isClick}">
              <img :src="item.logo" alt="">
              <span>{{item.name}}</span>
              <div class="home_Triangle" v-if="item.isClick"></div>
            </div>
            <!-- <span class="home_main_navLine"></span> -->
          </li>
        </ul>
        <!-- 列表 -->
        <table class="home_table">
          <thead>
            <tr v-for="(headItem, headIndex) in homeDta_thead" :key="headIndex">
              <th class="home_th1">{{headItem.entryName}}</th>
              <th class="home_th2">{{headItem.BulletinTitle}}</th>
              <th class="home_th3">{{headItem.Price}}</th>
              <th class="home_th4">{{headItem.state}}</th>
              <th class="home_th5">{{headItem.date}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(bodyItem, bodyIndex) in homeDta_tbody" :key="bodyIndex" @click="jumpToStockDetails(bodyIndex)">
                <th class="home_th1">{{bodyItem.entryName}}</th>
                <th class="home_th2">{{bodyItem.BulletinTitle}}</th>
                <th class="home_th3">{{bodyItem.Price}}</th>
                <th class="home_th4" :class="{stating:bodyItem.isStating}">{{bodyItem.state}}</th>
                <th class="home_th5">{{bodyItem.date}}</th>
            </tr>
          </tbody>
        </table>
        <!-- 更多项目 -->
        <div class="home_moreProject">
          更多项目
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from '../Common/Footer'
import CheckIn from './CheckIn'
// import ChangeCity from './ChangeCity'
import PersonLogin from '../Common/PersonLogin'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide,
    CheckIn,
    PersonLogin
  },
  data () {
    return {
      msg: '古往今来',
      homeDta: '',
      homeDta_thead: '',
      homeDta_tbody: '',
      swiperOption: {
        notNextTick: true,
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      listImg: [
        {url: 'static/logo.png'}, {url: 'static/logo.png'}, {url: 'static/logo.png'}, {url: 'static/logo.png'}, {url: 'static/logo.png'}
      ],
      home_main_navBtNames: [
        {
          name: '金融',
          logo: 'static/images/logos/search.png',
          clickLogo: 'static/images/logos/search.png',
          isClick: true,
          id: 'Finance'
        },
        {
          name: '房地产',
          logo: 'static/images/logos/search.png',
          clickLogo: 'static/images/logos/search.png',
          isClick: false,
          id: 'estate'
        },
        {
          name: 'IT互联网',
          logo: 'static/images/logos/search.png',
          clickLogo: 'static/images/logos/search.png',
          isClick: false,
          id: 'IT'
        },
        {
          name: '消费品',
          logo: 'static/images/logos/search.png',
          clickLogo: 'static/images/logos/search.png',
          isClick: false,
          id: 'goods'
        },
        {
          name: '汽车制造',
          logo: 'static/images/logos/search.png',
          clickLogo: 'static/images/logos/search.png',
          isClick: false,
          id: 'car'
        },
        {
          name: '其它',
          logo: 'static/images/logos/search.png',
          clickLogo: 'static/images/logos/search.png',
          isClick: false,
          id: 'other'
        }
      ],
      StockDetails_needMsg: {
        s_id: 'Finance',
        s_index: 0
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  beforeMount () {
    var _this = this
    this.$ajax.get('static/json/home.json').then(function (res) {
      _this.homeDta = res.data
      _this.homeDta_thead = res.data.table.home_thead
      _this.homeDta_tbody = res.data.table.home_tbody.Finance
      // console.log(_this.homeDta.table.home_thead)
      // console.log(_this.homeDta_thead)
      // console.log(_this.homeDta_tbody)
    })
  },
  methods: {
    clickNavBtn: function (index, item, id) {
      var _this = this
      this.StockDetails_needMsg.s_id = id
      this.$store.commit('emitStockDetailsMsg', _this.StockDetails_needMsg)
      for (var i = this.home_main_navBtNames.length - 1; i >= 0; i--) {
        this.home_main_navBtNames[i].isClick = false
      }
      item.isClick = true
      this.getTableData(id)
    },
    getTableData: function (id) {
      var _this = this
      this.$ajax.get('static/json/home.json').then(function (res) {
        _this.homeDta_tbody = res.data.table.home_tbody[id]
        // console.log(_this.homeDta.table.home_thead)
        // console.log(_this.homeDta_thead)
        // console.log(_this.homeDta_tbody)
      })
    },
    jumpToStockDetails: function (index) {
      // console.log(index)
      var _this = this
      this.StockDetails_needMsg.s_index = index
      this.$store.commit('emitStockDetailsMsg', _this.StockDetails_needMsg)
      this.$router.push('/StockDetails?nameNum=' + index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
}
.slid {
  width: 100%;
  /*height: 462px;*/
  height: 756px;
  /*margin-top: 80px;*/
}
.slid .swiper-pagination-bullet {
  background: #8f9cb2;
  opacity: 1;
}
.slid .swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}
.slid .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 36px;
}
.home_search {
  width: 100%;
  height: 60px;
  /*padding-top: 40px;*/
  /*border-bottom: 1px solid #d7d7d7;*/
  position: absolute;
  top: 600px;
  z-index: 10;
  height: 135px;
  padding-top: 21px;
  background: rgba(5, 5, 5, 0.5);
}
.home_searchBox {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home_search_input {
  width: 792px;
  height: 60px;
  display: flex;
}
.home_search_input .home_inputbox {
  width: 610px;
  height: 56px;
  font-size: 20px;
  color: #999;
  line-height: 56px;
  padding-left: 21px;
}
.home_searchbtn {
  background: -webkit-linear-gradient(#FFE19C, #B58516); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#FFE19C, #B58516); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#FFE19C, #B58516); /* Firefox 3.6 - 15 */
  background: linear-gradient(#FFE19C, #B58516); /* 标准的语法 */
  cursor: pointer;
  padding: 0 28px;
  height: 60px;
  display: flex;
  align-items: center;
}
.home_searchbtn img {
  width: 38px;
  height: 39px;
}
.home_searchText {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  margin-left: 14px;
  font-size: 24px;
  color: #FEFEFE;
}
.home_newAddProject {
  width: 288px;
  height: 60px;
  background: #ebebeb;
  font-size: 18px;
  color: #999;
  line-height: 60px;
  text-align: center;
}
.home_newAddProject .home_newAddProjectNum {
  color: #222;
  background: #fff;
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
}
.home_search_tip {
  width: 1100px;
  margin: 0 auto;
  padding-top: 14px;
  font-size: 16px;
  color: #fff;
}
.home_search_hotW {
  margin-right: 30px;
  cursor: pointer;
}
.home_main {
  width: 100%;
  padding-top: 40px;
  background: #f3f3f3;
}
.home_main_box {
  width: 1140px;
  margin: 0 auto;
  background: #fff;
  padding: 37px 30px 203px 30px;
}
.home_main_nav {
  display: flex;
  align-items: center;
  /*padding-bottom: 49px;*/
  margin-bottom: 54px;
  border-bottom: 1px solid #D7D7D7;
}
.home_main_navItems {
  /*display: flex;
  justify-content: center;
  align-items: center;*/
  width: 160px;
  height: 179px;
  margin-right: 34px;
}
.home_main_navItems.active {
  border-bottom: 3px solid #CA9F3B;
}
.home_main_navBtns {
  font-size: 22px;
  color: #444;
  width: 160px;
  height: 130px;
  line-height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #D7D7D7;
  position: relative;
}
.home_main_navBtns.active {
  background: #CA9F3B;
  color: #fff;
}
.home_main_navItems img {
  margin-right: 4px;
}
.home_main_navLine {
  display: inline-block;
  height: 22px;
  margin: 0 3px;
  border-left: 1px dotted #777;
}
.home_main_navItems:last-child .home_main_navLine {
  display: inline-block;
  height: 22px;
  margin: 0 3px;
  border-left: 0px dotted #777;
}
.home_table {
  /*width: 1060px;*/
  width: 1080px;
  margin: 0 auto;
  text-align: center;
}
.home_th1 {
  width: 264px;
  height: 80px;
  line-height: 80px;
  margin: 0;
  padding: 0;
  max-width: 264px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #666666;
}
.home_th2 {
  width: 310px;
  height: 80px;
  line-height: 80px;
  margin: 0;
  padding: 0;
  max-width: 310px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222222;
}
.home_th3 {
  width: 163px;
  height: 80px;
  line-height: 80px;
  margin: 0;
  padding: 0;
  max-width: 163px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #CA9F3B;
}
.home_th4 {
  width: 169px;
  height: 80px;
  line-height: 80px;
  margin: 0;
  padding: 0;
  max-width: 169px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #777777;
}
.home_th5 {
  width: 162px;
  height: 80px;
  line-height: 80px;
  margin: 0;
  padding: 0;
  max-width: 162px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #999999;
}
.home_table thead tr {
  background: #F3F3F3;
  font-size: 18px;
  color: #777;
}
.home_table tbody tr {
  font-size: 18px;
  color: #444;
  cursor: pointer;
}
.home_table tbody tr th{
  font-weight: normal;
}
.home_table tbody tr:nth-child(2n) {
  background: #F3F3F3;
}
.home_table tbody tr:nth-child(2n + 1) {
  background: #fff;
}
.home_table tbody tr .stating {
  color: #FF7112;
}
.home_moreProject {
  cursor: pointer;
  display: inline-block;
  margin: 29px 325px 0 325px;
  width: 450px;
  height: 70px;
  border: 1px solid #D7D7D7;
  border-radius: 10px;
  line-height: 70px;
  text-align: center;
  color: #CA9F3B;
  font-size: 24px;
}
.home_table thead tr th {
  font-size: 18px;
  color: #fff;
  background: #CA9F3B;
  border-right: 1px solid #fff;
}
.home_table thead tr th:last-child {
  border: none;
}
.home .slid .swiper-pagination-fraction[data-v-14708408], .swiper-pagination-custom[data-v-14708408], .swiper-container-horizontal > .swiper-pagination-bullets[data-v-14708408] {
  bottom: 213px;
}
.home_Triangle {
  position: absolute;
  bottom: -40px;
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: #CA9F3B transparent transparent transparent;
}
</style>
