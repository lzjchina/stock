<template>
  <div class="ChangeCity" v-if="getisShowChangeCity">
    <!-- 遮罩 -->
    <div class="ChangeCity_cover"></div>
    <!-- 内容 -->
    <div class="ChangeCity_box">
      <div class="ChangeCity_titlebox">
        <h3>切换城市</h3>
        <button @click="hideChangeCity">×</button>
      </div>
      <div class="ChangeCity_main">
        <h2>亲爱的用户您好：</h2>
        <p>切换城市分站，让我们为您提供更准确的职位信息。</p>
        <div class="ChangeCity_tips">
          <img src="../../assets/header_cityLocal.png">
          <span>当前定位 :</span>
          <span class="cityColor">{{selectCity}}</span>
          <span>,返回</span>
          <span class="cityColor" @click="getBackLastCity">{{lastSelect}}</span>
          <span>或切换到</span>
        </div>
        <div class="cityBigBox">
          <ul class="cityBox">
            <li class="cityName" v-for="(items, index) in cityNames" :key="index" :class="{active:items.isActive}" @click="selectCityName(items, index)">{{items.name}}</li>
            <li class="cityName" @click="getMoreCity">更多</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeCity',
  data () {
    return {
      msg: 'ChangeCity',
      cityNames: '',
      selectCity: '深圳',
      lastSelect: '上海'
    }
  },
  methods: {
    hideChangeCity: function () {
      this.$store.commit('emitisShowChangeCity', false)
      // console.log(this.$store.state.isShowChangeCity)
      this.lastSelect = this.selectCity
    },
    getMoreCity: function () {
      var _this = this
      this.$ajax.get('static/json/home.json').then(function (res) {
        _this.cityNames = res.data.changeCity.moreCity
      })
    },
    selectCityName: function (items, index) {
      this.selectCity = items.name
      var _this = this
      for (var i = _this.cityNames.length - 1; i >= 0; i--) {
        _this.cityNames[i].isActive = false
      }
      items.isActive = true
    },
    getBackLastCity: function () {
      this.selectCity = this.lastSelect
    }
  },
  computed: {
    getisShowChangeCity: function () {
      return this.$store.state.isShowChangeCity
    }
  },
  beforeMount () {
    var _this = this
    this.$ajax.get('static/json/home.json').then(function (res) {
      _this.cityNames = res.data.changeCity.city16
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ChangeCity {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.ChangeCity_cover {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #000000;
  opacity: 0.7;
}
.ChangeCity_box {
  width: 640px;
  height: 564px;
  position: absolute;
  top: 124px;
  left: calc(50% - 320px);
  background: #FFFFFF;
  opacity: 1;
}
.ChangeCity_titlebox {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #CA9F3B;
}
.ChangeCity_titlebox h3 {
  height: 100%;
  margin-left: 29px;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
}
.ChangeCity_titlebox button {
  height: 100%;
  margin-right: 21px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.ChangeCity_main {
  width: 580px;
  padding: 30px 28px 0 32px;
}
.ChangeCity_main h2 {
  font-size: 18px;
  color: #000000;
}
.ChangeCity_main p {
  font-size: 18px;
  color: #666;
  line-height: 58px;
}
.ChangeCity_tips {
  font-size: 18px;
  color: #666666;
  border-top: 1px solid #D7D7D7;
  padding: 20px 0 31px 0;
}
.ChangeCity_tips img{
  width: 20px;
  height: 27px;
}
.cityColor {
  color: #CA9F3B;
  cursor: pointer;
}
.cityName {
  width: 113px;
  height: 48px;
  border: 1px solid #B8B8B8;
  color: #999999;
  font-size: 18px;
  line-height: 48px;
  text-align: center;
  /*margin: 0 40px 27px 0;*/
  margin: 0 34px 27px 0;
  cursor: pointer;
}
.cityName.active {
  border-color: #CA9F3B;
  color: #CA9F3B;
}
.cityBigBox {
  width: 100%;
  height: 308px;
  overflow: hidden;
  overflow-y: auto;
}
.cityBox {
  display: flex;
  flex-wrap: wrap;
  width: 682px;
}
</style>
