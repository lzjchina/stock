<template>
  <div class="Aboutus">
    <Header propRouternum="3" getBgcolor="rgba(45, 45, 45, 0.5)" isConmonStyle=true ConmonActive="activecommon"></Header>
    <div class="aboutus_topSec">
      <img class="aboutus_bigImg" src="static/images/aboutusb.png"/>
      <div class="aboutus_nav">
        <ul class="aboutus_navBox">
          <li :class="{active:items.isActive}" v-for="(items, index) in usNavName" :key="index" @click="changeSection(items, index)">{{items.navName}}</li>
        </ul>
      </div>
      <!-- 提示标题 -->
      <div class="aboutus_tipTitle">
        <h3>{{tipsTitleCh}}</h3>
        <b>{{tipsTitleEn}}</b>
      </div>
      <!-- 关于我们 -->
      <div class="Aboutus_aboutus" v-show="isAboutus">
        <div class="Aboutus_aboutus_sec1">
          <p>股王金来</p>
          <p>中国专业的股权转让平台</p>
          <div>
            <img src="static/images/aboutusimg1.png"/>
            <p>股王金来，是深圳股王金来网络有限公司下属的国内最专业的股权转让服务平台。股王金来，是深圳股王金来网络有限公司下属的国内最专业的股权转让服务平台。股王金来，是深圳股王金来网络有限公司下属的国内最专业的股权转让服务平台。股王金来，是深圳股王金来网络有限公司下属的国内最专业的股权转让服务平台。股王金来，是深圳股王金来网络有限公司下属的国内最专业的股权转让服务平台。股王金来，是深圳股王金来网络有限公司下属的国内最专业的股权转让服务平台。网络有限公司下属的国内最专业的股权转让服务平台。</p>
          </div>
        </div>
        <div class="Aboutus_aboutus_sec2">
          <div class="aboutus_tipTitle">
            <h3>不要错过</h3>
            <b>投资下一个“顶尖股权”机会</b>
            <div class="jionUs">加入我们</div>
          </div>
        </div>
        <div class="Aboutus_aboutus_sec3">
          <div class="aboutus_tipTitle">
            <h3>创始人</h3>
            <b>FOUNDER</b>
          </div>
          <ul>
            <li v-for="(items, index) in founder" :key="index">
              <img :src="items.url"/>
              <h4>{{items.foundername}}</h4>
              <h5>{{items.type}}</h5>
              <p>{{items.describe}}</p>
            </li>
          </ul>
        </div>
        <div class="Aboutus_aboutus_sec4">
          <div class="aboutus_tipTitle">
            <div>专注于</div>
            <h3>提供最专业的股权流通解决方案</h3>
            <b>E  Q  U  I  T  Y    T  R  A  N  S  F  E  R</b>
          </div>
        </div>
      </div>
      <!-- 实力优势 -->
      <div v-show="isAdvantage" class="Aboutus_Advantage">
        <ul>
          <li class="Aboutus_listBox clearfix">
            <div class="imgBox">
              <div class="imgBoxLine"></div>
              <img src="static/images/aboutusimg2.png">
            </div>
            <div class="textBox">
              <div>
                <img src="static/images/aboutusimg4.png">
                <h3>产品优势</h3>
              </div>
              <h4>专业的产品开发团队，完善的产品引入审核流程</h4>
              <p>股王金来以优质资产的价值发现和稳健成长为基础，以“为客户创造价值”为产品设计原则，通过专业的产品开发团队、严谨完善的产品引入审核流程，深入研究市场需求，不断进行产品创新</p>
            </div>
          </li>
          <li class="Aboutus_listBox clearfix">
            <div class="imgBox">
              <div class="imgBoxLine"></div>
              <img src="static/images/aboutusimg2.png">
            </div>
            <div class="textBox">
              <div>
                <img src="static/images/aboutusimg4.png">
                <h3>产品优势</h3>
              </div>
              <h4>专业的产品开发团队，完善的产品引入审核流程</h4>
              <p>股王金来以优质资产的价值发现和稳健成长为基础，以“为客户创造价值”为产品设计原则，通过专业的产品开发团队、严谨完善的产品引入审核流程，深入研究市场需求，不断进行产品创新</p>
            </div>
          </li>
          <li class="Aboutus_listBox clearfix">
            <div class="imgBox">
              <div class="imgBoxLine"></div>
              <img src="static/images/aboutusimg2.png">
            </div>
            <div class="textBox">
              <div>
                <img src="static/images/aboutusimg4.png">
                <h3>产品优势</h3>
              </div>
              <h4>专业的产品开发团队，完善的产品引入审核流程</h4>
              <p>股王金来以优质资产的价值发现和稳健成长为基础，以“为客户创造价值”为产品设计原则，通过专业的产品开发团队、严谨完善的产品引入审核流程，深入研究市场需求，不断进行产品创新</p>
            </div>
          </li>
        </ul>
        <div>
          <div>
            <img src="static/images/aboutusimg4.png">
            <h3>产品优势</h3>
          </div>
          <ul>
            <li>
              <div class="imgBox">
                <div class="imgBoxLine"></div>
                <img src="static/images/aboutusimg2.png">
              </div>
              <h2></h2>
            </li>
            <li>
              <div class="imgBox">
                <div class="imgBoxLine"></div>
                <img src="static/images/aboutusimg2.png">
              </div>
              <h2></h2>
            </li>
            <li>
              <div class="imgBox">
                <div class="imgBoxLine"></div>
                <img src="static/images/aboutusimg2.png">
              </div>
              <h2></h2>
            </li>
          </ul>
        </div>
      </div>
      <!-- 企业荣誉 -->
      <div v-show="isHonor" class="Aboutus_Honor">
        honor
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../Common/Header'
import Footer from '../Common/Footer'
export default {
  name: 'Aboutus',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      msg: 'Aboutus',
      tipsTitleCh: '关于我们',
      tipsTitleEn: 'ABOUT US',
      isAboutus: false,
      isAdvantage: true,
      isHonor: false,
      usNavName: [
        {
          navName: '关于我们',
          isActive: true,
          tipsTitleEn: 'ABOUT US'
        },
        {
          navName: '实力优势',
          isActive: false,
          tipsTitleEn: 'ADVANTAGE'
        },
        {
          navName: '企业荣誉',
          isActive: false,
          tipsTitleEn: 'HONOR'
        }
      ],
      founder: [
        {
          url: 'static/images/company1.png',
          foundername: '张先生',
          type: '创始人',
          describe: '张先生拥有10年的投资领域工作经验，曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么。'
        },
        {
          url: 'static/images/company1.png',
          foundername: '张先生',
          type: '联合创始人',
          describe: '张先生拥有10年的投资领域工作经验，曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么。'
        },
        {
          url: 'static/images/company1.png',
          foundername: '张先生',
          type: '合伙人',
          describe: '张先生拥有10年的投资领域工作经验，曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么曾经什么什么。'
        }
      ]
    }
  },
  methods: {
    changeSection: function (items, index) {
      var _this = this
      for (var i = _this.usNavName.length - 1; i >= 0; i--) {
        _this.usNavName[i].isActive = false
      }
      items.isActive = true
      this.tipsTitleCh = items.navName
      this.tipsTitleEn = items.tipsTitleEn
      if (index === 0) {
        this.isAboutus = true
        this.isAdvantage = false
        this.isHonor = false
      } else if (index === 1) {
        this.isAboutus = false
        this.isAdvantage = true
        this.isHonor = false
      } else if (index === 2) {
        this.isAboutus = false
        this.isAdvantage = false
        this.isHonor = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aboutus_topSec {
  width: 100%;
}
.aboutus_bigImg {
  width: 100%;
  height: 420px;
}
.aboutus_nav {
  width: 100%;
  height: 80px;
  background: #272656;
}
.aboutus_navBox {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
}
.aboutus_navBox li {
  width: 328px;
  height: 80px;
  font-size: 18px;
  color: #fff;
  line-height: 80px;
  text-align: center;
  cursor: pointer;
}
.aboutus_navBox li.active {
  color: #272656;
  background: #fff;
}
.aboutus_tipTitle {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
}
.aboutus_tipTitle h3 {
  font-size: 36px;
  /*font-weight: bold;*/
  color: #222;
}
.aboutus_tipTitle b {
  font-size: 18px;
  /*font-weight: bold;*/
  color: #222;
  line-height: 34px;
  border-top: 1px solid #D7D7D7;
  border-bottom: 1px solid #D7D7D7;
  margin-top: 20px;
}
.Aboutus_aboutus {
  width: 100%;
}
.Aboutus_aboutus_sec1 {
  padding-top: 66px;
  width: 1200px;
  margin: 0 auto;
}
.Aboutus_aboutus_sec1 p {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #777;
  line-height: 36px;
}
.Aboutus_aboutus_sec1 div {
  margin: 140px 0 100px 0;
  display: flex;
}
.Aboutus_aboutus_sec1 div img {
  width: 600px;
  height: 300px;
}
.Aboutus_aboutus_sec1 div p {
  width: 535px;
  text-align: left;
  font-size: 14px;
  color: #777;
  line-height: 30px;
  margin-left: 30px;
}
.Aboutus_aboutus_sec2 {
  width: 100%;
  height: 258px;
  background: #E8E8E8;
}
.Aboutus_aboutus_sec2 .aboutus_tipTitle{
  margin: 0;
  padding-top: 38px;
}
.Aboutus_aboutus_sec2 .aboutus_tipTitle h3{
  font-size: 30px;
}
.Aboutus_aboutus_sec2 .aboutus_tipTitle b{
  font-size: 18px;
}
.Aboutus_aboutus_sec2 .aboutus_tipTitle .jionUs{
  font-size: 18px;
  color: #fff;
  width: 230px;
  height: 66px;
  line-height: 66px;
  text-align: center;
  background: #CA9F3B;
  margin-top: 30px;
  border-radius: 4px;
  cursor: pointer;
}
.Aboutus_aboutus_sec3 .aboutus_tipTitle{
  padding-top: 99px;
}
.Aboutus_aboutus_sec3 .aboutus_tipTitle{
  font-size: 36px;
}
.Aboutus_aboutus_sec3 ul {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding-top: 119px;
}
.Aboutus_aboutus_sec3 ul li {
  width: 278px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 174px;
}
.Aboutus_aboutus_sec3 ul li:first-child {
  margin-left: 0px;
}
.Aboutus_aboutus_sec3 ul li img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid #CA9F3B;
  margin-bottom: 40px;
}
.Aboutus_aboutus_sec3 ul li h4 {
  font-size: 22px;
  color: #555555;
}
.Aboutus_aboutus_sec3 ul li h5 {
  font-size: 18px;
  color: #555555;
  margin-top: 17px;
}
.Aboutus_aboutus_sec3 ul li p {
  font-size: 14px;
  color: #777;
  line-height: 24px;
  margin: 49px 0 160px 0;
}
.Aboutus_aboutus_sec4 {
  background: #F4F4F4;
  width: 100%;
  height: 260px;
}
.Aboutus_aboutus_sec4 .aboutus_tipTitle{
  padding: 0;
}
.Aboutus_aboutus_sec4 .aboutus_tipTitle div{
  font-size: 18px;
  color: #222;
  margin: 46px 0 20px 0;
}
.Aboutus_aboutus_sec4 .aboutus_tipTitle h3{
  font-size: 18px;
  color: #222;
  border-top: 1px solid #D7D7D7;
  border-bottom: 1px solid #D7D7D7;
}
.Aboutus_aboutus_sec4 .aboutus_tipTitle b{
  font-size: 18px;
  color: #222;
  border-top: 0;
  border-bottom: 0;
}
.Aboutus_Advantage {
  width: 1200px;
  margin: 0 auto;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
.float_l {
  float: left;
}
.float_r {
  float: right;
}
.Aboutus_Advantage .imgBox {
  width: 580px;
  height: 320px;
  position: relative;
}
.Aboutus_Advantage .imgBox .imgBoxLine {
  width: 560px;
  height: 300px;
  position: absolute;
  border: 1px solid #CA9F3B;
  left: 0;
  top: 0;
  z-index: 1;
}
.Aboutus_Advantage .imgBox img {
  width: 560px;
  height: 300px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
}
.Aboutus_listBox {
  margin-top: 88px;
}
.Aboutus_listBox:nth-child(2n) .imgBox {
  float: right;
}
.Aboutus_listBox:nth-child(2n) .textBox {
  width: 504px;
  margin-right: 37px;
  float: left;
}
.Aboutus_listBox:nth-child(2n + 1) .imgBox {
  float: left;
}
.Aboutus_listBox:nth-child(2n + 1) .textBox {
  width: 504px;
  margin-right: 37px;
  float: right;
}
.textBox div {
  display: flex;
  align-items: center;
}
.textBox div img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.textBox div h3 {
  font-size: 24px;
  color: #222;
  font-weight: bold;
}
.textBox h4 {
  font-size: 24px;
  color: #222;
  line-height: 84px;
}
.textBox p {
  font-size: 14px;
  color: #777;
  line-height: 30px;
}
</style>
