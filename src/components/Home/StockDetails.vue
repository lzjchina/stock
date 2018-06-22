<template>
  <div class="StockDetails">
    <Header propRouternum="99"></Header>
    <div class="StockDetails_main">
      <h1 class="StockDetails_main_tips">首页>股权详情</h1>
      <!-- top -->
      <div class="StockDetails_companyMsgBox">
        <div class="StockDetails_companyMsg">
          <img src="static/images/company1.png">
          <ul class="StockDetails_companyTips">
            <li class="StockDetails_companyName">{{stockData.StockDetails_companyName}}</li>
            <li class="StockDetails_companyDescribe">{{stockData.StockDetails_companyDescribe}}</li>
            <li class="StockDetails_companyType">{{stockData.StockDetails_companyType}}</li>
          </ul>
          <div class="StockDetails_Iwant">我有意向</div>
        </div>
        <div>
          <ul class="StockDetails_companyMsgNav">
            <li v-for="(items, index) in navNames" :key="index" :class="{active:items.isActive}"><a :href="'#StockDetails_bottom' + index" :class="{active:items.isActive}" @click="clickcompanyMsgNav(items)">{{items.name}}</a></li>
          </ul>
        </div>
      </div>
      <!-- bottom side -->
      <div class="StockDetails_details">
        <!-- bottom -->
        <div class="StockDetails_bottom">
          <div id="StockDetails_bottom0">
            <div class="StockDetails_title">
              <span class="StockDetails_line"></span>
              <h3 class="StockDetails_name">项目介绍</h3>
            </div>
            <ul class="stockDetails_margin_tl_3835">
              <li class="stockDetails_margin_b_41">
                <h4 class="stockDetails_details_companyName">{{stockData.stockDetails_details_companyName}}</h4>
                <p>{{stockData.stockDetails_details_companyTips}}</p>
              </li>
              <li class="stockDetails_margin_b_41 stockDetails_flex">
                <h4 class="stockDetails_margin_r_15">发布时间：</h4>
                <p>{{stockData.publicTime}}</p>
              </li>
              <li class="stockDetails_margin_b_41 stockDetails_flex">
                <h4 class="stockDetails_margin_r_15">职工人数 :</h4>
                <p>{{stockData.workerNum}}</p>
              </li>
              <li class="stockDetails_margin_b_41 stockDetails_flex">
                <h4 class="stockDetails_margin_r_15">项目所属阶段：</h4>
                <p>{{stockData.projectStep}}</p>
              </li>
              <li class="stockDetails_margin_b_41 stockDetails_flex">
                <h4 class="stockDetails_margin_r_15">办公地址 :</h4>
                <p>{{stockData.position}}</p>
              </li>
              <li class="stockDetails_margin_b_41 stockDetails_flex">
                <h4 class="stockDetails_margin_r_15">官网：</h4>
                <p>{{stockData.network}}</p>
              </li>
            </ul>
          </div>
          <div id="StockDetails_bottom1">
            <div class="StockDetails_title">
              <span class="StockDetails_line"></span>
              <h5 class="StockDetails_name">特别告知</h5>
            </div>
            <div class="stockDetails_margin_tl_3835 stockDetails_flex" style="position: relative;">
              <ul>
                <li class="stockDetails_flex stockDetails_margin_b_41">
                  <h4 class="stockDetails_margin_r_15">是否涉及重大债权债务处置事项 :</h4>
                  <p>{{stockData.iszaiwu}}</p>
                </li>
                <li class="stockDetails_flex stockDetails_margin_b_41">
                  <h4 class="stockDetails_margin_r_15">是否涉及管理层参与受让：</h4>
                  <p>{{stockData.isguanli}}</p>
                </li>
                <li class="stockDetails_flex stockDetails_margin_b_41">
                  <h4 class="stockDetails_margin_r_15">是否涉及职工安置：</h4>
                  <p>{{stockData.iszgap}}</p>
                </li>
                <li class="stockDetails_flex stockDetails_margin_b_41">
                  <h4 class="stockDetails_margin_r_15">是否涉及外资收购限制或者禁制：</h4>
                  <p>{{stockData.iswaizi}}</p>
                </li>
              </ul>
              <ul style="position: absolute;left: 414px;">
                <li class="stockDetails_flex stockDetails_margin_b_41">
                  <h4 class="stockDetails_margin_r_15">原股东是否放弃优先受让权：</h4>
                  <p>{{stockData.network}}</p>
                </li>
                <li class="stockDetails_flex stockDetails_margin_b_41">
                  <h4 class="stockDetails_margin_r_15">是否含有国有划拨土地：</h4>
                  <p>{{stockData.isguoyoudi}}</p>
                </li>
                <li class="stockDetails_flex stockDetails_margin_b_41">
                  <h4 class="stockDetails_margin_r_15">是否涉及上市公司国有股权间接转让：</h4>
                  <p>{{stockData.isshangshi}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div id="StockDetails_bottom2">
            <div class="StockDetails_title">
              <span class="StockDetails_line"></span>
              <h5 class="StockDetails_name">联系方式</h5>
            </div>
            <div class="StockDetails_linkStyle">
              <ul class="StockDetails_linkStyle_sec1">
                <li><i>联系人：</i><span>{{stockData.linkPeople}}</span></li>
                <li><i>邮箱：</i><span>{{stockData.email}}</span></li>
              </ul>
              <ul class="StockDetails_linkStyle_sec2">
                <li><i>电话：</i><span>{{stockData.tel}}</span></li>
                <li><i>微信：</i><span>{{stockData.wechat}}</span></li>
              </ul>
            </div>
          </div>
          <div id="StockDetails_bottom3">
            <div class="StockDetails_title">
              <span class="StockDetails_line"></span>
              <h5 class="StockDetails_name">项目文档</h5>
            </div>
            <div class="stockDetails_fileBt">
              <button class="stockDetails_downLoad">下载文档</button>
            </div>
          </div>
        </div>
        <!-- side -->
        <div class="StockDetails_side">
          <h1>本轮股权转让信息</h1>
          <ul>
            <li>
              <span>转让对价</span>
              <b>{{stockData.zrdj}}</b>
            </li>
            <li>
              <span>股权占比</span>
              <b>{{stockData.gqzb}}</b>
            </li>
            <li>
              <span>本轮估值</span>
              <b>{{stockData.mgjq}}</b>
            </li>
            <li>
              <span>每股多少价格</span>
              <b>{{stockData.blgz}}</b>
            </li>
          </ul>
          <p>
            <span>备注：</span>
            {{stockData.bz}}
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../Common/Header'
import Footer from '../Common/Footer'
export default {
  name: 'StockDetails',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      msg: {
        uid: '',
        num: 1
      },
      navNames: [
        {
          name: '项目介绍',
          isActive: true
        },
        {
          name: '特别告知',
          isActive: false
        },
        {
          name: '联系方式',
          isActive: false
        },
        {
          name: '项目文档',
          isActive: false
        }
      ],
      stockData: ''
    }
  },
  beforeMount () {
    var _this = this
    this.msg.uid = this.$store.state.StockDetailsMsg.s_id
    this.msg.num = this.$store.state.StockDetailsMsg.s_index
    console.log(this.msg)
    this.$ajax.get('static/json/stockDetails.json').then(function (res) {
      _this.stockData = res.data[_this.msg.uid]['index' + _this.msg.num]
    })
  },
  methods: {
    clickcompanyMsgNav: function (items) {
      for (var i = this.navNames.length - 1; i >= 0; i--) {
        this.navNames[i].isActive = false
      }
      items.isActive = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.StockDetails_main {
  background: #F3F3F3;
  padding: 0 0 20px 0;
  margin-top: 80px;
}
.StockDetails_main_tips {
  width: 1191px;
  height: 55px;
  margin: 0 auto;
  line-height: 55px;
  padding-left: 9px;
  font-size: 14px;
  color: #999;
}
.StockDetails_box {
  width: 1200px;
  margin: 0 auto;
}
.StockDetails_companyMsgBox {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
}
.StockDetails_companyMsg {
  display: flex;
  align-items: center;
  margin: 30px 0 0 30px;
  position: relative;
}
.StockDetails_companyMsg img{
  width: 116px;
  height: 116px;
}
.StockDetails_companyTips {
  margin-left: 18px;
}
.StockDetails_companyName {
  font-size: 22px;
  color: #222;
}
.StockDetails_companyDescribe {
  font-size: 16px;
  color: #666;
  margin: 14px 0 21px 0;
}
.StockDetails_companyType {
  font-size: 16px;
  color: #FF7112;
  background: #FFE3D0;
  width: 96px;
  height: 37px;
  line-height: 37px;
  text-align: center;
}
.StockDetails_Iwant {
  position: absolute;
  width: 150px;
  height: 46px;
  text-align: center;
  line-height: 46px;
  background: #C1942B;
  color: #FEFEFE;
  font-size: 18px;
  right: 40px;
  top: 80px;
  border-radius: 4px;
  cursor: pointer;
}
.StockDetails_companyMsgNav {
  margin-left: 51px;
  margin-top: 50px;
  display: flex;
}
.StockDetails_companyMsgNav li a {
  padding-bottom: 23px;
  width: 106px;
  text-align: center;
  display: inline-block;
}
.StockDetails_companyMsgNav li a {
  padding-bottom: 23px;
  width: 106px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  color: #666;
  font-weight: bold;
}
.StockDetails_companyMsgNav li.active {
  border-bottom: 3px solid #C1932B;
}
.StockDetails_companyMsgNav li a.active {
  color: #222;
}
.StockDetails_details {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.StockDetails_bottom {
  width: 810px;
  margin-top: 20px;
  background: #fff;
}
.StockDetails_side {
  width: 330px;
  height: 410px;
  padding: 20px 20px 0 20px;
  max-height: 500px;
  margin-left: 20px;
  margin-top: 20px;
  background: #fff;
}
.StockDetails_side ul {
  margin-top: 26px;
}
.StockDetails_side p {
  margin-top: 34px;
  font-size: 14px;
  color: #666666;
}
.StockDetails_side span {
  font-size: 14px;
  color: #222222;
  font-weight: bold;
}
.StockDetails_side ul li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #D7D7D7;
  padding-bottom: 10px;
  margin-top: 35px;
}
.StockDetails_side ul li b{
  font-size: 16px;
  color: #C1932B;
  font-weight: bold;
}
.StockDetails_title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D7D7D7;
}
.StockDetails_line {
  width: 5px;
  height: 20px;
  display: inline-block;
  background: #CA9F3B;
  margin: 0 10px 0 20px;
}
.StockDetails_name {
  font-size: 18px;
  color: #222;
  line-height: 54px;
  font-weight: bold;
}
.test {
  width: 100%;
  height: 500px;
}
.stockDetails_margin_tl_3835 {
  margin: 38px 0 0 35px;
}
.stockDetails_margin_b_41 {
  margin-bottom: 41px;
}
.StockDetails_bottom h4 {
  font-size: 14px;
  color: #222;
  font-weight: bold;
}
.StockDetails_bottom p {
  font-size: 14px;
  color: #666;
}
.stockDetails_flex {
  display: flex;
}
.stockDetails_details_companyName {
  margin-bottom: 20px;
}
.stockDetails_margin_r_15 {
  margin-right: 15px;
}
.StockDetails_linkStyle {
  display: flex;
  padding: 58px 200px 52px 200px;
  justify-content: space-around;
  font-size: 14px;
  color: #666666;
}
.StockDetails_linkStyle ul li {
  margin-bottom: 34px;
}
.stockDetails_fileBt {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
}
.stockDetails_downLoad {
  width: 150px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 18px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  outline: none;
}
</style>
